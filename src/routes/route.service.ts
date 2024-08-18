import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/createRoute.dto';
import { RouteEntity } from './interface/route.interface';

@Injectable()
export class RouteService {
    async createRoute(createRouteDto: CreateRouteDto): Promise<RouteEntity> {
        const route: RouteEntity = {
            ...createRouteDto,
            id: 1
        };

        return route;
    };

    async getAllRoutes(): Promise<RouteEntity[]> {
        return [];  
    } 
};
