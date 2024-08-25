import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    const backBtn = () =>{
        navigate(-1)
    }
    return (
        <div className="text-center py-20">
            <h1 className="text-7xl text-red-600 font-extrabold">Oops.....!</h1>
            <p className="text-2xl font-semibold mt-7">We could not find this page at this time...</p>
            <div className="flex mt-12">
                <button onClick={backBtn} className="btn btn-info flex text-white font-bold items-center mx-auto"><IoMdArrowRoundBack/>Go Back</button>

                <Link to='/' className="mx-auto"><button className="btn btn-success text-white font-bold">Back to Home</button></Link>
            </div>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;