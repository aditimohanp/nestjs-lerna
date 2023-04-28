import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BooksService } from "./books.service";
import { Book } from "./books.entity";


@Controller('Book')

export class BookController {
   constructor ( private booksService : BooksService) {}

    @Post()
    async addAuthor(@Body()Book):Promise<Book> {
        return this.booksService.createBook(Book)
    }

    @Get()
    async getAllBook(): Promise<Book[]> {
        return this.booksService.findAll()
      
    }

    @Get(':id')
    async getAuthorById(@Param('id') id : string ): Promise<Book> {
        return this.booksService.findById(id);
      
    }

}
