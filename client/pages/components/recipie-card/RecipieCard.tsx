import React, { FunctionComponent } from "react";
import style from './Style.module.scss'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
const mockUserData = {
    name: 'Ema',
    tags: ['Mediteranian', 'Shrimp']
}

interface IRecipeCard {
    title: string
}

const RecipeCard: FunctionComponent<IRecipeCard> = ({ title }) => {

    return (
        <div className={style.cardContainer}>
            <div className={style.userContainer}>
                <AccountCircleOutlinedIcon />
                {mockUserData.name}
            </div>
            <div className={style.innerContainer}>
                <div className={style.title}>{title}</div>
                <img className={style.imageContainer} src="/images/food.jpg" alt="food image" />
            </div>
        </div>
    )
}

export default RecipeCard;