import { DataSource} from 'typeorm';
import { RouteEntity } from './entities/route.entity';

export const routeProviders = [
  {
    provide: 'ROUTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RouteEntity),
    inject: ['DATABASE_SOURCE'],
  },
];