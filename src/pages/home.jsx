import {
  HandIcon,
  LinkIcon,
  MarkIcon,
  StarIcon,
  SucceedIcon,
} from "../components/icons";
import { ItemIcon } from "../components/item-icon";
import { Layout } from "../components/layout/layout";
import { LinkBtn } from "../components/link-btn";
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
        <section className="px-5 py-10 grid grid-cols-2 gap-7 bg-dark-grey sm:px-10">
          <div className="col-span-2 text-white lg:col-span-1">
            <h3 className="text-3xl font-medium pb-3">About us</h3>
            <p>
              MVP Exotics is Miami’s premiere luxury rental platform. MVP is
              known as the celebrities’ favorite in Miami. We cater to all of
              our client’s unique needs, and we treat them all with our
              exclusive MVP treatment.
            </p>
          </div>
          <ul className="col-span-2 flex flex-col gap-2 lg:col-span-1">
            <ItemIcon
              icon={<StarIcon width={20} height={20} />}
              text="Premiere exotic and luxury cars."
            />
            <ItemIcon
              icon={<SucceedIcon width={20} height={20} />}
              text="Complimentary private limo service from all of the surrounding airports to our showroom."
            />
            <ItemIcon
              icon={<HandIcon width={20} height={20} />}
              text="Our fleet of luxury vehicles for rent that includes Bentley, Rolls-Royce, Range Rover, Porsche, Audi, and BMW."
            />
            <ItemIcon
              icon={<MarkIcon width={20} height={20} />}
              text="Our fleet of Lamborghini’s for rent in Miami is very impressive."
            />
            <ItemIcon
              icon={<LinkIcon width={20} height={20} />}
              text="We have great reviews and are the leaders in high-end luxury rental vehicles."
            />
          </ul>
          <div className="col-span-2 flex justify-center">
            <LinkBtn path="/about-us" text="Read more" />
          </div>
        </section>
      </Layout>
    </>
  );
};
