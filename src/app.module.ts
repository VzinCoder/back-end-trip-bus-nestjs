import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BusModule } from './bus/bus.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { RouteModule } from './routes/route.module';
import { TravelModule } from './travel/travel.module';

@Module({
  imports: [
    DatabaseModule,
    BusModule,
    UserModule,
    AuthModule,
    RouteModule, TravelModule,
    ConfigModule.forRoot({isGlobal:true})
  ],
  providers: [],
})
export class AppModule {}
