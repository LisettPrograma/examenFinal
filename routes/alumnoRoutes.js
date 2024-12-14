import { Router } from "express";
import { getAlumnoByIdController,postAlumnoController, getAlumnoController,putAlumnoController, deleteAlumnoController } from "../controller/alumnoController.js"

const router = Router();

router.get('/', (req, res) => {
    res.send("Bienvenidos al servidor Siu Guarani del examen final de Lisett Castillo");
});

router.get('/alumno/mostrar',getAlumnoController )

router.get('/alumno/porId/:id', getAlumnoByIdController)

router.post('/alumno/agregar', postAlumnoController)

router.put('/alumno/actualizar/:id', putAlumnoController)

router.delete('/alumno/delete/:id', deleteAlumnoController)

export default router