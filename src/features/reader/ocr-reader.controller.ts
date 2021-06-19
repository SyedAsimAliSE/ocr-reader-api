import {Body, ConflictException, Controller, HttpStatus, Post} from '@nestjs/common'
import {OCRReaderService} from './ocr-reader.service'
import {ApiNotFoundResponse, ApiResponse} from '@nestjs/swagger'
import {identity} from 'rxjs'

import {ImageTextDto, ImageURLDto} from './dto/ocr-reader.dto'

@Controller()
export class OCRReaderController {

    constructor(private readonly ocrReaderService: OCRReaderService) {
    }

    @Post('read')
    @ApiResponse({status: 201, type: ImageTextDto})
    @ApiNotFoundResponse({status: 404, description: 'Not Found'})
    async readImageUrl(
        @Body() createURLDto: ImageURLDto
    ): Promise<ImageTextDto> {

        const result = await this.ocrReaderService.convertImageToText(createURLDto)

        return result.cata((error) => {
            throw new ConflictException({
                status: HttpStatus.CONFLICT,
                error: error.name,
                message: error.message
            })
        }, identity)
    }

}
