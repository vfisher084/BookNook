import "./css/CommunityCorner.css";
import {Link} from "react-router-dom";

function CommunityCorner() {
    return(
        <>
            <div id="page-title-cc">
                <h2 id="h2-cc">🕮 Community Corner 🕮</h2>
            </div>
            <div id="quote">
                <h3 id="h3-cc"><em>"We read to know we are not alone"</em> -C.S. Lewis</h3>
            </div>
            <div className="big-container-cc">
            <div className="container3-cc">
                <Link id="link-cc" to="/bookdetails">
                    <img id="img-cc" src="images/inheritance-games.jpg" />
                    <h4 id="h4-cc">Check out the most-discussed book of the week!</h4>
                </Link>
            </div>
            <main className="main-container-cc">
                <div className="container1-cc">
                    <h3 id="h3-cc">Discussions</h3>
                    <section id="discussions">
                        <section id="topics">
                            <h4 id="h4-cc">Trending Topics</h4>
                            <p>Topic List Placeholder</p>
                        </section>
                    </section>
                </div>
                <div className="container2-cc">
                    <section id="create-discussion">
                        <h4 id="h4-cc">Create a Discussion</h4>
                        <section id="info">
                            <p>
                                General Topic Dropdown Menu Placeholder
                                <br /> Discussion Title Placeholder
                                <br />Discussion Description Textbox Placeholder
                                <br />Username Placeholder
                                <br />Submit
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