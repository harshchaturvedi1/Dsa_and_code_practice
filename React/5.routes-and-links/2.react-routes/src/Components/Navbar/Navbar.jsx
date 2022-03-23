import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/first">Page1</Link>
      <Link to="/second">Page2</Link>
      <Link to="/third">Page3</Link>
    </div>
  );
};
