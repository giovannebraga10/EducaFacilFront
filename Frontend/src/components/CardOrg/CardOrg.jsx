import React from "react";
import style from "../CardOrg/style.css"
import { useNavigate } from "react-router-dom";


export default function CardOrg({org}) {
    const navigate = useNavigate()
    return (
        <div className='card-organizacoes'>
            <div className="card-org-info">
                <img className="card-org-logo" src={org.logo || 'https://bizdiscoverer.com/wp-content/uploads/2020/04/placeholder_building.png'} alt="logo-org" />
                { org.nome }
            </div>
            <div className="card-org-acessar-perfil">
                <button onClick={() => navigate(`/perfilorganizacoes/${org.id}`) }>Acessar Perfil</button>
            </div>
        </div>
    )
}