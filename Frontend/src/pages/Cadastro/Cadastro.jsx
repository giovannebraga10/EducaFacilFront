import React from "react";
import style from './style.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cadastrarOrganizacao } from "../../services/organizacoes";



const Cadastro = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cnpj: '',
    senha: '',
    confirmacaoSenha: '',
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    cnpj: '',
    senha: '',
    confirmacaoSenha: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Limpa a mensagem de erro quando o usuário começa a digitar
    setErrors({ ...errors, [id]: '' });
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    const validations = [
      checkInput('nome'),
      checkInput('email'),
      checkInput('cnpj'),
      checkInput('senha'),
      checkInput('confirmacaoSenha')
    ]
    // Adicione outras validações aqui
    if (validations.every(Boolean)) {
      cadastrarOrganizacao(formData).then(success => {
        if (success) {
          navigate("/login")
        }
      })
    }
  };

  const checkInput = (input) => {
    const value = formData[input];

    if (input === 'confirmacaoSenha' && value && value != formData.senha) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [input]: `A senha não é identica à confirmação`,
      }));

      return false;
    }

    if (value === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [input]: `${input === 'confirmacaoSenha' ? 'Confirmação de Senha' : 'Campo'} Obrigatório`,
      }));

      return false;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [input]: '',
    }));

    return true

  };

  return (
    <section className="content-cadastro">
      <div className="container-cadastro">
        <section className="header-cadastro">
          <h2>Criar Conta</h2>
        </section>
        <form id="form" className="form-cadastro" onSubmit={handleCadastro}>
          <div className={`form-content ${errors.nome ? 'error' : ''}`}>
            <label htmlFor="nome">Nome da Organização</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o nome do Usuario"
              value={formData.nome}
              onChange={handleChange}
            />
            <span className="error-message">{errors.nome}</span>
          </div>

          <div className={`form-content ${errors.email ? 'error' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Digite o Email da Organização"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="error-message">{errors.email}</span>
          </div>

          <div className={`form-content ${errors.cnpj ? 'error' : ''}`}>
            <label htmlFor="cnpj">Cnpj</label>
            <input
              type="text"
              id="cnpj"
              placeholder="Digite o Cnpj da Organização"
              value={formData.cnpj}
              onChange={handleChange}
            />
            <span className="error-message">{errors.cnpj}</span>
          </div>

          <div className={`form-content ${errors.senha ? 'error' : ''}`}>
            <label htmlFor="senha">Senha</label>
            <input
              type="text"
              id="senha"
              placeholder="Digite a sua senha"
              value={formData.senha}
              onChange={handleChange}
            />
            <span className="error-message">{errors.senha}</span>
          </div>

          <div className={`form-content ${errors.confirmacaoSenha ? 'error' : ''}`}>
            <label htmlFor="confirmacao-senha">Confirme sua Senha</label>
            <input
              type="text"
              id="confirmacaoSenha"
              placeholder="Digite sua senha novamente"
              value={formData.confirmacaoSenha}
              onChange={handleChange}
            />
            <span className="error-message">{errors.confirmacaoSenha}</span>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
