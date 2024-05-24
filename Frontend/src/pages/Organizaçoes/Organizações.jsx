import React, { useEffect, useState } from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Menu from '../../components/Menu/Menu';
import Conteudo from '../../components/Conteudo/Conteudo';
import { obterOrganizacoes } from '../../services/organizacoes';
import CardOrg from '../../components/CardOrg/CardOrg';
import style from '../Organizaçoes/style.css'

export default function Organizações() {
    const [orgs, setOrgs] = useState([]);

    useEffect(() => {
        obterOrganizacoes().then((lista) => {
            setOrgs(lista);
        });

    }, [])

    return (
        <>
            <Cabecalho />
            <div className='content-flex'>
                <Menu />
                <Conteudo>
                    <section className='section-cards-orgs'>
                        {orgs.map((org) => {
                            return (
                                <CardOrg org={org} />
                            )
                        })}
                    </section>
                </Conteudo>
            </div>

        </>

    )
}