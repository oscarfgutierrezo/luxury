import { Link } from "react-router-dom";

export const CardHome = ({ link, text, title, imgName }) => {
  const path = () => {
    return `src/assets/images/${imgName}.jpg`;
  };

  return (
    <Link to={link} className="w-full block relative overflow-hidden">
      <img
        className="w-full transition-all duration-700 hover:scale-110"
        src={path()}
        alt=""
      />
      <div className="absolute top-10 left-10 text-orange font-seravekmedium font-bold uppercase md:top-5 md:left-5 lg:top-10 lg:left-10">
        <p>{text}</p>
        <p className="pt-5 text-3xl md:text-2xl lg:text-3xl">{title}</p>
      </div>
    </Link>
  );
};
