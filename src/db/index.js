import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_DB_URI}/${DB_NAME}`)
            console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
            //console.log(connectionInstance);
        }
    catch(error){
         console.log("mongoDB connection failed",error);
         process.exit(1);
    }
}

export default connectDB;