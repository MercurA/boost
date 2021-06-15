import { Controller, Get, Param, Post, Request } from "@nestjs/common";
import { IngredientDto } from "src/ingredients/dto/create-ingredient.dto";
import { RecipeDto } from "./dto/recipes.dto";
import { Recipe } from "./entities/recipe.entity";
import { RecipesService } from "./recipes.service";

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @Post()
    addRecipe(@Request() req): Promise<Recipe> {
        const recipeBody: RecipeDto = {
            name: req.body.recipe.name
        }
        const ingredBody: IngredientDto = {
            name: req.body.ingredients.name,
            value: req.body.ingredients.value,
            unit: req.body.ingredients.unit
        }
        return this.recipesService.create(recipeBody, ingredBody);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Recipe> {
        return this.recipesService.findOne(Number(id));
    }
}