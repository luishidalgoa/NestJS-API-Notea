import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserModule } from "./user.module";
import { User as UserModel} from '@prisma/client'
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {
    constructor(private userS: UserService) {}

    @Get(':id')
    async getUserById(@Param('id') id: number):Promise<UserModel> {
        return this.userS.getUserById({id})
    }

    @Post()
    async createUser(
        @Body() userData: { name: string; email: string },
    ):Promise<UserModel> {
        return this.userS.createUser(userData)
    }

    async deleteUser(@Param('id') id: number):Promise<UserModel> {
        return this.userS.deleteUser({id})
    }
}