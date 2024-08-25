import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const Home = () => {
  const [ jsonData, setJsonData ] = useState([]);
  useEffect( () => {
    fetch('/commercial.json')
    .then(res => res.json())
    .then(data => setJsonData(data));
  },[])

  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto mt-20 mb-10">
        <div className="text-center text-3xl font-bold mb-8 text-[#131313]">
          <h1>Find your Dream Properties are</h1>
          <h1 className="font-extrabold mt-2">Ready - to - Use</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jsonData.map((cards,index) => (
            <Cards cards={cards} key={index}></Cards>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

Home.propTypes = {};

export default Home;
