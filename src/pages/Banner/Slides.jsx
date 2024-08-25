import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Slides = ({ slideData, index, slides }) => {
  const { user } = useContext(AuthContext);

  const totalSlides = slideData.length;

  const preSlide = index === 0 ? `#slide${totalSlides}` : `#slide${index}`;
  const nextSlide =
    totalSlides - 1 === index ? `#slide1` : `#slide${index + 2}`;

  const mainSlide = `slide${index + 1}`;

  return (
    <div
      id={mainSlide}
      className="carousel-item relative w-full bg-gray-600 bg-blend-multiply"
      style={{
        backgroundImage: `url(${slides.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="mx-auto pt-5 pb-48 text-center container">
        {user ? 
          <div className="pb-32 text-right pr-3 text-white font-medium">
            <p>Welcome, {user.displayName}</p>
            <p>Email: {user.email}</p>
          </div> :
          <div className="pb-32 text-right pr-3 text-white font-medium">
          <p>You are now in Guest mode</p>
          <p>Please Login</p>
        </div>
        }
        <span className="">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#23BE0A] to-yellow-300 bg-clip-text text-transparent">
            Find your Commercial Space{" "}
          </h1>
          <h2 className="text-[#23BE0A] text-xl font-semibold mt-2">
            {slides.estate_title}
          </h2>
          <h3 className="text-yellow-300 mt-4 text-2xl font-semibold">
            {slides.segment_name}
          </h3>
        </span>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={preSlide} className="btn btn-circle">
            ❮
          </a>
          <a href={nextSlide} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

Slides.propTypes = {
  slideData: PropTypes.array,
  index: PropTypes.number,
  slides: PropTypes.object,
};

export default Slides;
