import React from "react";
import './Lista.css'

function Lista (props){
    return(
        <section className="sectionLista">
            <ul>
            {props.children}
            </ul>
        </section>

    );
 
}
export {Lista}