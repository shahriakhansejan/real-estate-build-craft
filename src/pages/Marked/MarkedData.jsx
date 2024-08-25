import PropTypes from 'prop-types';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MarkedData = ({ aMark }) => {

    const { id,
        image,
        location,
        area,
        status,
        price,
        segment_name,
        estate_title, } = aMark;
    return (
        <div className='flex flex-col lg:flex-row gap-5 p-3 border rounded-lg mt-5'>
            <div className='bg-[#f3f3f3] p-3 rounded-lg my-auto w-full lg:w-1/3'><img src={image} alt="" /></div>
            <div className='col-span-2 flex flex-col justify-between w-full lg:w-2/3'>
                <div className='mb-5'>
                    <h1 className='text-2xl font-bold text-black/90'>{estate_title}</h1>
                    <h1 className='text-lg font-semibold text-black/75 py-2 border-b'>Segment: {segment_name}</h1>
                    
                </div>
                <div>
                <span className='flex flex-col md:flex-row justify-between text-lg text-[#1c1c1c] font-semibold'>
                        <p className=''>Area : {area}</p>
                        <p className='flex gap-1 items-center'><MdLocationPin/> {location}</p>
                    </span>
                    <span className="flex justify-between py-4">
                        <h2 className="text-lg font-semibold text-[#328EFF] bg-blue-100 px-3 py-2 rounded-lg">
                            <span>For {status}</span>
                        </h2>
                        <h2 className="text-lg font-semibold text-[#328EFF] bg-blue-100 px-3 py-2 rounded-lg">
                            <span>{price}</span>
                        </h2>
                    </span>
                </div>
                <Link className='w-full' to={`/details/${id}`}><button className='btn btn-outline font-bold hover:border-none text-green-600 hover:bg-green-600 w-full '>View Details</button></Link>
            </div>
        </div>
    );
};

MarkedData.propTypes = {
    aMark: PropTypes.object
};

export default MarkedData;