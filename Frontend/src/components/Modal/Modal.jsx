import React, { Children } from "react";
import style from '../Modal/style.css'
export default function Modal({ isOpen, setModalOpen, children }) {

    if (isOpen) {

        return (
            <div className="modal-background">
                <div className="modal-style">
                    <div className="head-modal">
                        <button className="close-modal" onClick={setModalOpen}>X</button>
                    </div>
                        {children}
                </div>
            </div>
        )
    }

    return null
}