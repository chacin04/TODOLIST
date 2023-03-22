import React,{useState,useEffect} from 'react';
import logo from './logos/LOGO.svg'
import './App.css';
import { Buscador } from './Buscador/buscador';
import { Lista } from './Lista/LIsta';
import { Contador } from './Contador/Contador';
import { Item } from './Item/Item';
import { CrearItem } from './CrearItem/CrearItem';
import {Cargando} from './cargando/cargando.js'
import {Modal} from './modal/modal.js'
import { Formulario } from './Formulario/Formulario';

function App() {

  const [cargando,setCargando]=useState(true)
  const [error,setError]=useState(false)
  const [items, setItems ] =useState([])
  const [valorBuscador, setValorBuscador ] = useState("");
  const [openModal,setOpenModal] = useState(false)
  
  useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem('LISTAITEAM_1');
        let valorInicial;
        
        if (!!localStorageItem){
          valorInicial=JSON.parse(localStorageItem)
        }else{
          localStorage.setItem('LISTAITEM_1',JSON.stringify([]));
          valorInicial=[]
          }
        setItems(valorInicial) ;
      }catch(error){
        setError(true)
        setCargando(false)
      }finally{
        setCargando(false)
      }
    },1500)
  },[])
//QUIERO CHEQUEAR CUENTAS VECES HACE RENDER
 console.log("render aqui")

 
  const guardarItem=(nuevaLista)=>{
    const proximaLista= JSON.stringify(nuevaLista);
    localStorage.setItem('LISTAITEAM_1',proximaLista)
    setItems(nuevaLista)
  }
  let bottonCrearValue;
  if (!!openModal){
    bottonCrearValue="Cerrar"
  }else{
    bottonCrearValue="Crear"
  }

  let itemListados = []

  if(!!valorBuscador.length >= 1){
    itemListados = items.filter(item => {
      const criterio1 = item.titulo.toLowerCase();
      const criterio2 = valorBuscador.toLowerCase();
      return(criterio1.includes(criterio2))
    })
  }else{
    itemListados=items;
  }
  const completarItem = (titulo)=> {
    const lugar = items.findIndex(item=>item.titulo===titulo);
    const nuevaLista=[...items];
    nuevaLista[lugar].completado=!nuevaLista[lugar].completado;
    guardarItem(nuevaLista);
  }

  const addItem = (titulo)=> {
    const nuevaLista=[...items];
    nuevaLista.unshift({
      completado:false,
      titulo,
    })
    guardarItem(nuevaLista);
  }

  const eliminarItem=(titulo)=>{
    const lugar = items.findIndex(item=>item.titulo === titulo);
    const nuevaLista=[...items];
    nuevaLista.splice(lugar,1)
    guardarItem(nuevaLista);    
  }

  return (
    <div className='App'> 
      <h1 className='titulo'>SUPER to/do LIST</h1>
      <img src={logo} alt='LOGO' className='LogoPrincipal'></img>      
      <Buscador className="Buscador" 
        valorBuscador={valorBuscador}
        setValorBuscador={setValorBuscador}  />
      <Contador className='Contador'/>
      <Lista className='Lista'>
        {cargando && <Cargando/>}
        {error && <h1>TUVIMOS UN ERROR</h1> }
        {itemListados.map(item =>(
          <Item 
            key={item.titulo} 
            titulo={item.titulo} 
            completado={item.completado}
            oncompletar={()=>completarItem(item.titulo)}
            onEliminar={()=>eliminarItem(item.titulo)}
          />
        ))}        
      
      </Lista>
      <CrearItem className="crearIteam"
      setOpenModal={setOpenModal}
      openModal={openModal}
      contenido={bottonCrearValue}
      />
      <a className='barraInferior'
       href='https://www.linkedin.com/in/angel-gabriel-chacin-mendoza-216094142/'
       >LINKEDIN</a>
           {!!openModal && 
              <Modal>
                  <Formulario
                    addItem={addItem}
                    setOpenModal={setOpenModal}
                    items={items}
                  />
              </Modal>
           }
    </div>

  )
}

export default App;
