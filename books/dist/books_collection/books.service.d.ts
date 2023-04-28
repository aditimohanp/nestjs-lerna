import mongoose from "mongoose";
import { Book } from "./books.entity";
export declare class BooksService {
    private booksModel;
    constructor(booksModel: mongoose.Model<Book>);
    createBook(book: Book): Promise<Book>;
    findAll(): Promise<Book[]>;
    findById(id: string): Promise<Book>;
}
