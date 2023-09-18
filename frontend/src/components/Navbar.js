import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/' className="logo">epic blog</Link>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create">new</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;