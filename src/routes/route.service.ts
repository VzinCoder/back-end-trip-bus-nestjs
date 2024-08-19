import { Inject, Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/createRoute.dto';
import { RouteEntity } from './entities/route.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RouteService {
    constructor(
        @Inject('ROUTE_REPOSITORY')
        private readonly routeRepository: Repository<RouteEntity>
    ) {}

    async createRoute(createRouteDto: CreateRouteDto): Promise<RouteEntity> {
        return this.routeRepository.save({
            ...createRouteDto,
        });
    };

    async getAllRoutes(): Promise<RouteEntity[]> {
        return this.routeRepository.find();  
    } 
};
