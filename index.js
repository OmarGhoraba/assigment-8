import express from "express";
import "../assigment 8/dbConnection/dbConnection.js"
import BookRouter from "./modules/book/book.routes.js";
import AuthorRouter from "./modules/author/author.routes.js";
const app = express();
const port = 3000;

app.use(express.json())
app.listen(port, () => console.log("server is running  in port 3000...."));
app.use('/book',BookRouter)
app.use("/author", AuthorRouter);