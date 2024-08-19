import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateRouteDto } from './dto/createRoute.dto';
import { RouteEntity } from './entities/route.entity';
import { RouteService } from './route.service';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Role } from 'src/auth/enum/role.enum';

@Controller('routes')
export class RouteController {

    constructor(private readonly routesService: RouteService) {};

    @Get('get-all-routes')
    @UseGuards(AuthGuard,RolesGuard)
    @Roles(Role.ENTERPRISE)
    async getAllRoutes(): Promise<RouteEntity[]> {
        return this.routesService.getAllRoutes();
    };

    @Post('create-route')
    @UseGuards(AuthGuard,RolesGuard)
    @Roles(Role.ENTERPRISE)
    async createRoute(@Body() createRoute: CreateRouteDto) {
        return this.routesService.createRoute(createRoute);
    };
};