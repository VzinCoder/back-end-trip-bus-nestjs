import { Module } from '@nestjs/common';
import { BusModule } from './bus/bus.module';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [BusModule, UserModule, AuthModule, RoutesModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
