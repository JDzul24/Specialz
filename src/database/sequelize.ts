import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv"
import UserModel from "../user/infraestructure/model/userModel";
import MedicationModel  from '../medication/infraestructure/model/medicationModel';


dotenv.config()

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    models:[UserModel , MedicationModel]
});

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        await sequelize.sync({ force: false });
    } catch (err) {
        console.error('No se pudo conectar a la base de datos:', err);
        process.exit(1);  
    }
}