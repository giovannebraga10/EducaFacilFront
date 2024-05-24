import React from "react";
import style from '../CursoPage/style.css'
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Menu from "../../components/Menu/Menu";
import Conteudo from "../../components/Conteudo/Conteudo";



export default function CursoPage() {
    return (
        <>

            <Cabecalho />
            <div className='content-flex'>
                <Menu />
                <Conteudo>
                    <section className="videos">
                        <div className="card-aula">
                            <div className="video-aula">
                                <iframe width="300" height="175" src="https://www.youtube.com/embed/1bEbBkWc4-I?si=pTB3MMVzJ5r-cPDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="info-aula">
                                <div className="titulo-aula">
                                    <h2>Aula 01</h2>
                                </div>
                                <div>
                                    Descrição: Introduzir os conceitos básicos do React e configurar o ambiente de desenvolvimento.
                                </div>
                            </div>
                        </div>
                        <div className="card-aula">
                            <div className="video-aula">
                            <iframe width="300" height="175" src="https://www.youtube.com/embed/OkMhKAlEObw?si=N3zLJ8ovEp0X8RtJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="info-aula">
                                <div className="titulo-aula">
                                    <h2>Aula 02</h2>
                                </div>
                                <div>
                                    Descrição: Introduzir os conceitos básicos do React e configurar o ambiente de desenvolvimento.
                                </div>
                            </div>
                        </div>
                        <div className="card-aula">
                            <div className="video-aula">
                            <iframe width="300" height="175" src="https://www.youtube.com/embed/flqBnYMKiJE?si=295jJC3v2-vVeG0T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="info-aula">
                                <div className="titulo-aula">
                                    <h2>Aula 03</h2>
                                </div>
                                <div>
                                    Descrição: Introduzir os conceitos básicos do React e configurar o ambiente de desenvolvimento.
                                </div>
                            </div>
                        </div>
                    </section>


                </Conteudo>
            </div>

        </>
    )
}