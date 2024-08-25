import PropTypes from "prop-types";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Cards = ({ cards }) => {
  const {
    id,
    image,
    location,
    area,
    status,
    price,
    segment_name,
    estate_title,
  } = cards;

  return (
    <div className="card card-compact mx-1 border">
      <div className="bg-[#F3F3F3] p-4 rounded-t-2xl">
        <figure>
          <img className="relative" src={image} alt="" />
        </figure>
        <p className="-mt-7 absolute z-10 font-medium text-sm text-yellow-50 rounded bg-black/50 flex items-center gap-1 py-1 px-2 ">
          {" "}
          <MdLocationPin /> {location}
        </p>
      </div>

      <div className="card-body">
        <div className="flex justify-between">
          <h3 className="bg-green-100 font-semibold text-[#23BE0A] px-5 py-2 rounded-xl">
            {status}
          </h3>
          <h3 className="bg-green-100 font-semibold text-[#23BE0A] px-5 py-2 rounded-xl">
            {area}
          </h3>
        </div>
        <h2 className="text-2xl font-bold text-[#1c1c1c]">{segment_name}</h2>
        <p className="text-lg font-semibold text-[#1e1e1e]">{estate_title}</p>
      </div>
      
      <div className="flex justify-between p-4">
        <h2 className="font-semibold border-2 text-[#50B1C9] border-[#50B1C9] px-3 py-2 rounded">
          {price}
        </h2>

        <Link to={`/details/${id}`}>
          <button className="bg-[#50B1C9] px-3 py-2 rounded font-semibold text-white hover:bg-white hover:text-[#50B1C9] hover:border border-[#50B1C9]">
            Properties
          </button>
        </Link>
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.object
};

export default Cards;
