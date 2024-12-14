import {connect} from '../db.js'
import { AlumnoModel } from './models/alumnoModel.js';

connect();

export const getAlumnoRepository = async () => {
    try {
        const alumnosObtenidos = await AlumnoModel.find();
        return alumnosObtenidos;
    } catch (error) {
        console.log(error);
    }
    
}

export const getAlumnoByIdRepository = async (id) => {
    try {
        const alumnoObtenido = await AlumnoModel.findById(id);
        return alumnoObtenido;
    } catch (error) {
        console.log(error);
    }
    
}

export const postAlumnoRepository = async (alumno) => {
    try {
        const alumnoAgregado = new AlumnoModel(alumno);
        await alumnoAgregado.save();
        return alumnoAgregado;
    } catch (error) {
        console.log(error);
    }
    
}

export const putAlumnoRepository = async (id, alumno) => {
    try {
        const alumnoActualizado = await AlumnoModel.findByIdAndUpdate(id, alumno, {new : true,});
        return alumnoActualizado;
    } catch (error) {
        console.log(error);
    }
    
}

export const deleteAlumnoRepository = async (id) => {
    try {
        const alumnoBorrado = await AlumnoModel.findByIdAndDelete(id);
        return alumnoBorrado;
    } catch (error) {
        console.log(error);
    }
    
}
