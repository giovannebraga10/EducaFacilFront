import React from "react";
import { useState } from "react";
import style from './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../../services/login";
import { useSessionStorage } from "@uidotdev/usehooks";
import { jwtDecode } from 'jwt-decode'





export default function Login() {
    const [, setJwtToken] = useSessionStorage("JwtToken", "")
    const [, setUserInfo] = useSessionStorage("UserInfo", "")
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password).then((token) => {
            setJwtToken(token)
            setUserInfo(jwtDecode(token))
        }).then(() => navigate("/"))
    }

    return (
        <section className="content-cadastro">
            <div className="container-login">
                <section className="header-login">
                    <h2>Login</h2>
                </section>
                <form id="form" className="form-login" onSubmit={handleSubmit}>

                    <div className="input-email-login">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Digite o Email da Organização"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>

                    <div className="input-senha-login">
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite a sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <button type="submit" onSubmit={handleSubmit}>Entrar</button>
                </form>
            </div>
        </section>
    )
}