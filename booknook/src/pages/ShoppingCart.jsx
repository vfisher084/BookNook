import "./css/ShoppingCart.css";

function ShoppingCart() {
    return(
        <>
            <div id="my-cart">
                <h2>My Cart</h2>
            </div>
            <main class="main-container">
                <div class="container1">
                    <section id="order-summary">
                        <h3>Order Summary</h3>
                        <section id="cart-books">
                            <section id="book">
                                <img src="images/100x120.png"></img>
                                <p>Title
                                    <br>Format:</br> 
                                </p>
                            </section>
                            <section id="book">
                                <img src="images/100x120.png"></img>
                                <p>Title
                                    <br>Format:</br> 
                                </p>
                            </section>
                            <section id="book">
                                <img src="images/100x120.png"></img>
                                <p>Title
                                    <br>Format:</br>
                                </p>
                            </section>
                            <section id="book">
                                <img src="images/100x120.png"></img>
                                <p>Title
                                    <br>Format:</br>
                                </p>
                            </section>
                        </section>
                    </section>
                </div>
                <div class="container2">
                    <section id="quantity">
                        <h4>Quantity:</h4>
                    </section>
                    <section id="shipping">
                        <h4>Estimated Shipping Cost: $$$</h4>
                    </section>
                    <section id="order-total">
                        <h4>Order Total: $$$</h4>
                    </section>
                    <section id="place-order">
                        <h3>Place Order Button Here</h3>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ShoppingCart;