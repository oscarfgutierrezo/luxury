import { Link } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { BannerHome } from "../components/pages/banner-home";
import { CardHome } from "../components/pages/card-home";

export const Home = () => {
  return (
    <>
      <Layout>
        <section>
          <BannerHome
            imgName="mercedes-home"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              maiores nobis incidunt fugit dolorum animi sequi. Incidunt placeat
              repellat possimus dolore facere, inventore labore officia alias
              itaque dicta quisquam atque?"
            textBtn="View all inventary"
            link="/rentals"
          />
        </section>
        <section className="px-5 py-14 bg-gainsboro sm:px-10">
          <h2 className="pb-5 text-4xl uppercase">About Us</h2>
          <p className="pb-5 leading-8 text-[#1c1c1c]">
            MVP Exotics is Miami’s premiere luxury rental platform. MVP is known
            as the celebrities’ favorite in Miami. We cater to all of our
            client’s unique needs, and we treat them all with our exclusive MVP
            treatment.
          </p>
          <Link
            to="/about-us"
            className="w-max px-5 py-1 text-base
             font-seravekmedium uppercase bg-orange rounded-full shadow-black/70 shadow-md hover:shadow-none transition-all duration-500 sm:py-2"
          >
            Read More
          </Link>
        </section>
        <section className="flex flex-col md:flex-row">
          <CardHome
            link="/mvp-yachts"
            title="Yacht Rentals"
            text="Browser our"
            imgName="yacht-home"
          />
          <CardHome
            link="/mvp-homes"
            title="Mansion Rentals"
            text="View"
            imgName="mansions-home"
          />
          <CardHome
            link="/rentals"
            title="Next Exotic"
            text="Rent your"
            imgName="exotic-home"
          />
        </section>
      </Layout>
    </>
  );
};
