import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/createRoute.dto';
import { Routes } from './interface/routes.interface';

@Injectable()
export class RoutesService {
    private routes: Routes[] = [];

    async createRoute(createRouteDto: CreateRouteDto): Promise<Routes> {
        const route: Routes = {
            ...createRouteDto,
            id: this.routes.length + 1
        };

        this.routes.push(route);

        console.log(this.routes);

        return route;
    };
};
