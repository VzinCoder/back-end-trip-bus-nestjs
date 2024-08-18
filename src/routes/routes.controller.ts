import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRouteDTO } from './dto/createRoute.dto';

@Controller('routes')
export class RoutesController {

    @Get('get-all-routes')
    async getAllRoutes() {
        return JSON.stringify({ test: 'Test' });
    };

    @Post('create-route')
    async createRoute(@Body() createRoute: CreateRouteDTO) {
        return createRoute;
    };
};
