import PropTypes from 'prop-types'; 

const Food = ({food,currentlyCookingHandler}) => {
    // console.log(food);
    const {name, time, calories}=food;
    // console.log(name);
    return (
        <tr className="bg-[#f8f7f2cc] text-center">
            <th>1</th>
            <td>{name}</td>
            <td>{time}</td>
            <td>{calories}</td>
            <td><button onClick={()=>currentlyCookingHandler(food)} className="text-base font-medium text-[#150B2B] rounded-[50px] px-5 py-2 bg-[#0BE58A]">Preparing</button></td>
        </tr>
    );
};

Food.propTypes ={
    food: PropTypes.object.isRequired,
    currentlyCookingHandler: PropTypes.func.isRequired
}

export default Food;