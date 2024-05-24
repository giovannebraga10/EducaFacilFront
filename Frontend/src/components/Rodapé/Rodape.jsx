import React from "react";
import style from "./style.css";
import { Link } from 'react-router-dom';

export default function Rodape() {
    return (
        <footer>
            <div className="container-links-footer">
                <Link to="/sobrenos" className="links-footer">
                    <a className="link-footer">Saiba mais sobre nos</a>
                </Link>
                <Link to="/" className="links-footer">
                    <a className="link-footer">Home</a>
                </Link>
                <Link to="/organizações" className="links-footer">
                    <a className="link-footer">Conheça as ONGS</a>
                </Link>
                <Link to="/contato" className="links-footer">
                    <a className="link-footer">Confira os cursos disponiveis</a>
                </Link>
            </div>
        </footer>
    )
}