import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {ConvertedText, ConvertedTextDocument} from './schema/ConvertedTextSchema'
import {Model} from 'mongoose'
import {ImageData} from "./models/ocr-reader.model";

@Injectable()
export class DBMapper {
    fromEntity(entity: any): ImageData {
        console.log(entity)
        return {
            convertedText: entity.originalUrl,
        }
    }
}

@Injectable()
export class OcrReaderRepository {
    constructor(
        @InjectModel(ConvertedText.name)
        private readonly database: Model<ConvertedTextDocument>,
        private mapper: DBMapper
    ) {
    }

    async saveConvertedText(text: ImageData): Promise<ImageData> {

        const savedRecord = await this.database.create(text)
        return this.mapper.fromEntity(savedRecord)
    }

}
