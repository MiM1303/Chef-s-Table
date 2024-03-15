import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Foods from './components/Foods/Foods'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'

function App() {
  // for What to Cook
  const [cook, setCook]= useState([]);
  // for Currently Cooking
  const [cooking, setCooking] = useState([]);

  const [totalTime, setTotalTime]=useState(0);
  const [totalCalories, setTotalCalories]=useState(0);

  const wantToCookHandler = (recipe) => {
    // console.log(recipe);
    // console.log(cook);
    const isExist = cook.find(food=> food.id==recipe.id);
    if(isExist){
      toast('Recipe is already in list');
      
    }
    else{
      const newRecipe = [...cook, recipe];
      setCook(newRecipe);
    }
   // console.log(cook);
  }

  const currentlyCookingHandler = (food) =>
    {
      // adding clicked item to Currently Cooking table
      const currentlyCooking = [...cooking, food];
      setCooking(currentlyCooking);
      // console.log(cooking)
      // console.log('This is currently processing');

      // removing clicked item from What to Cook table
      const remainingFood = cook.filter(item=> item.id!==food.id);
      setCook(remainingFood);

      // updating totalTime
      const newTotalTime = totalTime+food.time;
      setTotalTime(newTotalTime);

      // updating totalCalories
      const newTotalCalories = totalCalories+food.calories;
      setTotalCalories(newTotalCalories);
    }

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>

      <div className='text-center'>
        <h2 className='text-[#150B2B] text-[40px] font-semibold'>Our Recipes</h2>
        <p className='mb-12 mt-6 w-2/3 mx-auto text-[#150B2B99] font-normal text-base'>Embark on a flavorful journey through our extensive collection of diverse recipes. From classic comfort foods to exotic culinary delights, discover endless inspiration for every palate and occasion.</p>
      </div>
      
      <div className='flex gap-6'>
        <Recipes wantToCookHandler={wantToCookHandler}></Recipes>
        <Foods cook={cook} currentlyCookingHandler={currentlyCookingHandler} cooking={cooking} totalTime={totalTime} totalCalories={totalCalories}></Foods>
      </div>

    </>
  )
}

export default App
