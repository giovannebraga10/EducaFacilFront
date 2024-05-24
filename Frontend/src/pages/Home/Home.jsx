import React from 'react';
import style from './style.css';
import Cabecalho from '../../components/Cabecalho/Cabecalho.jsx'
import Menu from '../../components/Menu/Menu.jsx';
import Conteudo from '../../components/Conteudo/Conteudo.jsx';
import FotoInstituto from '../../components/img/InstitutoEbenezer.png'
import { FaHandshakeAngle, FaLightbulb } from "react-icons/fa6"
import { BsGraphUp } from 'react-icons/bs';
import Rodape from '../../components/Rodapé/Rodape.jsx'



export default function Home() {

    return (
        <>
            <Cabecalho />
            <div className='home.content-flex'>
                <div className='content-flex'>
                    <Menu />
                    <Conteudo>
                        <main className='home-content-main'>
                            <section className='home-content'>
                                <div className='home-content-welcome'>
                                    <div className='home-content-welcome-small'>
                                        <div className='home-content-welcome-small-show'>
                                            <div className='home-content-welcome-small-show-msg'>
                                                <p>Olá seja Bem-Vindo a EducaFacil!
                                                    <br />
                                                    Confira algumas de nossas tecnologias...
                                                </p>
                                            </div>
                                            <div className='home-content-welcome-small-show-schools'>
                                                <button type="button" className="front-end">Front-end</button>
                                                <button type="button" className="front-end">Back-end</button>
                                                <button type="button" className="front-end">Banco de Dados</button>
                                                <button type="button" className="front-end">Programação Orientada a Objeto</button>
                                                <button type="button" className="front-end">HTML</button>
                                                <button type="button" className="front-end">C#</button>
                                                <button type="button" className="front-end">Figma</button>
                                                <button type="button" className="front-end">React</button>
                                                <button type="button" className="front-end">Css</button>
                                                <button type="button" className="front-end">JavaScript</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='home-content-welcome2'>
                                    <h1>Em qual tecnologia você deseja mergulhar ?</h1>
                                    <div className='home-content-welcome2-text'>
                                        Explore e encontre a organização perfeita para o seu aprendizado!
                                    </div>
                                </div>
                            </section>
                            <section className='home-content-colaborador'>
                                <div className='home-content-colaborador1'>
                                    <h1 className='home-content-colaborador1-text1'>Compartilhe o seu Conhecimento,Transforme Vidas!</h1>
                                    <div className='home-content-colaborador1-text2'>
                                        Educação é a chave para um futuro melhor, proporcione conteúdos educacionais de qualidade para quem mais precisa.
                                    </div>
                                </div>
                                <div className='home-picture-instituto'>
                                    <div className='instituto-mold'>
                                        <img src={FotoInstituto} alt="" width={515} height={315} />
                                    </div>
                                </div>
                            </section>
                            <section className='home-content-cards'>
                                <div className='home-content-cards-msg'>
                                    Junte-se a nós nesta missão e ajude a construir um mundo mais justo e igualitário
                                </div>
                                <div className='home-content-cards-container'>
                                    <div className='home-content-card1'>
                                        <div className='home-content-card-small'>
                                            <div className='home-card'>
                                                <div className='home-card-head'>
                                                    <div className='card-icon'>
                                                        <span>
                                                            <FaHandshakeAngle />
                                                        </span>
                                                    </div>

                                                    <div className='card-title'>Participe</div>
                                                </div>
                                                <div className='home-card-content'>
                                                    Faça parte dessa iniciativa! Contribua divulgando nossos cursos gratuitos e ajude a ampliar o acesso à educação. Sua participação é essencial para transformar vidas e construir um futuro melhor. Junte-se a nós!
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='home-content-card2'>
                                        <div className='home-content-card-small'>
                                            <div className='home-card'>
                                                <div className='home-card-head'>
                                                    <div className='card-icon'>
                                                        <span>
                                                            <FaLightbulb />
                                                        </span>
                                                    </div>

                                                    <div className='card-title'>Ensine</div>
                                                </div>
                                                <div className='home-card-content'>
                                                    Compartilhe seu conhecimento! Ofereça cursos e conteúdos educativos que podem fazer a diferença na vida de muitas pessoas. Seja um voluntário e ajude a capacitar aqueles que mais precisam. Seu conhecimento é um poderoso instrumento de mudança!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='home-content-card3'>
                                        <div className='home-content-card-small'>
                                            <div className='home-card'>
                                                <div className='home-card-head'>
                                                    <div className='card-icon'>
                                                        <span>
                                                            <BsGraphUp />
                                                        </span>
                                                    </div>
                                                    <div className='card-title'>Transforme</div>
                                                </div>
                                                <div className='home-card-content'>
                                                    Juntos, podemos transformar vidas! Cada curso, cada aula, cada gesto de solidariedade contribui para um mundo mais justo e igualitário. Participe, ensine e veja o impacto positivo que você pode causar. Transforme o futuro hoje!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </Conteudo>
                </div>
                <Rodape />
            </div >
        </>
    )

}