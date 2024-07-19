import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique : true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model('book',bookSchema)

export default Book