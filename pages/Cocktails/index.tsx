import Navbar from "../../components/Navbar";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PaperClipIcon, StarIcon, XIcon } from "@heroicons/react/outline";
import Item from "../../components/Item";

export default function Home({ cocktails }) {


  return (
    <div>
      <Navbar />
        <Item data={cocktails}/>
    </div>
  );
}
export async function getStaticProps(context) {
  const res = await fetch("https://golang-food-api.herokuapp.com/getCocktails");
  const cocktails = await res.json();

  return {
    props: { cocktails }, // props will be passed to the page
  };
}
