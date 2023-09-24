import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(//Enter your own MOngo server path here , {
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
