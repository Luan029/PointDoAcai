import React from "react";
import "./Header.css"

const Header = () =>{
    return (
        <React.Fragment>
            <header>
                <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/4861/4861890.png" alt="logo" />
                </div>
                <div className="titulo">
                    <h1>POINT DO AÇAÍ</h1>
                </div>
            </header>
        </React.Fragment>
    )
}
export default Header