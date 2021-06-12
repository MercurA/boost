import "reflect-metadata";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseConfig from './configdb';
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
