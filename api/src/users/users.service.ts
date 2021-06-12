import { Injectable, NotFoundException, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/ceate-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersSevice {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.location = userDto.location;
    user.name = userDto.name;

    const newUser = await this.userRepository.save(user);

    return newUser;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if(!user) {
      throw new NotFoundException(`No user with id: ${id}`);
    }

    return user;
  }

  async all(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }
}