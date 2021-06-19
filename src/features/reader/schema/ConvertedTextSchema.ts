import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ConvertedTextDocument = ConvertedText & Document

@Schema({ collection: 'converted-text', timestamps: true })
export class ConvertedText {
	// @Prop({ index: true})
	// _id: mongoose.ObjectId

	@Prop({ index: false })
	convertedText: string

}

export const ConvertedTextSchema = SchemaFactory.createForClass(ConvertedText)
