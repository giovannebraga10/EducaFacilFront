import React from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import Conteudo from '../../components/Conteudo/Conteudo.jsx';
import Card from '../../components/Card/Card.jsx';
import style from './style.css';
import logoBraga from '../../components/img/GiovanneBraga-perfil.jpg'
import logoIcaro from '../../components/img/IcaroLuiz-perfil.jpg'
import logoEstevan from '../../components/img/GiovaneEstevan-perfil.jpg'
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";


export default function Sobrenos() {
    return (
        <>
            <Cabecalho />
            <div className='content-flex'>
                <Menu />
                <Conteudo>
                    <section className='container-cards-SN'>
                        <Card>
                            <div className="container-dados-SN">

                                <div className='container-dados-info'>
                                    <div className='container-dados-name'>
                                        <img src={logoBraga} alt="Giovanne" />
                                        Giovanne Braga
                                    </div>

                                    <div className='container-dados-desc'>
                                        Líder e Desenvolvedor Full-Stack
                                        <div className='container-dados-subdesc'>
                                            19 anos | Analise e desenvolvimento de Sistemas | FECAP
                                        </div>
                                        <div className='container-dados-desc-icons'>
                                            <a href="https://github.com/giovannebraga10">
                                                <button> <BsGithub /> </button>
                                            </a>
                                            <a href="https://www.linkedin.com/in/giovanne-braga-0a4288280/">
                                                <button> <BsLinkedin /> </button>
                                            </a>
                                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLdbRwVFnfHcsPdzmkjGbvtVRhSKRpCzncqKTRlWmMrGcgTdCCFhcrMvlLvFMxrsTcKdNw">
                                                <button> <BsEnvelopeFill /> </button>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Card>
                        <Card>
                            <div className="container-dados-SN">
                                <div className='container-dados-info'>
                                    <div className='container-dados-name'>
                                        <img src={logoIcaro} alt="Giovanne" />
                                        Icaro Luiz
                                    </div>

                                    <div className='container-dados-desc'>
                                        Desenvolvedor Front-End
                                        <div className='container-dados-subdesc'>
                                            19 anos | Analise e desenvolvimento de Sistemas | FECAP
                                        </div>
                                        <div className='container-dados-desc-icons'>
                                            <button> <BsGithub /> </button>
                                            <button> <BsLinkedin /> </button>
                                            <button> <BsEnvelopeFill /> </button>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Card>
                        <Card>
                            <div className="container-dados-SN">
                                <div className='container-dados-info'>
                                    <div className='container-dados-name'>
                                        <img src={logoEstevan} alt="GiovaneEstevan" />
                                        Giovane Estevan
                                    </div>

                                    <div className='container-dados-desc'>
                                        Desenvolvedor Front-End
                                        <div className='container-dados-subdesc'>
                                            27 anos | Analise e desenvolvimento de Sistemas | FECAP
                                        </div>
                                        <div className='container-dados-desc-icons'>
                                            <button> <BsGithub /> </button>
                                            <button> <BsLinkedin /> </button>
                                            <button> <BsEnvelopeFill /> </button>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Card>
                    </section>

                </Conteudo>
            </div>
        </>

    )

}