import "./css/Navigation.css";
import {Link} from "react-router-dom";
import {useState} from "react";

function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <>
           <div className="nav-container">
            <nav id="main-nav">
                <button onClick={toggleMenu}>
                    <div id="toggle-nav">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
                <ul id="nav-items" className={menuOpen?"":"hide-small"} >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/bookcatalog">Book Catalog</Link></li>
                    <li><Link to="/communitycorner">Community Corner</Link></li>
                    <li><Link to="/shoppingcart">Shopping Cart</Link></li>
                </ul>
            </nav>
            </div>
        </>
    );
}

export default Navigation;