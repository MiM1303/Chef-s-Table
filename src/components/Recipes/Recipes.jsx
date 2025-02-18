import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import Recipe from "../Recipe/Recipe";

const Recipes = ({wantToCookHandler}) => {
    const[recipes, setRecipes]=useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[]);

    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
            {
                recipes.map((recipe,index)=> <Recipe 
                    key={index}
                    recipe={recipe}
                    wantToCookHandler={wantToCookHandler}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes ={
    wantToCookHandler: PropTypes.func.isRequired,
    
}

export default Recipes;