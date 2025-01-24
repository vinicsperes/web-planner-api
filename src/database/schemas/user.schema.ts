import { Prop, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export class User extends Document {
    @Prop({ required: true })
    name: string

    @Prop({ required: true, unique: true })
    email: string

    @Prop({ required: true })
    password: string

    @Prop({ default: null })
    profile_picture: string
}

export const UserSchema = SchemaFactory.createForClass(User)
