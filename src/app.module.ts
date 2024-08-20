import { Module } from '@nestjs/common';
import { BusModule } from './bus/bus.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
import { RouteModule } from './routes/route.module';
import { TravelModule } from './travel/travel.module';

@Module({
  imports: [
    BusModule, 
    UserModule, 
    AuthModule, 
    RouteModule, TravelModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
=======
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    BusModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({isGlobal:true})
  ],
  providers: [],
>>>>>>> master
})
export class AppModule {}
