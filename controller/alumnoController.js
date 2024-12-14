import { getAlumnoServices, getAlumnoByIdServices, postAlumnoServices, putAlumnoServices, deleteAlumnoServices } from "../services/alumnoServices.js";

export const getAlumnoController = async (req, res) => {
    try {
        let respuestaServices = await getAlumnoServices();
        res.send(respuestaServices);
    } catch (error) {
        console.log(error);
    }
}

export const getAlumnoByIdController = async (req, res) => {
    try {
        const id = req.params.id
        let respuestaServices = await getAlumnoByIdServices(req.params.id);
        res.send(respuestaServices);
    } catch (error) {
        console.log(error);
    }
}

export const postAlumnoController = async (req, res) => {
    try {
        const alumno = req.body
        let respuestaServices = await postAlumnoServices(alumno);
        res.send(respuestaServices);
    } catch (error) {
        console.log(error);
    }
}

export const putAlumnoController = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, instituto, carrera, documentacionValidada } = req.body;
        const alumno = { nombre, apellido, instituto, carrera, documentacionValidada };

        let respuestaServices = await putAlumnoServices(id, alumno);
        res.send(respuestaServices);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al actualizar el alumno");
    }
}

export const deleteAlumnoController = async (req, res) => {
    try {
        const id = req.params.id
        let respuestaServices = await deleteAlumnoServices(id);
        res.send(respuestaServices);
    } catch (error) {
        console.log(error);
    }
}

export const validarDocumentacion = (alumno) => {
    return new Promise((resolve, reject) => {
        if (alumno && alumno.documentacionValidada) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

export const inscribirAlumno = (alumno, carrera) => {
    return new Promise((resolve, reject) => {
        if (alumno && alumno.documentacionValidada) {
            alumno.carrera = carrera;
            Alumno.findByIdAndUpdate(alumno._id, { carrera: carrera }, { new: true })
                .then(updatedAlumno => resolve(updatedAlumno))
                .catch(error => reject("Error al actualizar la carrera del alumno: " + error));
        } else {
            reject("No se puede inscribir al alumno, la documentación no está validada");
        }
    });
}

export const inscribirAlumnoCarrera = async (alumno, carrera) => {
    try {
        const documentacionValida = await validarDocumentacion(alumno);
        if (documentacionValida) {
            const alumnoInscrito = await inscribirAlumno(alumno, carrera);
            return alumnoInscrito;
        } else {
            throw new Error("La documentación del alumno no está validada");
        }
    } catch (error) {
        console.error("Error en inscribirAlumnoCarrera: ", error);
        throw new Error("No se pudo inscribir al alumno en la carrera");
    }
}



