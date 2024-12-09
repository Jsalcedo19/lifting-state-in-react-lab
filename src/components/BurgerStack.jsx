// `src/components/BurgerStack.jsx`
const BurgerStack = ({ stack, removeIngredient }) => {
    return 
    
    
        <div className="burger-stack">
        <ul>
            {stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
                <button onClick={() => removeIngredient(index)}>Remove</button>
            </li>
            ))};
            


    
        </ul>
    </div>
  };
  
  export default BurgerStack;
  