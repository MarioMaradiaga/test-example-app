import { Link } from "react-router-dom";

function Navbar({ isAdmin }) {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      {isAdmin && <Link to="/settings">Admin Settings</Link>}
    </nav>
  );
}

export default Navbar;
