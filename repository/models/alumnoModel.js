import mongoose from 'mongoose'

const alumnoSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    carrera: { type: String, required: false },
    instituto: { type: String, required: false },
    documentacionValidada: { type: Boolean, required: true }
});

export const AlumnoModel = mongoose.model('Alumno', alumnoSchema);
