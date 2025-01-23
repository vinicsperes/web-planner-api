import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Habit extends Document {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    icon: string

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    goal: number

    @Prop({ required: false })
    category: string

    @Prop({ default: 1 })
    daily_checks: number

    @Prop({ type: Map, of: Number, default: {} })
    completed_dates: Record<string, number>

    @Prop({ required: true })
    color: string
}

export const HabitSchema = SchemaFactory.createForClass(Habit)
