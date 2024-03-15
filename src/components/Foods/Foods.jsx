import Food from "../Food/Food";
import Cooking from "../Cooking/Cooking";

const Foods = () => {
    return (
        <div className="border border-[#28282833] rounded-2xl py-8 text-center w-2/5">
            {/* Want to Cook */}
            <div>
                <h3 className="text-[#282828] font-semibold text-2xl">Want to cook: 01</h3>
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
                            <Food></Food>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Currently Cooking */}
            <div >
                <h3 className="text-[#282828] font-semibold text-2xl mt-8 mb-4">Currently cooking: 02</h3>
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
                            <Cooking></Cooking>
                            <Cooking></Cooking>
                            
                            <tr className="text-center text-base font-medium text-[#282828CC]">                        
                                <th></th>
                                <td></td>
                                <td>Total Time = <br />45 minutes</td>
                                <td>Total Calories = <br />1050 calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Foods;