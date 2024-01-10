import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rentals">VEHICLE RENTALS</Link>
        </li>
        <li>
          <Link to="/mvp-homes">MVP EXCLUSIVE HOMES</Link>
        </li>
        <li>
          <Link to="/mvp-yachts">MVP EXCLUSIVE YATCHS</Link>
        </li>
        <li>
          <Link to="/clients">CLIENTS</Link>
        </li>
        <li>
          <Link to="/locations">LOCATIONS</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/about-us">ABOUT US</Link>
        </li>
      </ul>
    </nav>
  );
};
