import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl capitalize font-palanquin font-bold">
          our <span className=" text-coral-red">popular</span> products
        </h1>
        <p className="mt-2 capitalize text-slate-gray lg:max-w-lg font-montserrat">
          experience top-notch quality and style with our sought-after
          selections. discover a world of comfort, design, and value.
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => {
            return <PopularProductCard key={product.name} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
