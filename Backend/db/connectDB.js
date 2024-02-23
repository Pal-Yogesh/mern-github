import mongoose from "mongoose";

export default async function connectMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection Successful To Database.");
    } catch (error) {
        console.log("Error in connecting to Mongo DB", error.message);
    }
}