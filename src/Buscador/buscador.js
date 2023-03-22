import React,{useState} from "react";
import './inputBuscador.css'

function Buscador({setValorBuscador,valorBuscador}){

    const onChangeInBuscador = (event)=>{
        setValorBuscador(event.target.value);
    }
    
    return(
        <input type="text" className="inputBuscador" placeholder="BUSCAR..." onChange={onChangeInBuscador}
        ></input>

    )

}
export {Buscador}