import './css/Home.css';

function Home() {

  return (
    <>
      <main>
            <div className="container1">
                <section class="new-and-popular">
                    <h2>New & Popular</h2>
                    <div id="home-imgs">
                        <section id="book">
                            <a href="book-details.html?id=13">
                                <img id="img-home" src="images/onyxstorm3.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=14">
                                <img id="img-home" src="images/theletthemtheory.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=15">
                                <img id="img-home" src="images/thelifeimpossible.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=16">
                                <img id="img-home" src="images/fearless.jpg"></img>
                            </a>
                        </section>
                    </div>
                    <p>This month's showcase of new releases that have been eagerly talked about and are flying off the shelves.</p>
                </section>
                <section className="classics">
                    <h2>Popular Classics</h2>
                    <div id="home-imgs">
                        <section id="book">
                            <a href="book-details.html?id=17">
                                <img id="img-home" src="images/janeeyre.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=18">
                                <img id="img-home" src="images/wutheringheights.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=19">
                                <img id="img-home" src="images/lotr.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=20">
                                <img id="img-home" src="images/dracula.jpg"></img>
                            </a>
                        </section>
                    </div>
                    <p>Trending classic novels that we like to consider "oldies but goodies".</p>
                </section>
                <section className="fiction">
                    <h2>Popular Fiction & Fantasy</h2>
                    <div id="home-imgs">
                        <section id="book">
                            <a href="book-details.html?id=21">
                                <img id="img-home" src="images/harrypotterpoa.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=9">
                                <img id="img-home" src="images/acotar2.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=4">
                                <img id="img-home" src="images/awp3.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=22">
                                <img id="img-home" src="images/sixofcrows.jpg"></img>
                            </a>
                        </section>
                    </div>
                    <p>Dive into these trending fiction and fantasy books that will take you on a journey in a whole new world...</p>
                </section>
                <section className="non-fiction">
                    <h2>Popular Non-fiction</h2>
                    <div id="home-imgs">
                        <section id="book">
                            <a href="book-details.html?id=23">
                                <img id="img-home" src="images/talkingtostrangers.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=24">
                                <img id="img-home" src="images/behave.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=25">
                                <img id="img-home" src="images/braidingsweetgrass.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=26">
                                <img id="img-home" src="images/outliers.jpg"></img>
                            </a>
                        </section>
                    </div>
                    <p>If your thirst for knowledge needs to be quenched, check out some of these trending non-fiction novels.</p>
                </section>
            </div>
        </main>
    </>
  );
}

export default Home;
