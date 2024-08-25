import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { googleCreate, gitCreate, emailLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  //   email login
  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setError("");
    setSuccess("");

    emailLogin(email, password)
      .then((result) => {
        console.log(result);
        setSuccess("User Login Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // google Login
  const googleLogin = () => {
    googleCreate()
      .then((result) => {
        console.log(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   git login
  const gitLogin = () => {
    gitCreate()
      .then((result) => {
        console.log(result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#f3f3f3] rounded py-12 mb-4 mt-8">
      <div className="card-body">
        <h1 className="text-center text-4xl font-semibold">
          Log In your Account
        </h1>
        <hr className="my-8" />
        <form onSubmit={handleEmailLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex items-center">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="-ml-7"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
          </div>

          <div className="form-control mt-6">
            {success && (
              <p className="text-sm text-green-500 mb-1">{success}</p>
            )}
            {error && <p className="text-sm text-red-500 mb-1">{error}</p>}

            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="mt-2">
          <p className="font-semibold">
            New here? Please{" "}
            <Link className="text-red-500 text-lg" to="/register">
              Register
            </Link>
          </p>
        </div>
        <div className="text-center mt-10">
          <p className="text-lg font-semibold">Or, Sign In With</p>
          <div className="text-4xl pt-4">
            <button
              onClick={googleLogin}
              className="mr-3 hover:bg-white p-3 rounded-full"
            >
              <FcGoogle />{" "}
            </button>
            <button
              onClick={gitLogin}
              className="hover:bg-white p-3 rounded-full"
            >
              <VscGithubInverted />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
