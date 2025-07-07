import mongoose from "mongoose";

const connectDb = async () => {
  try {
    let connect = await mongoose.connect(
      "mongodb+srv://muhammedbilal6211:2w7CPXaGO3voHrdT@cluster0.cfsdiab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log(error?.message);
  }
};

export default connectDb;