import { Layout } from "../components/layout/layout";
import inventarySmallImg from "../assets/images/inventary-home-small.jpg";
import inventaryMediumImg from "../assets/images/inventary-home-medium.jpg";
import inventaryLargeImg from "../assets/images/inventary-home-large.jpg";

export const Home = () => {
  return (
    <>
      <Layout>
        <picture>
          <source srcSet={inventaryMediumImg} media="(min-width: 640px)" />
          <source srcSet={inventaryLargeImg} media="(min-width: 1024px)" />
          <img src={inventarySmallImg} alt="" />
        </picture>
      </Layout>
    </>
  );
};
