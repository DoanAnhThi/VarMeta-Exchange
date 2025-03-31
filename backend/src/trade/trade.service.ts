import { Injectable } from '@nestjs/common';

@Injectable()
export class TradeService {
    async createOrder(orderDto: any) {
        return { message: 'Order created successfully', order: orderDto };
    }
}
