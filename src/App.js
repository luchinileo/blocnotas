"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
require("./App.css");
const Tareas_1 = require("./components/tareas/Tareas");
function App() {
    return (<material_1.Grid container spacing={2} style={{ height: '100vh' }}>
      <material_1.Grid item xs={4} style={{ backgroundColor: '#00a1e8', height: '100%' }}></material_1.Grid>
      <material_1.Grid item xs={4}>
      <Tareas_1.Tareas />
      </material_1.Grid>
      <material_1.Grid item xs={4} style={{ backgroundColor: '#00a1e8', height: '100%' }}></material_1.Grid>
    </material_1.Grid>);
}
exports.default = App;
