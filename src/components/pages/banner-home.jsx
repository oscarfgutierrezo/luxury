import { LinkBtn } from "../link-btn";

export const BannerHome = ({ imgName, text, link, textBtn }) => {
  const path = (size) => {
    return `src/assets/images/${imgName}-${size}.jpg`;
  };
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
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

      <div className="absolute top-0 bottom-0 flex flex-col justify-evenly left-7 text-white md:left-10">
        <h3 className="text-3xl lg:text-5xl font-medium">Adipisicing elit</h3>
        <div className="w-1/3 h-max overflow-hidden">
          <p className="text-ellipsis line-clamp-5 lg:text-lg">{text}</p>
        </div>
        <LinkBtn path={link} text={textBtn} />
      </div>
    </div>
  );
};
