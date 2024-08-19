import { Module } from '@nestjs/common';
import { RouteController } from './route.controller';
import { RouteService } from './route.service';
import { DatabaseModule } from 'src/database/database.module';
import { routeProviders } from './route.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RouteController],
  providers: [RouteService, ...routeProviders]
})
export class RouteModule {}