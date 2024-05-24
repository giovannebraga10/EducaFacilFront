import React, { useEffect, useState } from 'react';
import styles from './style.css';
import Logo from "../img/logo.png"
import { AiFillCaretDown } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useSessionStorage } from '@uidotdev/usehooks';
import { obterOrganizacao } from '../../services/organizacoes';
import { IoMdExit } from "react-icons/io";


export default function Cabecalho() {
    const [jwtToken, setJwtToken] = useSessionStorage("JwtToken");
    const [userInfo, setUserInfo] = useSessionStorage("UserInfo");
    const navigate = useNavigate();

    const [org, setOrg] = useState()

    useEffect(() => {
        if (jwtToken) {
            obterOrganizacao(userInfo.sub).then(setOrg)
        }
    }, [jwtToken])

    const handleLogout = () => {
        setJwtToken("")
        setUserInfo("")
        setOrg()
        navigate(0)
    }

    const renderLoginButtons = () => {
        return (
            <div className="botoes-login">
                <Link to="/login" className='linksemsublinhado'>
                    <button className="btn">Fazer login</button>
                </Link>
                <Link to="/cadastro" className='linksemsublinhado'>
                    <button className="btn">Cadastre-se</button>
                </Link>
            </div>
        )
    }

    const renderProfile = () => {
        return (
            <div className="botoes-login">
                {org.nome}
                <button className="botao-sair" onClick={handleLogout}><IoMdExit/></button>
            </div>
        )
    }

    return (
        <header>
            <figure>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </figure>
            <nav className='drop-hover'>
                <div className='categorias'> <a className='texto'>Categorias <AiFillCaretDown /></a> </div>
                <div className='drop'>
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JAVASCRIPT</a>
                    <a href="#">C#</a>
                    <a href="#">ORIENTAÇÂO A OBJETO</a>
                </div>
            </nav>

            {org ? renderProfile() : renderLoginButtons()}

        </header>
    )
}

