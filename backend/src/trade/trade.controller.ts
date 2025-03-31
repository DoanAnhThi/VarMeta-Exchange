import { Controller, Post, Body } from '@nestjs/common'; // Thêm các import cần thiết
import { TradeService } from './trade.service'; // Import service
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('trade') // Thêm Controller
export class TradeController {
    constructor(private readonly tradeService: TradeService) {} // Inject TradeService

    @Post('order')
    async createOrder(@Body() orderDto: CreateOrderDto) {
        return this.tradeService.createOrder(orderDto);
    }
}
