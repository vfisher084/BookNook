import "./css/BookDetails.css";

function BookDetails() {
    return(
        <>
            <main class="main-container">
                <div class="container1">
                    <section id="book-img">
                        <img src="images/220x250.png"></img>
                    </section>
                    <section id="book-info">
                        <h3>$$$</h3>
                        <p>Book Title:
                            <br>Author:</br>
                        </p>
                        <p>
                            Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </div>
                <div class="container2">
                    <section id="r-q-f">
                        <section id="reviews">
                            <h4><strong>Top Reviews</strong></h4>
                        </section>
                        <section id="quantity">
                            <h4>Select Quantity Button Here</h4>
                        </section>
                        <section id="format">
                            <h4>Format Selection Button Here</h4>
                        </section>
                    </section>
                    <section id="add-to-cart">
                        <h3>Add to Cart Button Here</h3>
                    </section>
                    <section id="similar-section">
                        <section id="similar-title">
                            <h4>Discover similar books & more information:</h4>
                        </section>
                        <section id="similar-books">
                        </section>
                    </section>
                </div>
            </main>
        </>
    );
}

export default BookDetails;