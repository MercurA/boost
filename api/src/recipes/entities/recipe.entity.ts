import { Ingredients } from "src/ingredients/entities/ingredients.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Ingredients, ingredients => ingredients.recipie)
    ingedients: Ingredients[];

    @Column()
    name: string;
}