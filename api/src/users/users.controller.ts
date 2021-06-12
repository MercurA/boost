import { Controller, Get, Post, Request } from "@nestjs/common";
import { CreateUserDto } from "./dto/ceate-user.dto";
import { User } from "./entities/user.entity";
import { UsersSevice } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersSevice) {}

    @Get()
    findAllUsers(): Promise<User[]> {
        return this.userService.all();
    }

    @Post()
    addUser(@Request() req): Promise<User> {
        const body: CreateUserDto = { 
            name: req.body.name,
            location: req.body.location
        }
        return this.userService.create(body);
    }
}