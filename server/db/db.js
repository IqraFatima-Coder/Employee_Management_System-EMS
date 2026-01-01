import mongoose from 'mongoose';
const connnectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB database");
    } catch (error) {
        console.error("Error connecting to MongoDB database:", error);
    }
};
export default connnectToDatabase;