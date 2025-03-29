import "./css/Navigation.css";
import {Outlet, Link} from "react-router-dom";

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
                    <li><a href="#">Home</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="book-catalog.html">Book Catalog</a></li>
                    <li><a href="community-corner.html">Community Corner</a></li>
                    <li><a href="shopping-cart.html">Shopping Cart</a></li>
                </ul>
            </nav>
        </div>
        </>
    );
}

export default Navigation;