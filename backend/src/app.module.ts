import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { HealthController } from './health/health.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductController, HealthController],
  providers: [AppService],
})
export class AppModule {}
