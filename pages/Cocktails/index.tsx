import Navbar from "../../components/Navbar";
import { useState } from "react";
import Item from "../../components/Item";

export default function Home({ recipes }) {
  const [cocktailsData, setCocktailsData] = useState(recipes);
  const [lastId, setLastId] = useState(10);

  const fetchData = async () => {
    let url =
      "https://golang-food-api.herokuapp.com/getCocktails?LastId=" + lastId;
    console.log(cocktailsData);
    const req = await fetch(url);
    const newData = await req.json();
    setLastId(newData.LastId);
    setCocktailsData([...cocktailsData, ...newData.Recipes]);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <Navbar />
      <Item
        data={cocktailsData}
        pageHeading="Cocktails"
        handleLoadClick={handleClick}
      />
    </div>
  );
}
export async function getStaticProps(LastId) {
  const res = await fetch("https://golang-food-api.herokuapp.com/getCocktails");
  const cocktails = await res.json();
  let recipes = cocktails.Recipes;
  return {
    props: { recipes }, // props will be passed to the page
  };
}
