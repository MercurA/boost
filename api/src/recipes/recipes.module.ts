import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingredients } from "../ingredients/entities/ingredients.entity";
import { Recipe } from "./entities/recipe.entity";
import { RecipesController } from "./recipes.controller";
import { RecipesService } from "./recipes.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Recipe, Ingredients])],
    providers: [RecipesService],
    controllers: [RecipesController]
})
export class RecipesModule {}