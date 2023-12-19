import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'prisma/prisma.service';
import { AppService } from 'src/app.service';

@Module({
    controllers: [UserController],
    providers: [UserService,AppService],
})
export class UserModule {

}
