import Navbar from "../../components/Navbar";
import { useState } from "react";
import Item from "../../components/Item";

export default function Home({ recipes }) {
  const [dessertsData, setdessertsData] = useState(recipes);
  const [lastId, setLastId] = useState(10);

  const fetchData = async () => {
    let url =
      "https://golang-food-api.herokuapp.com/getDesserts?LastId=" + lastId;
    console.log(dessertsData);
    const req = await fetch(url);
    const newData = await req.json();
    setLastId(newData.LastId);
    setdessertsData([...dessertsData, ...newData.Recipes]);
  };

  const handleClick = async () => {
    await fetchData();
  };

  return (
    <div>
      <Navbar />
      <Item
        data={dessertsData}
        pageHeading="Desserts"
        handleLoadClick={handleClick}
      />
    </div>
  );
}
export async function getStaticProps(LastId) {
  const res = await fetch("https://golang-food-api.herokuapp.com/getDesserts");
  const desserts = await res.json();
  let recipes = desserts.Recipes;
  return {
    props: { recipes }, // props will be passed to the page
  };
}
