import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IngredientDto } from "./dto/create-ingredient.dto";
import { Ingredients } from "./entities/ingredients.entity";

@Injectable()
export class IngredientsService {
    constructor(
        @InjectRepository(Ingredients)
        private readonly ingredientsRepo: Repository<Ingredients>
    ) {}

    async create(ingredientsDto: IngredientDto): Promise<Ingredients> {
        const ingredient = new Ingredients();

        ingredient.name = ingredientsDto.name;
        ingredient.unit = ingredientsDto.unit;
        ingredient.value - ingredientsDto.value;

        const newIngredient = await this.ingredientsRepo.save(ingredient);

        return newIngredient;
    }
}