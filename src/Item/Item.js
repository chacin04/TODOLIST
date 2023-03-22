import Reac from "react";
import './Item.css'


function Item(props){

    
    return(
        // `itemGenerales${props.completado&&"-act"}`
        <li className={props.completado ? 'itemGenerales-act' : 'itemGeneralesfalse'}>
            <button className={props.completado ? 'check-act' : 'checkfalse'}
              onClick={props.oncompletar}>✔</button>
            <p className="tituloItem"> {props.titulo} </p>
            <button className="borrar" onClick={props.onEliminar}>✖</button>
        </li>
        
    )
}
export {Item}