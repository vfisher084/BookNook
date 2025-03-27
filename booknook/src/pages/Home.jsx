import './css/Home.css';
import Tree from '../components/Tree';

function Home() {
  return (
    <>
      <section className="columns">
      <Tree 
        name="Live Oak"
        description="Doesn't lose its leaves"
        image="images/liveoak.jpg"/>
      <Tree
        name="Dogwood"
        description="Flowers in spring"
        image="images/dogwood.jpg"/>
      </section>
    </>
  );
}

export default Home;
