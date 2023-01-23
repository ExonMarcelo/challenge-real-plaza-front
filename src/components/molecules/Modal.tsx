import { ReactNode, useState } from "react";
import iconClose from "../../assets/icon-close.svg"

interface PropsModal{
    title: string
    children: ReactNode
    handleClose: () => void
}

const Modal =  ({title, children, handleClose}:PropsModal) => {
    return(
        <div className="modal">
            <div className="modal__container">
                <div className="modal__container__header">
                    <h3>{title}</h3>
                    <div className="icon-close" onClick={()=> handleClose()}>
                        <img src={iconClose}/>
                    </div>
                </div>
                <div className="modal__container__body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;