import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  BirthDate: {
    type: Date,
  },
  booksIds: {
    type: [mongoose.Types.ObjectId],
    ref: "book",
  },
});

const Author = mongoose.model('author',AuthorSchema)
export default Author