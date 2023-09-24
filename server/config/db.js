import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://scsrinithi:12345@cluster0.rhmrtp1.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`Database Connected on ${conn.connection.host}`);
  } catch (error) {
    console.error("Error");
    //process.exit(1);
    console.log("Couldn't connect to the database");
  }
}


export default connectDB;
