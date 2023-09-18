import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <span className='flex items-center gap-3'> <AiFillCheckCircle></AiFillCheckCircle>  {feature}</span>
        </div>
    );
};

export default Feature;