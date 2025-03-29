import "./css/Navigation.css";
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <>
           <div class="nav-container">
            <nav id="main-nav">
                <div id="toggle-nav">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" class="nav-columns hide-small">
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