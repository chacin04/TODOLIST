import React from "react";
import './CrearItem.css'

function CrearItem ({setOpenModal,openModal,contenido}){
    const onClickButton =()=>{
        setOpenModal(!openModal)
        
    }

    return(
        <button
        className="crearTarea"
        onClick={onClickButton}>
            {contenido}
        </button>

    )
}
export {CrearItem}