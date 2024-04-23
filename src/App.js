export default function App() {
  return (
    <div className="py-20 px-2 max-w-4xl mx-auto">
      <h1 className="text-4xl lg:text-5xl text-neutral-800 bg-neutral-200 rounded-lg font-bold text-center">
        Foodpedia
      </h1>
      <form className="my-16">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a food"
          required
          className="w-full py-3 px-8 rounded-full bg-neutral-100 border-2 border-neutral-200 focus:border-neutral-800 focus:ring-4 focus:ring-neutral-800 outline-none lg:text-xl"
        />
      </form>

      <div>
        <article>
          <h2 className="flex flex-wrap items-center gap-4 text-3xl lg:text-4xl text-neutral-800 font-bold mb-12">
            Name of the food{" "}
            <span className="bg-neutral-200 font-normal text-sm px-2 rounded-full">
              Category
            </span>{" "}
            <span className="bg-neutral-200 font-normal text-sm px-2 rounded-full">
              Region
            </span>
          </h2>

          <img
            src="https://images.pexels.com/photos/20484222/pexels-photo-20484222/free-photo-of-eyes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <h3 className="text-2xl text-neutral-800 font-bold my-8">
            Ingredients
          </h3>
          <ul className="list-decimal pl-4">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>

          <h3 className="text-2xl text-neutral-800 font-bold my-8">
            Instructions
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ipsa
            adipisci fuga consequatur quidem dolore voluptatibus provident porro
            fugiat suscipit.
          </p>
          <ul className="flex items-center justify-start flex-wrap mt-8">
            <li className="bg-neutral-200 font-normal text-base px-2 rounded-full">Video</li>
            <li className="bg-neutral-200 font-normal text-base px-2 rounded-full">Source</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
