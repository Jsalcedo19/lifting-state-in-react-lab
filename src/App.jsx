import { useState } from 'react'
import BurgerStack from './components/BurgerStack'
import IngredientList from './components/IngredientList'
import './App.css'

const App = () => {
  const [stack, setStack] = useState([]);
  
  const addToStack = (IngredientList) => {
    setStack([IngredientList, ...stack])
  };
const removeFromStack = (index) => {
  SetStack(stack.)
}
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList />  // add here! 
        <BurgerStack />
      </section>
    </main>
  );
};


export default App
