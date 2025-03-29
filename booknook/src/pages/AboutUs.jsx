import "./css/AboutUs.css";

function AboutUs() {
    return(
        <>
            <h2 id="page-title">About Us</h2>
        <main>
            <div class="container1">
                <section id="story-img">
                    <img src="images/our-story.jpg"></img>
                </section>
                <section id="story-info">
                    <h3><strong>Our Story</strong></h3>
                    <p>
                        BookNook was created out of a love for books and a passion for bringing readers
                        together. As avid book readers, we wanted to create
                        a space for fellow readers to explore and discover new books all while forming 
                        connections with others about the books they've read by sharing their thoughts 
                        in Community Corner. BookNook isn't just any ordinary online book store, it's a safe
                        haven where readers can come together to create discussions and ask questions about anything
                        book-related their hearts desire. BookNook is designed to be a website that makes it easy not
                        only to purchase your favorite books, but also explore and analyze them in an entirely different way.
                    </p>
                </section>
            </div>
            <div class="container2">
                <section id="mission-info">
                    <h3><strong>Our Mission</strong></h3>
                    <p>
                        At BookNook, our mission is simple: to make finding and discussing books easier and more engaging for everyone.
                        We believe that books have the power to inspire, educate, and bring people together, which is why we offer an
                        expansive book catalog to browse, customer and critic reviews, and a community space where readers can discuss 
                        and share their thoughts. Whether you're here to browse, buy, or chat about your favorite novel or latest read,
                        we hope BookNook becomes your go-to place for all things books!
                    </p>
                </section>
                <section id="mission-img">
                    <img src="images/our-mission.jpg"></img>
                </section>
            </div>
        </main>
        </>
    );
}

export default AboutUs;