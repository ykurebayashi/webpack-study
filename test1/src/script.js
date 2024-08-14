import join from "lodash/join";
import "./style.css";
import mushroom from "./assets/ck-yeo-ZyEnQoFp8RQ-unsplash.jpg";

function component() {
    const element = document.createElement("div");

    element.innerHTML = join(["Hello", "webpack"], " ");

    return element;
}

function imageComponent() {
    const element = document.createElement("img");

    element.src = mushroom;

    return element;
}

document.body.appendChild(component());
document.body.appendChild(imageComponent()); 