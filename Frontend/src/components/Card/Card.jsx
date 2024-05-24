import React from "react"
import styles from "./style.css"



export default function Card({children}) {
    return (
        <div className='cards-SN'>
            <div className='cards-content-SN'>
                {children}
            </div>
        </div>

    )
}