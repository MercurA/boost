import "reflect-metadata";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseConfig from './config/database.config';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./users/users.module";
import { RecipesModule } from "./recipes/recipes.module";
import { IngredientsModule } from "./ingredients/ingridients.module";

@Module({
  imports: [
    UserModule,
    RecipesModule,
    IngredientsModule,
    TypeOrmModule.forRoot(DatabaseConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
