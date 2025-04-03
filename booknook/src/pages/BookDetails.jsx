import "./css/BookDetails.css";

function BookDetails() {
    return(
        <>
            <main className="main-container-bd">
                <div className="container1-bd">
                    <section id="book-img-bd">
                        <img id="img-bd" src="images/220x250.png" />
                    </section>
                    <section id="book-info">
                        <h3 id="h3-bd">$$$</h3>
                        <p>Book Title:
                            <br/> Author: 
                        </p>
                        <p>
                            Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </div>
                <div className="container2-bd">
                    <section id="r-q-f">
                        <section id="reviews">
                            <h4 id="h4-bd"><strong>Top Reviews</strong></h4>
                        </section>
                        <section id="quantity">
                            <h4 id="h4-bd">Select Quantity Button Here</h4>
                        </section>
                        <section id="format">
                            <h4 id="h4-bd">Format Selection Button Here</h4>
                        </section>
                    </section>
                    <section id="add-to-cart">
                        <h3 id="h3-bd">Add to Cart Button Here</h3>
                    </section>
                    <section id="similar-section">
                        <section id="similar-title">
                            <h4 id="h4-bd">Discover similar books & more information:</h4>
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