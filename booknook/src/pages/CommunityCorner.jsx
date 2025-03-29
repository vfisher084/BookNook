import "./css/CommunityCorner.css";

function CommunityCorner() {
    return(
        <>
            <div id="page-title">
                <h2>🕮 Community Corner 🕮</h2>
            </div>
            <div id="quote">
                <h3><em>"We read to know we are not alone"</em> -C.S. Lewis</h3>
            </div>
            <div class="big-container">
            <div class="container3">
                <a href="book-details.html">
                <img src="images/inheritance-games.jpg"></img>
                <h4>Check out the most-discussed book of the week!</h4>
            </a>
            </div>
            <main class="main-container">
                <div class="container1">
                    <h3>Discussions</h3>
                    <section id="discussions">
                        <section id="topics">
                            <h4>Trending Topics</h4>
                            <p>Topic List Placeholder</p>
                        </section>
                    </section>
                </div>
                <div class="container2">
                    <section id="create-discussion">
                        <h4>Create a Discussion</h4>
                        <section id="info">
                            <p>
                                General Topic Dropdown Menu Placeholder
                                <br>Discussion Title Placeholder</br>
                                <br>Discussion Description Textbox Placeholder</br>
                                <br>Username Placeholder</br>
                                <br>Submit</br>
                            </p>
                    </section>
                </section>
            </div>
        </main>
    </div>
        </>
    );
}

export default CommunityCorner;