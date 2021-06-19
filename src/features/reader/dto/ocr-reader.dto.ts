import {IsNotEmpty, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

//COMING FROM NETWORK
export class ImageURLDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly imageUrl: string
}

/**
 * The DTO for the response
 * */
export class ImageTextDto {
    @ApiProperty()
    convertedText: string
}
