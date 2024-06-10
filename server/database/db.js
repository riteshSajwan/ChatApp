import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();

const URL= process.env.MONGOURI


const Connection = async()=>{
    try{
       await mongoose.connect(URL)
        console.log("connected")
    }catch(error){
        
        console.log("Error while connecting", error.message)
    }
}

export default Connection;