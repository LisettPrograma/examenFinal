import { getAlumnoRepository, getAlumnoByIdRepository, postAlumnoRepository, putAlumnoRepository, deleteAlumnoRepository } from "../repository/alumnoRepository.js";


export const getAlumnoServices = async() => {
    try {
        let respuestaRepository = await getAlumnoRepository();
        return respuestaRepository;

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}

export const getAlumnoByIdServices = async(id) => {
    try {
        let respuestaRepository = await getAlumnoByIdRepository(id);
        return respuestaRepository;

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}

export const postAlumnoServices = async(alumno) => {
    try {
        let respuestaRepository = await postAlumnoRepository(alumno);
        return respuestaRepository;

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}

export const putAlumnoServices = async(id, alumno) => { 
    try {
        let respuestaRepository = await putAlumnoRepository(id, alumno); 
       
        return respuestaRepository;
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}

export const deleteAlumnoServices = async(id) => {
    try {
        let respuestaRepository = await deleteAlumnoRepository(id);
        
        return respuestaRepository;
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    
}




