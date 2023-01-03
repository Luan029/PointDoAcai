import React from "react";
import "./Header.css"

const Props = props =>
    <header>
        <div className="titulo">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    </header>
export default Props