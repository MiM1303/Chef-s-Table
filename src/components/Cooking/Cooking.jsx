import PropTypes from 'prop-types';

const Cooking = ({cooking}) => {
    const {name, time, calories}=cooking;
    return (
        <tr className="bg-[#f8f7f2cc] text-center ">                        
            <th>1</th>
            <td>{name}</td>
            <td>{time}</td>
            <td>{calories}</td>
        </tr>
    );
};

Cooking.propTypes ={
    cooking: PropTypes.object.isRequired
}

export default Cooking;