import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = () => {
    return (
        <div className="w-full">
            <div className="card w-96 bg-base-100 p-6 border border-[#28282833] rounded-2xl">
                <figure><img className="rounded-2xl " src="https://i.ibb.co/D1y92Zj/Beef-Stir-Fry.png" alt="Beef Stir Fry" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-semibold text-[#282828]">Beef Stir Fry</h2>
                    <p className="py-4 text-base text-[#878787] font-normal">Quick and flavorful Asian-inspired dish with tender beef and crisp vegetables.</p>
                    <hr />
                    <div>
                        <h6 className="pt-6 pb-4 text-[#282828] text-lg font-medium">Ingredients:3</h6>
                        <ul className="pb-4 text-[#878787] text-lg font-normal">
                            <li>500g beef sirloin</li>
                            <li>2 bell peppers, sliced</li>
                            <li>1 cup broccoli florets</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="py-6 flex gap-4 pt-6 text-base font-normal">
                        <div className="flex gap-2">
                            <CiClock2 />
                            <p>25 minutes</p>
                        </div>
                        <div className="flex gap-2">
                            <AiOutlineFire />
                            <p>550 calories</p>
                        </div>
                    </div>
                    <div className="card-actions">
                    <button className="btn text-lg font-medium bg-[#0BE58A] rounded-[50px] px-6 ">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;