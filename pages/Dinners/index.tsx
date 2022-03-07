import Item from "../../components/Item";
import Navbar from "../../components/Navbar";

export default function Dinners({ dinners }) {
  return (
    <div>
      <Navbar />
      <Item data={dinners}/>
    </div>
  );
}
export async function getStaticProps(context) {
  const dinnerResponse = await fetch(
    "https://golang-food-api.herokuapp.com/getDinner"
  );
  const dinners = await dinnerResponse.json();

  return {
    props: { dinners }, // props will be passed to the page
  };
}
