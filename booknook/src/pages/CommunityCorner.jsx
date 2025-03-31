import "./css/CommunityCorner.css";
import {Link} from "react-router-dom";

function CommunityCorner() {
    return(
        <>
            <div id="page-title-cc">
                <h2>🕮 Community Corner 🕮</h2>
            </div>
            <div id="quote">
                <h3><em>"We read to know we are not alone"</em> -C.S. Lewis</h3>
            </div>
            <div className="big-container-cc">
            <div className="container3-cc">
                <Link to="/bookdetails">
                    <img id="img-cc" src="images/inheritance-games.jpg" />
                    <h4>Check out the most-discussed book of the week!</h4>
                </Link>
            </div>
            <main className="main-container-cc">
                <div className="container1-cc">
                    <h3>Discussions</h3>
                    <section id="discussions">
                        <section id="topics">
                            <h4>Trending Topics</h4>
                            <p>Topic List Placeholder</p>
                        </section>
                    </section>
                </div>
                <div className="container2-cc">
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