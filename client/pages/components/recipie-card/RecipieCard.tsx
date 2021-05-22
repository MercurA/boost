import { makeStyles } from "@material-ui/core";
import { FunctionComponent } from "react";
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    container: {
        height: 400,
        width: 600,
        boxShadow: '0px 0px 7px -2px',
        borderRadius: '5px',
        margin: '0 auto',
        display: 'flex',
        padding: '0 100px',
        fontFamily: 'Lora'
    },
    imageContainer: {
        textAlign: 'center',
        marginTop: 45
    },
    title: {
        position: 'absolute',
        textAlign: 'center',
        marginTop: 10
    }
}))

interface IRecipeCard {
    title: string
}

const RecipeCard: FunctionComponent<IRecipeCard> = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.title}>{title}</div>
            <div className={classes.imageContainer}>
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