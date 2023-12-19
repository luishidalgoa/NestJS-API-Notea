import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Get } from '@nestjs/common';

describe('AppController', () => {
  
  class AppControllerMock {
    getHello(): string {
      return 'Hello World!';
    }
  }
});
