"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tareas = void 0;
const material_1 = require("@mui/material");
const react_1 = require("react");
const Tareas = () => {
    const [tituloVisible, setTituloVisible] = (0, react_1.useState)(true);
    const manejarVisivilidad = () => {
        setTituloVisible(!tituloVisible);
    };
    return (<div>
    {tituloVisible ? (<div className='container_titulo_principal'>
      <h1 className='titulo'>Tareas</h1>
        <material_1.Button variant='contained' size='large' onClick={manejarVisivilidad}>
          +
        </material_1.Button>
      </div>) : (<form action="" className='form_tarea'>
       {/*  <input type="text" placeholder='titulo' className='input' /> */}
       <material_1.TextField id="filled-basic" label="Titulo" variant="filled" className='input' margin={'dense'}/>
        {/* <textarea placeholder='descripcion'className='input' /> */}
        <material_1.TextField id="filled-multiline-static" label="Descripcion" multiline rows={4} variant="filled" margin={'dense'}/>
        <div className='btn_tareas'>
        <material_1.Button variant='outlined'>Crear</material_1.Button>
        <material_1.Button variant='outlined' color='error' onClick={manejarVisivilidad}>
          Cancelar
        </material_1.Button>
        </div>
      </form>)}

     {/*  <div
         style={{
           backgroundColor:'#efef02',
           borderRadius:'50%',
           margin:'auto',
           width:300,
           height:300,
         }}
         ></div> */}
  </div>);
};
exports.Tareas = Tareas;
