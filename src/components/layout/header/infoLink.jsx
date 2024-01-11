export const InfoLink = ({ path, icon, text }) => {
  return (
    <a
      href={path}
      className="flex items-center gap-1 text-sm text-gainsboro font-seravekmedium uppercase sm:text-lg"
    >
      <i className="text-orange">{icon}</i>
      <p>{text}</p>
    </a>
  );
};
