import react from "react";
import ReactDOM from "react-dom";
import blogData from "../data/blog";

function About({image = "https://via.placeholder.com/215",about}){
    // const defaultImage = "https://via.placeholder.com/215"
    return (
        <aside>
            <img src={image} alt={"blog logo"}/>
            <p>{about}</p>
        </aside>
    )
}


export default About