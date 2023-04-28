import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import mongoose from "mongoose";
import { Book } from "./books.entity";

@Injectable()
export class BooksService {
    constructor( 
        @InjectModel(Book.name)
        private booksModel: mongoose.Model<Book>) {}

async createBook(book: Book): Promise<Book> {
    const res = await this.booksModel.create(book);
    return res;
}  

async findAll(): Promise<Book[]> {
    const book = await this.booksModel.find();
    return book;
 }        
               
            
async findById(id: string): Promise<Book> {
    const book = await this.booksModel.findById(id);
    if(!book){
     throw new NotFoundException('book not present')
        }
    return book;
}
           
}