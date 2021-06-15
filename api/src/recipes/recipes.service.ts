import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IngredientDto } from "src/ingredients/dto/create-ingredient.dto";
import { Ingredients } from "src/ingredients/entities/ingredients.entity";
import { Repository } from "typeorm";
import { RecipeDto } from "./dto/recipes.dto";
import { Recipe } from "./entities/recipe.entity";

@Injectable()
export class RecipesService {
    constructor(
        @InjectRepository(Recipe)
        private readonly recipesRepository: Repository<Recipe>,
        @InjectRepository(Ingredients)
        private readonly ingredientsRepository: Repository<Ingredients>
    ){}

    async create(recipesDto: RecipeDto, ingredientsDto: IngredientDto): Promise<Recipe> {
        const recipe = new Recipe();
        const ingredients = new Ingredients();
        
        
        ingredients.name = ingredientsDto.name;
        ingredients.unit = ingredientsDto.unit;
        ingredients.value = ingredientsDto.value;
        // initialy save the ingrredients so we can create realation with recipe
        const newIngred = await this.ingredientsRepository.save(ingredients);

        recipe.name = recipesDto.name;
        recipe.ingedients = [newIngred];
        const newRecipe = await this.recipesRepository.save(recipe);

        return newRecipe;
    }

    async findOne(id: number): Promise<Recipe> {
        return await this.recipesRepository.findOne({where: {id: id}, relations: ['ingedients']})
    }
}