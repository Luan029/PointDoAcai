import React from "react";
import "./Footer.css"
import {FaLinkedinIn, FaGoogle,FaInstagram, FaGithubAlt} from "react-icons/fa"

const Footer = () =>{
    return(
        <footer>
            <div className="desenvolvido">
                <h2>Desenvolvido por <span>Luan Alves</span></h2>
                <ul className="redes">
                    <li><a href="https://www.linkedin.com/in/luan-alves-tech/"><FaLinkedinIn className="iconColor"/></a></li>
                    <li><a href="mailto:luanalves200201@gmail.com"><FaGoogle className="iconColor"/></a></li>
                    <li><a href="https://www.instagram.com/luan__alvees/"><FaInstagram className="iconColor"/></a></li>
                    <li><a href="https://github.com/Luan029"><FaGithubAlt className="iconColor"/></a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer