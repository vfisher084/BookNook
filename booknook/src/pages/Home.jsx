import './css/Home.css';
import BookHome from '../components/Book-Home';
import { Link } from 'react-router-dom';

function Home() {

  const newBooks = [
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"}
  ];

  const classics = [
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"}
  ];

  const fiction = [
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"}
  ];

  const nonFiction = [
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"},
    {id: 1, image: "images/fourthwing.jpg"}
  ];


  return (
    <>
      <main>
            <div className="container1">
                <section className="new-and-popular">
                    <h2>New & Popular</h2>
                    <div id="home-imgs">
                        {newBooks.map((book) => (
                          <section key={book.id} className="book-home">
                            <Link to={`/bookdetails/${book.id}`}>
                              <BookHome image={book.image} />
                            </Link>
                          </section>
                        ))}
                    </div>
                    <p>This month's showcase of new releases that have been eagerly talked about and are flying off the shelves.</p>
                </section>
                <section className="classics">
                    <h2>Popular Classics</h2>
                    <div id="home-imgs">
                        {classics.map((book) => (
                          <section key={book.id} className="book-home">
                            <Link to={`/bookdetails/${book.id}`}>
                              <BookHome image={book.image} />
                            </Link>
                          </section>
                        ))}
                    </div>
                    <p>Trending classic novels that we like to consider "oldies but goodies".</p>
                </section>
                <section className="fiction">
                    <h2>Popular Fiction & Fantasy</h2>
                    <div id="home-imgs">
                        {fiction.map((book) => (
                          <section key={book.id} className="book-home">
                            <Link to={`/bookdetails/${book.id}`}>
                              <BookHome image={book.image} alt={book.title} />
                            </Link>
                          </section>
                        ))}
                    </div>
                    <p>Dive into these trending fiction and fantasy books that will take you on a journey in a whole new world...</p>
                </section>
                <section className="non-fiction">
                    <h2>Popular Non-fiction</h2>
                    <div id="home-imgs">
                    {nonFiction.map((book) => (
                          <section key={book.id} className="book-home">
                            <Link to={`/bookdetails/${book.id}`}>
                              <BookHome image={book.image} alt={book.title} />
                            </Link>
                          </section>
                        ))}
                    </div>
                    <p>If your thirst for knowledge needs to be quenched, check out some of these trending non-fiction novels.</p>
                </section>
            </div>
        </main>
    </>
  );
}

export default Home;
