import { MessageIcon, ShareIcon } from "../icons";

export const CardRentalsCar = ({ infoCar }) => {
  const { name, img, price, year, text } = infoCar;
  return (
    <div className="max-w-[460px] rounded-lg overflow-hidden bg-grey font-seravekmedium">
      <h3 className="bg-[#141414] text-xl py-5 text-white font-bold text-center">
        {name}
      </h3>
      <img height="288" src={img} alt="Foto Rolls Royce" />
      <div className="p-4 flex justify-between text-white uppercase text-lg">
        <p>Prices starting at: {price}</p>
        <p>Year: {year}</p>
      </div>
      <p className="p-4 text-gainsboro font-sans text-sm text-center border-y border-gainsboro/30">
        {text}
      </p>
      <div className="p-4 flex flex-col gap-2 items-center font-seravekmedium">
        <button className="py-2 w-64 text-orange text-lg font-seravekmedium uppercase border border-orange rounded-full shadow-md shadow-black transition-all duration-500 hover:text-white hover:shadow-none">
          Photos
        </button>
        <button className="py-2 w-64 bg-orange text-lg font-seravekmedium uppercase border border-orange rounded-full shadow-md shadow-black transition-all duration-500 hover:text-white hover:shadow-none">
          Reserve Now
        </button>
      </div>
      <div className="border-t border-dark-grey p-3 grid grid-cols-2">
        <button className="flex items-center justify-center gap-1 uppercase text-white text-xs">
          <i className="text-red">
            <ShareIcon width={24} height={24} />
          </i>
          Share
        </button>
        <button className="flex items-center justify-center gap-1 uppercase text-white text-xs">
          <i className="text-red">
            <MessageIcon width={24} height={24} />
          </i>
          Send to phone
        </button>
      </div>
    </div>
  );
};
