import React, { useState } from "react";
import './Formulario.css'

function Formulario({addItem,setOpenModal,items}){

    const [valorAgregar,setValorAgregar]=useState('')

    const onCancelar = ()=>{
        setOpenModal(false)

    }
    const onAdd = (event)=>{
        event.preventDefault();
        if (items.find(item=> item.titulo === valorAgregar)){
            alert("VALOR YA AGREGADO EN LA LISTA")
            setValorAgregar("")
        }else if(valorAgregar.length <= 40 && valorAgregar.length > 0){
            addItem(valorAgregar)
            setOpenModal(false)
        }else if(valorAgregar.length === 0){
            alert("INTRODUCE VALOR A AGREGAR")
            setValorAgregar("")
        }

    }
    const onEscribir = (event)=>{
        setValorAgregar(event.target.value);
    }
    return(
        <form onSubmit={onAdd}>
            <label>¿QUE DESEAS AGREGAR?</label>
            <textarea
            value={valorAgregar}
            onChange={onEscribir}
            placeholder=" Contenido a Listar"
            maxLength={40}
            />
            
            <div>
                <button 
                    onClick={onCancelar}
                    type="button"
                    className="buttonCancel"
                >
                    Cancelar
                </button>
                
                <button
                    type="submit"
                    className="buttonAñadir"
                >
                    Añadir
                </button>
            </div>
        </form>
    )

}
export{Formulario}