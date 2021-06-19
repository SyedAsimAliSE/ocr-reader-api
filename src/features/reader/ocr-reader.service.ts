import {Injectable, Logger} from '@nestjs/common'
import {Either, Left, Right} from 'monet'
import {OcrReaderRepository} from './ocr-reader.repository'
import {recognize} from "node-tesseract-ocr";
import {APP_CONFIGS, OCR_CONFIGS} from "../../environments";
import {ImageData, ImageToRead} from "./models/ocr-reader.model";
import {FailedToProcessError} from "./errors/ocr-reader.errors";

@Injectable()
export class OCRReaderService {

    constructor(private readonly repo: OcrReaderRepository) {
    }

    async convertImageToText(
        image: ImageToRead
    ): Promise<Either<FailedToProcessError, ImageData>> {

        try {
            const {imageUrl} = image

            const ocrResult = await recognize(imageUrl, OCR_CONFIGS)

            const response = {convertedText: ocrResult}

            const savedText = await this.repo.saveConvertedText(response)

            //RETURNING THE RESPONSE
            return Right(response)

        } catch (e) {
            Logger.error('ERROR HAPPENED BHAE', e, APP_CONFIGS.SERVER_NAME)
            return Left(new FailedToProcessError(e))
        }
    }


}
