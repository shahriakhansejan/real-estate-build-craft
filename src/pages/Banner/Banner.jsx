import { useEffect } from "react";
import { useState } from "react";
import Slides from "./Slides";


const Banner = () => {
  const [slideData, setSlideData] = useState([]);
  useEffect(() => {
    fetch('commercial.json')
      .then(res => res.json())
      .then(data => setSlideData(data))
  }, [])

  return (
    <div className="carousel w-full">
      {
        slideData.map((slides, index) => <Slides slides={slides} key={index} index={index} slideData={slideData}></Slides>)
      }
    </div>
  );
};



export default Banner;