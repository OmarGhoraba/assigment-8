import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/Assigment8")
  .then(() => console.log("db is connected ...."))
  .catch((err)=>console.log(err));
