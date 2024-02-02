import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      {/* ./ navbar */}
      <section className=" xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      {/* ./ hero-section */}
      <section className="padding">
        <PopularProducts />
      </section>
      {/* ./ popular-products */}
      <section className="padding">
        <SuperQuality />
      </section>
      {/* ./ super-quality */}
      <section className="padding-x py-10 ">
        <Services />
      </section>
      {/* ./ services */}
      <section className="padding">
        <SpecialOffer />
      </section>
      {/* ./ special-offer */}
      <section className="padding bg-pale-blue ">
        <CustomerReviews />
      </section>
      {/* ./ customers */}
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      {/* ./ subscribe */}
      <footer className="bg-black padding-x padding-t pb-8 ">
        <Footer />
      </footer>
    </main>
  );
};

export default App;
