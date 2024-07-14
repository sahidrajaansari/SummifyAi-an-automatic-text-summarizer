import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Make sure MONGODB_URI does not already include the database name
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "summifyAI", // Specify the database name here
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error while connecting to db: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
