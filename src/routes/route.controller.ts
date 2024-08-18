import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRouteDto } from './dto/createRoute.dto';
import { RouteEntity } from './interface/route.interface';
import { RouteService } from './route.service';

@Controller('routes')
export class RouteController {

    constructor(private readonly routesService: RouteService) {};

    @Get('get-all-routes')
    async getAllRoutes(): Promise<RouteEntity[]> {
        return this.routesService.getAllRoutes();
    };

    @Post('create-route')
    async createRoute(@Body() createRoute: CreateRouteDto) {
        return this.routesService.createRoute(createRoute);
    };
};