import React from "react";
import style from '../CardCurso/style.css'
import { BsTrash } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";




export default function CardCurso({ curso }) {
    const navigate = useNavigate()
    return (
        <div className="curso-pub">
            <div className="curso-content-card">
                <div className="info-curso">
                    <div className="botao-entrar-curso">
                        <button className="botao-entrar" onClick={() => { navigate(`/curso/${curso.id}`) }}><BsArrow90DegLeft /></button>
                    </div>
                    <div className="titulo-card">
                        {curso.titulo}
                    </div>

                    <div>
                        <button className="botao-excluir"><BsTrash /></button>
                    </div>
                </div>
                <div className="sub-info-curso">
                    <div className="descricao-curso">
                        {curso.descricao}

                    </div>
                    <div className="professor-curso">
                        {curso.professor}
                    </div>
                    <div className="carga-curso">
                        {curso.cargahoraria}
                    </div>
                </div>

            </div>
        </div>
    )
}