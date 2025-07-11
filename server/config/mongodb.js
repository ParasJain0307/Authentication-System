import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database connected");
    })
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
    } catch (error) {
        console.error("Database connection error:", error);
    }

}

export default connectDB;