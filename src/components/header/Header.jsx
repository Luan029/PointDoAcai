import React from "react";
import "./Header.css"

const Props = props =>
    <header id="home">
        <div className="headerLogo">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/4861/4861890.png" alt="logo" />
            </div>
            <div className="titulo">
                <h1>{props.title}</h1>
            </div>
        </div>
        <div className="subtitle">
            <h2>{props.subtitle}</h2>
        </div>
       
    </header>
export default Props