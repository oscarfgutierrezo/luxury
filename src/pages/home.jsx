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
