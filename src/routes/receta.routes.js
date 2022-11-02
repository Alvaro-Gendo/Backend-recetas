import { Router } from "express";

const rutas = Router();

rutas.route("/receta")
.get()
.post()

rutas.route("/receta/:id")
.get()
.put()
.delete()

export default rutas;