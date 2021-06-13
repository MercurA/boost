import { Recipe } from "src/recipes/entities/recipe.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingredients {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    value: number;

    @Column()
    unit: string;

    @ManyToOne(() => Recipe, recipe => recipe.ingedients)
    recipie: Recipe;
}