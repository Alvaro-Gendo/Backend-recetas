import { Router } from "express";
import { borrarReceta, crearReceta, crearUsuario, editarReceta, listaReceta, listaUsuario, obtenerReceta } from "../controllers/receta.controllers";

const rutas = Router();

rutas.route("/receta")
.get(listaReceta)
.post(crearReceta)

rutas.route("/receta/:id")
.get(obtenerReceta)
.put(editarReceta)
.delete(borrarReceta)

rutas.route("/usuario")
.get(listaUsuario)
.post(crearUsuario)

export default rutas;