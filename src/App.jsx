import { Route, Routes } from "react-router-dom";
import {
  Home,
  Rentals,
  MvpHomes,
  MvpYachts,
  Clients,
  Locations,
  Faq,
  AboutUs,
} from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/mvp-homes" element={<MvpHomes />} />
        <Route path="/mvp-yachts" element={<MvpYachts />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};
