import { Header } from "./header/header";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
};
