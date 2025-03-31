import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    orderType: string;

    @IsNumber()
    quantity: number;
}
