import { Link } from "react-router-dom";

export const BannerHome = ({ imgName, text, link }) => {
  const path = (size) => {
    return `src/assets/images/${imgName}-${size}.jpg`;
  };
  return (
    <>
      <picture>
        <source srcSet={path("large")} media="(width >= 1024px)" />
        <source
          srcSet={path("medium")}
          media="(width >= 640px) and (width < 1024px)"
        />
        <img
          className="w-full h-full object-cover"
          src={path("small")}
          alt="Conjunto de carros exhibidos"
        />
      </picture>
      <Link
        to={link}
        className="w-max absolute translate-x-1/2 bottom-5 right-1/2 px-5 py-1 text-base
             font-seravekmedium uppercase bg-orange rounded-full shadow-black/70 shadow-md hover:shadow-none transition-all duration-500 sm:py-2 sm:bottom-8"
      >
        {text}
      </Link>
    </>
  );
};
