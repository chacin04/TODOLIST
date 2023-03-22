import React from 'react';
import ReactDOM  from 'react-dom/client';
import { createPortal } from 'react-dom';
import './modal.css'

function Modal({children}){
        return (<div>
        
            {createPortal(
                <div className='modal'>
                {children}
                </div> ,
                document.getElementById("modal")

            )}
        </div>);
}
export{Modal}