import Book from "../../models/Book.Schema.js"
export const AddBook = async (req,res)=>{
    const {title , content ,author } = req.body
    await Book.create({ title, content, author });
        res.status(200).json({message:"Book Added Successfully"})
}
export const GetAllBooks = async (req,res)=>{
    const books = await Book.find()
    res.json({books})
}
 
export const GetBook = async (req,res) =>{
    const{bookId} = req.params;
    const book = await Book.findOne({ bookId });
    if(!book){
        res.status(401).json({message:'no books with this id'})}
       res.json({book})
}

export const UpdateBook = async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findOne({ bookId });
  if (!book) {

    res.status(401).json({ message: "no books with this id" });
  }
await Book.findOneAndUpdate(book , req.body);
res.status(200).json({message:'updated successfully'})
};

export const DeleteBook = async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findOne({ bookId });
  if (!book) {
    res.status(401).json({ message: "no books with this id" });
  }
  await Book.findOneAndDelete(book, req.body);
  res.status(200).json({ message: "Deleted successfully" });
};