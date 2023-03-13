import { Module } from '@nestjs/common';
import { Product } from 'products/product.model';
import { ProductsModule } from 'products/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
