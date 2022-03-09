import { useState } from "react";
import Item from "../../components/Item";
import Navbar from "../../components/Navbar";

export default function Dinners({ recipes }) {
  const [dinnersData, setDinnersData] = useState(recipes);
  const [lastId, setLastId] = useState(10);

  const fetchData = async () => {
    let url =
      "https://golang-food-api.herokuapp.com/getDinner?LastId=" + lastId;
    console.log(dinnersData);
    const req = await fetch(url);
    const newData = await req.json();
    setLastId(newData.LastId);
    setDinnersData([...dinnersData, ...newData.Recipes]);
  };

  const handleClick = async () => {
    await fetchData();
  };
  return (
    <div>
      <Navbar />
      <Item
        data={dinnersData}
        pageHeading="Dinner"
        handleLoadClick={handleClick}
      />
    </div>
  );
}
export async function getStaticProps(context) {
  const dinnerResponse = await fetch(
    "https://golang-food-api.herokuapp.com/getDinner"
  );
  const dinners = await dinnerResponse.json();
  let recipes = dinners.Recipes;

  return {
    props: { recipes }, // props will be passed to the page
  };
}
