import {mongoose} from 'mongoose';
import {config} from 'dotenv';
config();

export async function connect() { 
    try {
        const MONGO_URI = process.env.URI;
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a la base");
    } catch (error) {
        console.error('Error al conectar:', error);
        process.exit(1); 
    }
}

