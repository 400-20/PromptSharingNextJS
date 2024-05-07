import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        const uri = process.env.MONGODB_URI || 'mongodb+srv://dbabhishek:dbabhishek@cluster0.ugqdjfw.mongodb.net/'; // Fallback URI
        await mongoose.connect(uri, {
            dbName:'share_prompt',
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};
