// src/components/IngredientList.jsx
import React from "react";

const IngredientList = ({ ingredients, addIngredient }) => {
    return (
    <div className="IngredientList">
    <ul>
        {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addIngredient(ingredient)}>Add</button>
        </li>
        ))}


    </ul>
    </div>
  
    );};
  
  export default IngredientList;
  