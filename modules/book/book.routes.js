import { Router } from "express";
import { AddBook, DeleteBook, GetAllBooks, GetBook, UpdateBook } from "./book.controllers.js";
const BookRouter = Router()

BookRouter.post("/", AddBook).get("/",GetAllBooks);
BookRouter.get("/:bookId", GetBook)
  .patch("/:bookId", UpdateBook)
  .delete("/:bookId", DeleteBook);

export default BookRouter 