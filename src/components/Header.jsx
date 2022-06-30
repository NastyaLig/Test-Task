import Search from "components/Search";
import { ReactComponent as Logo } from "assets/git.svg";
import "./Header.css";

const Header = ({ setSearch }) => {
  return (
    <header className="header">
      <Logo />
      <Search setSearch={setSearch} />
    </header>
  );
};
export default Header;
