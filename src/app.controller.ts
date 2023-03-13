import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {name:string } {
    return {name: 'Shohruhbek'};
  }
  @Get('/salom')
  salom(): string {
    return this.appService.salom();
  }
 
}

