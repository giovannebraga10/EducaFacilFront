import React, { useEffect } from "react";
import { useState } from "react";
import style from '../PerfilOrg/style.css';
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Menu from "../../components/Menu/Menu";
import Conteudo from "../../components/Conteudo/Conteudo";
import Rodape from "../../components/Rodapé/Rodape";
import { MdOutlineModeEdit } from "react-icons/md";
import Modal from "../../components/Modal/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { obterOrganizacao } from "../../services/organizacoes";
import CardCurso from "../../components/CardCurso/CardCurso";
import { cadastrarCurso } from "../../services/cursos";
import { useSessionStorage } from "@uidotdev/usehooks";



export default function PerfilOrg() {
    const [userInfo] = useSessionStorage("UserInfo")
    const [token] = useSessionStorage("JwtToken")
    const navigate = useNavigate()

    const { id } = useParams()
    const [org, setOrg] = useState({})
    const [openModal, setOpenModal] = useState(false)

    const [formData, setFormData] = useState({
        titulo: '',
        professor: '',
        descricao: '',
        cargaHoraria: '',
        tag: '',
    });

    const handleCursoChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // Limpa a mensagem de erro quando o usuário começa a digitar
        // setErrors({ ...errors, [id]: '' });
    };

    const handleCursoSubmit = (e) => {
        e.preventDefault()

        cadastrarCurso({ ...formData, organizacaoId: userInfo.sub }, token).then(success => {
            if(success) {
                navigate(0)
            }
        })
    }

    useEffect(() => {
        obterOrganizacao(id).then(setOrg);
    }, [])

    return (
        <>
            <Cabecalho />
            <div>
                <div className='content-flex'>
                    <Menu />
                    <Conteudo>
                        <div className="all-page-perfil">
                            <section className="perfil-organizacoes">
                                {/* {userInfo?.sub == org.id && (
                                    <div className="button-edit">
                                        <button className="pencil-edit">Editar<MdOutlineModeEdit /></button>
                                    </div>
                                )} */}
                                <div className="perfil-head">
                                    <div className="logo-perfil-org">
                                        <img src={org.logo || "https://bizdiscoverer.com/wp-content/uploads/2020/04/placeholder_building.png"} alt="logo Ebenezer" />
                                    </div>
                                    <div className="info-perfil-org">
                                        <div className="perfil-dados">
                                            <div className="name-organizacao">
                                                {org.nome}
                                            </div>
                                            <div className="descricao-perfil-org">
                                                {org.descricao}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="perfil-separador">
                                </div>
                                {userInfo?.sub == org.id && (
                                    <div className="add-curso">
                                        <button onClick={() => setOpenModal(true)} className="button-add-curso">Adicionar Curso</button>
                                    </div>
                                )}

                                <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                                    <form onSubmit={handleCursoSubmit}>
                                        <div className="inputs-postar-curso">
                                            <div className="inputs-info">
                                                <label htmlFor="Título">Titulo:</label>
                                                <input type="text" placeholder="Digite aqui o titulo do curso" id="titulo" value={formData.titulo} onChange={handleCursoChange} />
                                            </div>
                                            <div className="inputs-info">
                                                <label htmlFor="Descrição">Descrição:</label>
                                                <input type="text" placeholder="Digite aqui a Descrição do Curso" id="descricao" value={formData.descricao} onChange={handleCursoChange} />
                                            </div>
                                            <div className="inputs-info">
                                                <label htmlFor="Professor">Professor:</label>
                                                <input type="text" placeholder="Digite aqui o o nome do Professor" id="professor" value={formData.professor} onChange={handleCursoChange} />
                                            </div>
                                            <div className="inputs-info">
                                                <label htmlFor="Carga-Horaria">Carga Horaria:</label>
                                                <input type="text" placeholder="Digite aqui o tempo do curso" id="cargaHoraria" value={formData.cargaHoraria} onChange={handleCursoChange} />
                                            </div>
                                            <div className="inputs-info">
                                                <label htmlFor="Tag">Tag:</label>
                                                <input type="text" placeholder="Digite aqui as tags do curso" id="tag" value={formData.tag} onChange={handleCursoChange} />
                                            </div>
                                            <div className="salvar-curso">
                                                <button type="submit">Salvar</button>
                                            </div>
                                        </div>
                                    </form>
                                </Modal>
                                <div className="perfil-content">
                                    {org.cursos?.map((curso) => {
                                        return (
                                            <CardCurso curso={curso} owner={userInfo?.sub == org.id}/>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                    </Conteudo>
                </div >

                <Rodape />
            </div >
        </>
    )
}


