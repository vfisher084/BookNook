import "./css/ShoppingCart.css";

function ShoppingCart() {
    return(
        <>
            <div id="my-cart">
                <h2 id="h2-sc">My Cart</h2>
            </div>
            <main class="main-container-sc">
                <div class="container1-sc">
                    <section id="order-summary">
                        <h3 id="h3-sc">Order Summary</h3>
                        <section id="cart-books">
                            <section id="book">
                                <img src="images/100x120.png"></img>
                                <p>Title
                                    <br />Format: 
                                </p>
                            </section>
                            <section id="book">
                                <img src="images/100x120.png"></img>
                                <p>Title
                                    <br />Format: 
                                </p>
                            </section>
                            <section id="book">
                                <img src="images/100x120.png"></img>
                                <p>Title
                                    <br />Format:
                                </p>
                            </section>
                            <section id="book">
                                <img src="images/100x120.png"></img>
                                <p>Title
                                    <br />Format:
                                </p>
                            </section>
                        </section>
                    </section>
                </div>
                <div class="container2-sc">
                    <section id="quantity">
                        <h4 id="h4-sc">Quantity:</h4>
                    </section>
                    <section id="shipping">
                        <h4 id="h4-sc">Estimated Shipping Cost: $$$</h4>
                    </section>
                    <section id="order-total">
                        <h4 id="h4-sc">Order Total: $$$</h4>
                    </section>
                    <section id="place-order">
                        <h3 id="h3-sc">Place Order Button Here</h3>
                    </section>
                </div>
            </main>
        </>
    );
}

export default ShoppingCart;