import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connecDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.host}`);
    }catch(error) {
        console.log("Mongodb connnection error" , error)
        process.exit(1)
    }
}

export default connecDB