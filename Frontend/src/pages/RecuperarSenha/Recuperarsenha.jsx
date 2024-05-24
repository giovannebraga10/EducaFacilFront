import React from "react";
import { useState } from "react";
import style from './style.css';
import { Link } from 'react-router-dom';

export default function Recuperarsenha(){
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRecuperarsenha = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            console.log('Senha alterada com sucesso para o email:', email);
        } else {
            console.log('As senhas não correspondem!');
        }
    };
    return(
        <div className="container-change-password">
            <form className="container-change-password-form" onSubmit={handleRecuperarsenha}>
                <div className="container-title-form-change-password">
                    <h1>Alterar Senha</h1>
                </div>

                <div className="container-inputs-form-change-password">
                    <label >Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="container-inputs-form-change-password">
                    <label >Nova Senha:</label>
                    <input
                        type="password"
                        placeholder="Nova Senha"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="container-inputs-form-change-password">
                    <label >Confirmar Senha:</label>
                    <input
                        type="password"
                        placeholder="Confirmar Nova Senha"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                
                <button type="submit" className="container-button-form-change-password">Alterar Senha</button>

                <Link to="/login" className="container-back-to-login">
                    <a >Voltar ao login</a>
                </Link>
            </form>
        </div>

    )
}