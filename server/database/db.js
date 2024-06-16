import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();

const URL= process.env.MONGOURI



const Connection = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.log("Error while connecting to MongoDB:", error.message);
    }
};

export default Connection;