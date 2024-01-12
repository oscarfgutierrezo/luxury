export const ItemIcon = ({ icon, text }) => {
  return (
    <li className="flex items-center gap-3">
      <i className="text-orange">{icon}</i>
      <p className="text-white">{text}</p>
    </li>
  );
};
