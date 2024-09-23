import { MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import BtnContext from "../context/btnContext";

function Header() {
    const {handleClick} = useContext(BtnContext);

  return (
    <div className="header">
      <h2 className="header-heading">Where in the world?</h2>
      <button onClick={handleClick} className="theme-btn">
        <MdOutlineDarkMode />
        Dark Mode
      </button>
    </div>
  );
}

export default Header;
