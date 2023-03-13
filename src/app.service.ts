import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  salom(): string {
    return 'Hello shohGroup!';
  }
  getHello(): string {
    return 'Hello myGroup!';
  }
}
