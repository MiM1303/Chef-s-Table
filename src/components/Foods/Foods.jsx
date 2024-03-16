import Food from "../Food/Food";
import Cooking from "../Cooking/Cooking";
import PropTypes from 'prop-types'; 

const Foods = ({cook, currentlyCookingHandler, cooking, totalTime, totalCalories}) => {
    // console.log(cook);
    
    return (
        <div className="border border-[#28282833] rounded-2xl py-8 text-center flex-grow">
            {/* Want to Cook */}
            <div>
                <h3 className="text-[#282828] font-semibold text-2xl">Want to cook: {cook.length}</h3>
                <hr className="mt-4 mb-6" />
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="text-[#878787] font-medium text-base text-center">
                            <th className="w-10"></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cook.map( (food,idx) => <Food food={food} key={idx} index={idx} currentlyCookingHandler={currentlyCookingHandler}></Food>)
                        }
                            {/* <Food cook={cook}></Food> */}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Currently Cooking */}
            <div >
                <h3 className="text-[#282828] font-semibold text-2xl mt-8 mb-4">Currently cooking: {cooking.length}</h3>
                <hr />
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="text-[#878787] font-medium text-base text-center">
                            <th className="w-10"></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                cooking.map((cooking,idx) => <Cooking cooking={cooking} key={idx} index={idx} ></Cooking>)
                            }
                            {/* <Cooking cooking={cooking}></Cooking>
                            <Cooking></Cooking> */}
                            
                            <tr className="text-center text-base font-medium text-[#282828CC]">                        
                                <th></th>
                                <td></td>
                                <td>Total Time = <br />{totalTime} minutes</td>
                                <td>Total Calories = <br />{totalCalories} calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Foods.propTypes ={
    cook: PropTypes.array.isRequired,
    currentlyCookingHandler: PropTypes.func.isRequired,
    cooking: PropTypes.array.isRequired,
    totalCalories: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired
}

export default Foods;