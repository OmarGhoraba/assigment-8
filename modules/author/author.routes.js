import { Router } from "express";
import { AddAuthor, DeleteAuthor, GetAllAuthors, GetAuthor, UpdateAuthor } from "./author.controllers.js";
const AuthorRouter = Router();

AuthorRouter.post("/", AddAuthor).get("/", GetAllAuthors);
AuthorRouter.get("/:authorId", GetAuthor)
  .patch("/:authorId", UpdateAuthor)

  .delete("/:authorId", DeleteAuthor);

export default AuthorRouter; 
