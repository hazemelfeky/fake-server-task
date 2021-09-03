import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <h1>The Company</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
      </div>
    </div>
  );
}

export default Header;