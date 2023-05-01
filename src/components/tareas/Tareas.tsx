import { Button, TextField, autocompleteClasses } from '@mui/material'
import { useState } from 'react'


export const Tareas = () => {
  const [tituloVisible, setTituloVisible]=useState<boolean>(true)
  
  const manejarVisivilidad = ()=>{
    setTituloVisible(!tituloVisible)
  }
 
  return (
  <div>
    {tituloVisible ? (
    <div className='container_titulo_principal'>
      <h1 className='titulo'>Tareas</h1>
        <Button variant='contained' size='large' onClick={manejarVisivilidad}>
          +
        </Button>
      </div>
      ) : (
      <form action="" className='form_tarea'>
       {/*  <input type="text" placeholder='titulo' className='input' /> */}
       <TextField id="filled-basic" label="Titulo" variant="filled" className='input' margin={'dense'} />
        {/* <textarea placeholder='descripcion'className='input' /> */}
        <TextField
          id="filled-multiline-static"
          label="Descripcion"
          multiline
          rows={4}
          variant="filled"
          margin={'dense'}
        />
        <div className='btn_tareas'>
        <Button variant='outlined'>Crear</Button>
        <Button variant='outlined'color='error' onClick={ manejarVisivilidad}
        >
          Cancelar
        </Button>
        </div>
      </form>
      )}

     {/*  <div 
      style={{
        backgroundColor:'#efef02',
        borderRadius:'50%',
        margin:'auto',
        width:300,
        height:300,
      }}
      ></div> */}
  </div>
  )
}
    




