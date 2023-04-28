import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BooksService } from "./books.service";
import { BookSchema } from "./books.entity";

@Module({
    imports:[MongooseModule.forFeature([{name: 'Books' , schema: BookSchema}]),
],
    controllers:[AbortController],
    providers:[BooksService],
    exports:[BooksService],
})
export class BooksModule{}