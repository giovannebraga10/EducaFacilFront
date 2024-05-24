import React from "react";
import styles from "./style.css"
import { BsHouse, BsBook, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Menu() {
    return (
        <nav className="menu-lateral">



            <ul>
                <li className="item-menu">
                    <Link to="/">
                        <span className="icon"><BsHouse /></span>
                        <span className="txt-link">Home</span>
                    </Link>
                </li>
                <li className="item-menu">
                    <Link to="/organizações">
                        <span className="icon"><BsBook /></span>
                        <span className="txt-link">Organizações</span>
                    </Link>
                </li>
                <li className="item-menu">
                    <Link to="/sobrenos">
                        <span className="icon"><BsPeople /></span>
                        <span className="txt-link">Sobre Nós</span>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}