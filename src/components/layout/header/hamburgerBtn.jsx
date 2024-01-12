import { HamburguerIcon } from "../../icons";

export const HamburgerBtn = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <button
      className="p-1 text-orange border border-orange rounded-lg hover:bg-grey/30 hover:border-white hover:text-white transition-all duration-500"
      onClick={() => setMenuIsOpen(!menuIsOpen)}
    >
      <HamburguerIcon width={30} height={30} />
    </button>
  );
};
