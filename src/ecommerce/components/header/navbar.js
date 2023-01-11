import "./header.css";
import { navData } from "../../data/data";
import { Icon } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
const Navbar = () => {
  const Navbtns = () => {
    return <></>;
  };
  return (
    <div className="Navbar row">
      <div className="col-2">
        <img
          src="./images/Color logo - no background.png"
          alt=""
          className="navLogo"
        />
      </div>
      <div className="col-6">
        <input typeof="text" placeholder="Search any things..." />
        <button>Search</button>
      </div>
      <div className="col-4">
        <i></i>
      </div>
    </div>
  );
};

export default Navbar;
