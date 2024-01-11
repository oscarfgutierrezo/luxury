import { Link } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { BannerHome } from "../components/pages/banner-home";
import { CardHome } from "../components/pages/card-home";

export const Home = () => {
  return (
    <>
      <Layout>
        <section className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 bg-dark-grey">
          <div className="col-span-1 relative min-h-[200px] lg:col-span-2">
            <BannerHome
              imgName="inventary-home"
              text="View all inventary"
              link="/rentals"
            />
          </div>
          <div className="col-span-1 relative h-[400px]">
            <BannerHome
              imgName="rentals-home"
              text="View exclusive rentals"
              link="/rentals"
            />
          </div>
          <div className="col-span-1 relative h-[400px]">
            <BannerHome
              imgName="reserve-home"
              text="Reserve now"
              link="/about-us"
            />
          </div>
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
