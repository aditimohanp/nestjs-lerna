import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({})
export class Book{

@Prop()
name: string

@Prop()
bio: string
}

export const BookSchema = SchemaFactory.createForClass(Book)
