import PropTypes from 'prop-types';

const Cooking = ({cooking, index}) => {
    const {name, time, calories}=cooking;
    return (
        <tr className="bg-[#f8f7f2cc] text-center">                        
            <th>{index+1}</th>
            <td>{name}</td>
            <td>{time} minutes</td>
            <td className='py-6'>{calories} calories</td>
        </tr>
    );
};

Cooking.propTypes ={
    cooking: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default Cooking;