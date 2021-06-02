import { FunctionComponent } from "react";
import Image from 'next/image';
import style from './Style.module.scss'

interface IRecipeCard {
    title: string
}

const RecipeCard: FunctionComponent<IRecipeCard> = ({title}) => {

    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <div className={style.imageContainer}>
                <Image 
                    src={'/images/food.jpg'} 
                    width={400}
                    height={300}
                />
            </div>
        </div>
    )
}

export default RecipeCard;