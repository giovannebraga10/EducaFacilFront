import React, { useEffect, useState } from "react";
import style from "../VideoPage/style.css"
import Menu from "../../components/Menu/Menu";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Conteudo from "../../components/Conteudo/Conteudo";
import { useParams } from "react-router-dom";
import { obterVideo } from "../../services/videos";


export default function VideoPage() {
    const { id } = useParams()
    const [video, setVideo] = useState()

    useEffect(() => {
        obterVideo(id).then(setVideo)
    }, [])

    const getVideoEmbedUrl = (url) => {
        try {
            const [, youtubeId] = url.match(/\?v=([^&]+)/);
            return `https://www.youtube.com/embed/${youtubeId}`
        }
        catch (error) {
            return 'https://pdtxar.com/wp-content/uploads/2019/11/video-placeholder-1280x720-40-768x433.jpg'
        }
    }

    return (
        <>
            <Cabecalho />
            <div className='content-flex'>
                <Menu />
                <Conteudo>
                    <section className="section-video-content">
                        {video && (
                            <section className="section-video-aula">
                                <div className="title-video-aula">
                                    {video.titulo}
                                </div>
                                <div className="videos-separador"></div>
                                <iframe width="75%" height="75%" src={getVideoEmbedUrl(video.url)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </section>
                        )}
                    </section>
                </Conteudo>
            </div>
        </>

    )
}