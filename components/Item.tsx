import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StarIcon, XIcon } from "@heroicons/react/outline";

export default function Item({ data, pageHeading, handleLoadClick }) {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState(0);
  const [stars, setStars] = useState(0);
  const [description, setDescription] = useState("");
  const [ingredientHeadings, setIngredientHeadings] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [method, setMethod] = useState([]);
  const [load, setLoading] = useState(false);

  const loadClick = () => {
    setLoading(()=>true);
    handleLoadClick();
    setLoading(()=>false);
  }

  const handleClick = (
    image: string,
    name: string,
    ratings: number,
    stars: number,
    description: string,
    IngredientHeadings: [string],
    ingredients: [],
    method: []
  ) => {
    setOpen(true);
    setImage(image);
    setName(name);
    setRatings(ratings);
    console.log(stars);
    setStars(stars);
    setDescription(description);
    setIngredientHeadings(IngredientHeadings);
    setIngredients(ingredients);
    setMethod(method);
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900">
            {pageHeading}
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
            {data.map((item) => (
              <div
                className="group"
                key={item.Id}
                onClick={() =>
                  handleClick(
                    item.Image,
                    item.Name,
                    item.Ratings,
                    item.Stars,
                    item.Description,
                    item.IngredientHeadings,
                    item.Ingredients,
                    item.Method
                  )
                }
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={item.Image}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{item.Name}</h3>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-3 mt-6">
            <button
              onClick={() => loadClick()}
              className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:col-start-2 xl:col-span-1 lg:col-start-2 lg:col-span-1 sm:col-start-2 sm:col-span-1"
            >
              {load ? (
                <div>
                  <svg
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </div>
              ) : (
                <div>More {pageHeading}</div>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                      <img
                        src={image}
                        alt="test"
                        className="object-center object-cover"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                        {name}
                      </h2>
                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-1xl text-gray-900">{description}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    stars > rating
                                      ? "text-gray-900"
                                      : "text-gray-200",
                                    "h-5 w-5 flex-shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{stars} out of 5 stars</p>
                            <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {ratings} reviews
                            </span>
                          </div>
                        </div>
                        <div className="border-t border-gray-200">
                          <dl>
                            {ingredientHeadings.map((heading, index) => (
                              <div
                                className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                                key={heading}
                              >
                                <dt className="text-sm font-medium text-gray-500">
                                  {heading}
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <ul
                                    role="list"
                                    className="border border-gray-200 rounded-md divide-y divide-gray-200"
                                  >
                                    {ingredients[index].map(
                                      (ingredient, index) => (
                                        <li
                                          className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                          key={index}
                                        >
                                          {ingredient}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <dl>
                              <div
                                className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                              >
                                <dt className="text-sm font-medium text-gray-500">
                                  Method
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <ul
                                    role="list"
                                    className="border border-gray-200 rounded-md divide-y divide-gray-200"
                                  >
                                    {method.map(
                                      (step, index) => (
                                        <li
                                          className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                          key={index}
                                        >
                                          {step}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </dd>
                              </div>
                          </dl>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
