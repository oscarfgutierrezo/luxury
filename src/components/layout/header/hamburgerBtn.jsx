import { HamburguerIcon } from "../../icons";

export const HamburgerBtn = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <button
      className="text-orange lg:hidden"
      onClick={() => setMenuIsOpen(!menuIsOpen)}
    >
      <HamburguerIcon width={36} height={36} />
    </button>
  );
};
