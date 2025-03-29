import './css/Home.css';
//import Tree from '../components/Tree';

function Home() {
  return (
    <>
      <main>
            <div class="container1">
                <section class="new-and-popular">
                    <h2>New & Popular</h2>
                    <div id="home-imgs">
                        <section id="book">
                            <a href="book-details.html?id=13">
                                <img src="images/onyxstorm3.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=14">
                                <img src="images/theletthemtheory.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=15">
                                <img src="images/thelifeimpossible.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=16">
                                <img src="images/fearless.jpg"></img>
                            </a>
                        </section>
                    </div>
                    <p>This month's showcase of new releases that have been eagerly talked about and are flying off the shelves.</p>
                </section>
                <section class="classics">
                    <h2>Popular Classics</h2>
                    <div id="home-imgs">
                        <section id="book">
                            <a href="book-details.html?id=17">
                                <img src="images/janeeyre.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=18">
                                <img src="images/wutheringheights.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=19">
                                <img src="images/lotr.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=20">
                                <img src="images/dracula.jpg"></img>
                            </a>
                        </section>
                    </div>
                    <p>Trending classic novels that we like to consider "oldies but goodies".</p>
                </section>
                <section class="fiction">
                    <h2>Popular Fiction & Fantasy</h2>
                    <div id="home-imgs">
                        <section id="book">
                            <a href="book-details.html?id=21">
                                <img src="images/harrypotterpoa.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=9">
                                <img src="images/acotar2.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=4">
                                <img src="images/awp3.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=22">
                                <img src="images/sixofcrows.jpg"></img>
                            </a>
                        </section>
                    </div>
                    <p>Dive into these trending fiction and fantasy books that will take you on a journey in a whole new world...</p>
                </section>
                <section class="non-fiction">
                    <h2>Popular Non-fiction</h2>
                    <div id="home-imgs">
                        <section id="book">
                            <a href="book-details.html?id=23">
                                <img src="images/talkingtostrangers.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=24">
                                <img src="images/behave.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=25">
                                <img src="images/braidingsweetgrass.jpg"></img>
                            </a>
                        </section>
                        <section id="book">
                            <a href="book-details.html?id=26">
                                <img src="images/outliers.jpg"></img>
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
