import Author from "../../models/Author.schema.js";

export const AddAuthor = async (req, res) => {
  const { name, bio, BirthDate, booksIds } = req.body;
  await Author.create({ name, bio, BirthDate, booksIds });
  res.status(200).json({ message: "Author Added Successfully" });
};

export const GetAllAuthors = async (req, res) => {
   const { pageSize ,pageNumber} = req.query;
   console.log(pageNumber,pageSize);
    const Authors = await Author.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

  res.json({ Authors });
};
export const GetAuthor = async (req, res) => {
  const { authorId } = req.params;
  console.log(authorId);
  const author = await Author.findById(authorId).populate(
    "booksIds",
    "author title"
  );
  if (!author) {
    res.status(401).json({ message: "no author with this id" });
  }
  res.json({ author });
};
export const UpdateAuthor = async (req, res) => {
  const { authorId } = req.params;
  const author = await Author.findOne({ authorId });
  if (!author) {
    res.status(401).json({ message: "no authors with this id" });
  }
  await Author.findOneAndUpdate(author, req.body);
  res.status(200).json({ message: "updated successfully" });
};
export const DeleteAuthor = async (req, res) => {};
