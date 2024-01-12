import { Link } from "react-router-dom";

export const CardHome = ({ link, text, title, imgName }) => {
  const path = () => {
    return `src/assets/images/${imgName}.jpg`;
  };

  return (
    <>
      <Link className="max-w-[400px] min-w-[300px]" to={link}>
        <img
          className="mb-3 w-full rounded-xl object-cover"
          src={path()}
          alt=""
        />
        <h3 className="pb-2 text-3xl text-center">{title}</h3>
        <p className="text-center text-grey opacity-90">{text}</p>
      </Link>
    </>
  );
};
