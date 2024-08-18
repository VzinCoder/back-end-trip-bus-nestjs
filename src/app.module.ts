import { Module } from '@nestjs/common';
import { BusModule } from './bus/bus.module';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { RouteModule } from './routes/route.module';

@Module({
  imports: [
    BusModule, 
    UserModule, 
    AuthModule, 
    RouteModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
