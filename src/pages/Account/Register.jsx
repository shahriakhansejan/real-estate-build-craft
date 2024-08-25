import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { emailCreate } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const checked = form.get("terms");

    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("Password at least 6 characters or longer");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password should have at least one lowercase");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password should have at least one uppercase");
      return;
    }
    if (!/\d/.test(password)) {
      setError("Password should have at least a number");
      return;
    }

    if (!checked) {
      setError("Please Accept our Terms & Conditions");
      return;
    }

    emailCreate(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User created Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#f3f3f3] rounded py-12 mb-4 mt-8">
      <div className="card-body">
        <h1 className="text-center text-4xl font-semibold">Register Now!</h1>
        <hr className="my-8" />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter Photo URL"
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)} className="-ml-7">
                {showPassword ? <IoEyeOff/> : <IoEye />}
              </span>
            </div>
          </div>

          <div className="flex gap-2 mt-3 font-medium">
            <input type="checkbox" name="terms" id="" required />
            <p>
              Please Accept our{" "}
              <a
                className="font-semibold hover:underline"
                target="_blank"
                href="https://i.ibb.co/XL7c9Mr/wildflower-terms-and-conditions.png"
              >
                Terms & Condition
              </a>
            </p>
          </div>

          <div className="form-control mt-6">
            {success && (
              <p className="text-sm text-green-500 mb-1">{success}</p>
            )}
            {error && <p className="text-sm text-red-500 mb-1">{error}</p>}
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="mt-2">
          <p className="font-semibold">
            Already have an Account? Please{" "}
            <Link className="text-blue-500 text-lg" to="/login">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
