import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRouteDto } from './dto/createRoute.dto';
import { Routes } from './interface/routes.interface';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {

    constructor(private readonly routesService: RoutesService) {};

    @Get('get-all-routes')
    async getAllRoutes(): Promise<Routes[]> {
        return this.routesService.getAllRoutes();
    };

    @Post('create-route')
    async createRoute(@Body() createRoute: CreateRouteDto) {
        return this.routesService.createRoute(createRoute);
    };
};
