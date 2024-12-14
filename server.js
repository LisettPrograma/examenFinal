import express from 'express';
import alumnoRoutes from './routes/alumnoRoutes.js';


const app = express();
app.use(express.json());

app.use(alumnoRoutes);

app.listen(3005, 'localhost', () => {
    console.log('Servidor escuchando al puerto 3005');
});