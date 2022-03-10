import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Dinners({ recipes }) {
  const [dinnersData, setDinnersData] = useState(recipes);
  const [lastId, setLastId] = useState(10);
  const categories = [
    {
      name: 'Dessert',
      imageSrc: "/assets/dessert.jpg",
      imageAlt: 'Baked Cake'
    },
    {
      name: 'Cocktails',
      imageSrc: "/assets/cocktail.jpg",
      imageAlt: 'A Cocktail'
    },
    {
      name: 'Dinner',
      imageSrc: "/assets/dinner.jpg",
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    },
  ]

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
      <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {categories.map((category) => (
              <div key={category.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}