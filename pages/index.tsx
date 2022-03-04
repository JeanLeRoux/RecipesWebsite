export default function Home({ cocktails, dinners }) {
  console.log(dinners);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900">Cocktails</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
          {cocktails.Recipes.map((cocktail) => (
            <a href="#" className="group" key={cocktail.Id}>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={cocktail.Image}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{cocktail.Name}</h3>
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900">Dinners</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
          {dinners.Recipes.map((dinner) => (
            <a href="#" className="group" key={dinner.Id}>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={dinner.Image}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{dinner.Name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const res = await fetch("https://golang-food-api.herokuapp.com/getCocktails");
  const cocktails = await res.json();
  const dinnerResponse = await fetch("https://golang-food-api.herokuapp.com/getDinner");
  const dinners = await dinnerResponse.json();
  
  return {
    props: { cocktails, dinners }, // props will be passed to the page
  };
}
