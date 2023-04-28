import { BooksService } from "./books.service";
import { Book } from "./books.entity";
export declare class BookController {
    private booksService;
    constructor(booksService: BooksService);
    addAuthor(Book: any): Promise<Book>;
    getAllBook(): Promise<Book[]>;
    getAuthorById(id: string): Promise<Book>;
}
