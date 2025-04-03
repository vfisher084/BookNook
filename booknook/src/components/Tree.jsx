import "./css/Tree.css";
import {useState} from "react";

function Tree(props) {
    const [pruned, pruneTree] = useState(false);

    const doTreeJob = () => {
        pruneTree(!pruned);
    };

    return (
        <section className="tree">
            <h3 className={pruned?"done":""}>{props.name}</h3> 
            <p>{props.description}</p>
            <img src={props.image}/>
            <button onClick={doTreeJob}>Prune This Tree</button>
        </section>
    );
}

export default Tree;