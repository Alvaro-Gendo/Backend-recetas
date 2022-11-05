import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, listaReceta, obtenerReceta } from "../controllers/receta.controllers";

const rutas = Router();

rutas.route("/receta")
.get(listaReceta)
.post(crearReceta)

rutas.route("/receta/:id")
.get(obtenerReceta)
.put(editarReceta)
.delete(borrarReceta)

export default rutas;