import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {ConvertedText, ConvertedTextSchema} from "./schema/ConvertedTextSchema";
import {OcrReaderRepository, DBMapper} from "./ocr-reader.repository";
import {OCRReaderService} from "./ocr-reader.service";
import {OCRReaderController} from "./ocr-reader.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: ConvertedText.name, schema: ConvertedTextSchema}
        ])
    ],
    controllers: [OCRReaderController],
    providers: [DBMapper, OcrReaderRepository, OCRReaderService],
    exports: [MongooseModule]
})
export class OCRReaderModule {
}
