import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingredients } from "./entities/ingredients.entity";
import { IngredientsController } from "./ingredients.controller";
import { IngredientsService } from "./ingredients.service";

@Module({
    imports: [TypeOrmModule.forFeature([Ingredients])],
    providers: [IngredientsService],
    controllers: [IngredientsController]
})
export class IngredientsModule {}