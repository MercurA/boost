import { Controller, Post } from "@nestjs/common";
import { IngredientDto } from "./dto/create-ingredient.dto";
import { IngredientsService } from "./ingredients.service";

@Controller('ingredients')
export class IngredientsController {
    constructor(private readonly ingredentsService: IngredientsService) {}

    @Post()
    addIngredients(ingredients: IngredientDto[]): void {
        ingredients.map( ingredient => {
            this.ingredentsService.create(ingredient)
        })
    }
}