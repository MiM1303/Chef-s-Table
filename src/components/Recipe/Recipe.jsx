import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types'; 

const Recipe = ({recipe, wantToCookHandler}) => {
    const {img, name, description, ingredients, time, calories} = recipe;
    // console.log(name);
    return (
        <div className="w-full">
            <div className="card w-full md:w-96 bg-base-100 py-6 px-6 border border-[#28282833] rounded-2xl">
                <figure><img className="rounded-2xl " src={img} alt="Beef Stir Fry" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-semibold text-[#282828]">{name}</h2>
                    <p className="py-4 text-base text-[#878787] font-normal">{description}</p>
                    <hr />
                    <div>
                        <h6 className="pt-6 pb-4 text-[#282828] text-lg font-medium">Ingredients: {ingredients.length}</h6>
                        <ul className="pb-4 text-[#878787] text-lg font-normal list-disc pl-8">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div className="py-6 flex gap-4 pt-6 text-base font-normal">
                        <div className="flex gap-2 items-center">
                            <CiClock2 />
                            <p>{time} minutes</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <AiOutlineFire />
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button onClick={()=>wantToCookHandler(recipe)} className="btn text-lg font-medium bg-[#0BE58A] rounded-[50px] px-6 ">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes ={
    recipe: PropTypes.object.isRequired,
    wantToCookHandler: PropTypes.func.isRequired,
}

export default Recipe;