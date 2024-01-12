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
        {/* <section className="px-5 py-14 bg-gainsboro sm:px-10">
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
        </section> */}
        <section className="px-5 py-10 flex flex-row flex-wrap justify-center gap-10 md:flex-row bg-gainsboro">
          <CardHome
            link="/mvp-yachts"
            title="Yacht Rentals"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati reiciendis aperiam vero ea nisi accusantium expedita laboriosam eos tempore quasi odio, eligendi, dolorem aut alias magnam, laborum ipsam voluptate vitae."
            imgName="yacht-home"
          />
          <CardHome
            link="/mvp-homes"
            title="Mansion Rentals"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati reiciendis aperiam vero ea nisi accusantium expedita laboriosam eos tempore quasi odio, eligendi, dolorem aut alias magnam, laborum ipsam voluptate vitae."
            imgName="mansion-home"
          />
          <CardHome
            link="/rentals"
            title="Vehicles Rentals"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati reiciendis aperiam vero ea nisi accusantium expedita laboriosam eos tempore quasi odio, eligendi, dolorem aut alias magnam, laborum ipsam voluptate vitae."
            imgName="car-home"
          />
        </section>
      </Layout>
    </>
  );
};
