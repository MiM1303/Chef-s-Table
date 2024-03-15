import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    return (
        <div  className='flex gap-6 w-3/5'>
            <Recipe></Recipe>
            <Recipe></Recipe>
        </div>
    );
};

export default Recipes;