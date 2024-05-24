import React from "react";
import style from "./style.css"


export default function Conteudo({children}){
    return(
        <main className="Feed">
            {children}
        </main>
    )
}