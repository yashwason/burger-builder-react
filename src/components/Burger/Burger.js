import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const Burger = (props) => {
    let transformedIngredients = [];
    for(let ingredientName in props.ingredients){
        if(props.ingredients[ingredientName] > 0){
            for(let i=1; i<=props.ingredients[ingredientName]; i++){
                transformedIngredients.push(<BurgerIngredient type={ ingredientName } key={ ingredientName + '-' + i }/>)
            }
        }
    }

    if(!transformedIngredients.length) transformedIngredients = <p>Please add ingredients</p>

    return (
        <div className={ classes.Burger }>
            <BurgerIngredient type='bread-top'/>
            { transformedIngredients }
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default Burger;