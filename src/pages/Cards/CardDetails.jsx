import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveApplication } from "../../utility/localStorage";
import Footer from "../Footer/Footer";

const CardDetails = () => {
  const cardsData = useLoaderData();
  const navigate = useNavigate();

  const backBtn = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const idInt = parseInt(id);
  const cardData = cardsData.find((cardData) => cardData.id === idInt);
  const {
    image,
    facilities,
    location,
    area,
    status,
    price,
    description,
    segment_name,
    estate_title,
  } = cardData;

  const notify = () => {
    saveApplication(idInt);
    toast("Successfully added as Marked");
  }

  return (
    <div>
      <div className="container mx-auto min-h-screen px-1 my-6">
        <div className="bg-[#f3f3f3] p-5 rounded-xl">
          <img className="w-screen" src={image} alt="" />
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-stretch mt-5">
          <span className="flex-1 border p-5 rounded-lg flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-3 text-[#1c1c1c]">
                {estate_title}
              </h1>
              <h2 className="text-2xl font-semibold text-[#1c1c1c]">
                Location : <span className="text-[#50B1C9]">{location}</span>
              </h2>
            </div>
            <p className="font-medium text-justify text-[#1e1e1e] mt-4">
              <span className="font-semibold text-lg">Description : </span>
              {description}
            </p>
          </span>

          <span className="flex-1 border rounded-lg p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#1c1c1c] mb-2">
                Segment : {segment_name}
              </h3>
              <h2 className="text-xl font-semibold text-[#1c1c1c] my-2">
                Area : {area}
              </h2>
              <hr className="mt-6" />
              <div className="flex justify-between py-4">
                <h2 className="text-lg font-semibold border-2 text-[#50B1C9] border-[#50B1C9] px-2 py-1 rounded-lg">
                  <span>For {status}</span>
                </h2>
                <h2 className="text-lg font-semibold border-2 text-[#50B1C9] border-[#50B1C9] px-2 py-1 rounded-lg">
                  <span>{price}</span>
                </h2>
              </div>
              <hr />
              <div className="text-xl font-semibold mt-5 text-[#1c1c1c]">
                Facilities :
                <div className="mt-5">
                  {facilities.map((facility, index) => (
                    <li
                      className="list-none flex gap-3 mt-2 text-base ml-10 items-center"
                      key={index}
                    >
                      {" "}
                      <IoCheckmarkDoneSharp className="text-green-600 text-xl font-bold" />
                      {facility}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <button onClick={backBtn} className="btn btn-neutral">
                <IoMdArrowRoundBack /> Back
              </button>
              <button onClick={notify} className="btn btn-success text-white">
                Add to Marked
              </button>
            </div>
          </span>
        </div>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
};

CardDetails.propTypes = {};

export default CardDetails;
