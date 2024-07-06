import React, { useContext, useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthProvider";
const Modal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const {signUpWithGmail, login} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");

    // redirecting to home page or specifig page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
     console.log(email, password)
    login(email, password).then((result) => {
      const user = result.user;
      alert("Login successfull");
      document.getElementById("my_modal_5").close()
      navigate(from, {replace: true})
    }).catch((error) => {
      const errorMessage = error.message;
      setErrorMessage("Provide a correct email and password!")
    })
  };

    // google signin
    const handleLogin = () => {
      signUpWithGmail().then((result) => {
        const user = result.user;
        alert("Login successfull!")
        navigate(from, {replace: true})
      }).catch((error) => console.log(error))
    }
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-white">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Please Login!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-[#eee]"
                {...register("email")}
                required
              />
            </div>

            {/* password */}
            <div className="form-control b">
              <label className="label">
                <span className="label-text text-base">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-[#eee]"
                {...register("password")}
                required
              />
              <label className="label ">
                <a href="#" className="label-text-alt link link-hover text-base">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error */}
            {
              errorMessage ? <p className="text-red-500 text-xs italic">{errorMessage}</p> : ""
            }

            {/* login btn */}
            <div className="form-control ">
              <input
                type="submit"
                value="Login"
                className="btn bg-green text-white text-base"
              />
            </div>

            <p className="text-center my-2">
              Donot have an account?{" "}
              <Link to="/signup" className="underline text-red-500 ml-1">
                Signup Now
              </Link>{" "}
            </p>

            <button
            htmlFor="my_modal_5"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</button>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mt-0">
            <button className="btn btn-circle text-xl bg-[#eee] hover:bg-green hover:text-white" onClick={handleLogin}>
              <FaGoogle />
            </button>
            <button className="btn btn-circle text-xl bg-[#eee] hover:bg-green hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle text-xl bg-[#eee] hover:bg-green hover:text-white">
            <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaInstagram, FaGithub, FaGoogle } from "react-icons/fa";

// const Modal = () => {
//   return (
//     <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle ">
//       <div className="modal-box bg-white">
//         <div className="modal-action  flex flex-col items-center justify-center  mt-0  ">
//           <form className="card-body  " method="dialog">
//             <h3 className="font-bold text-xl">Please Login!</h3>
//             <div className="form-control ">
//               <label className="label">
//                 <span className="label-text text-black text-base  ">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered bg-[#eee]"
//                 required
//               />
//             </div>
//             <div className="form-control ">
//               <label className="label">
//                 <span className="label-text text-black text-base">
//                   Password
//                 </span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered bg-[#eee]"
//                 required
//               />
//               <label className="label">
//                 <a
//                   href="#"
//                   className="label-text-alt link link-hover text-base text-black"
//                 >
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-1">
//               <input
//                 type="submit"
//                 value={"Login"}
//                 className="btn bg-green text-white text-base "
//               />
//             </div>
//             <p className="text-center my-2">
//               Donot have an account?{" "}
//               <Link to="/signup" className="underline text-red-500 ml-1">
//                 Signup Now
//               </Link>
//             </p>
//           </form>
//           {/* social sign in */}
//           <div className="text-center space-x-3 mt-0 ">
//             <button className="btn btn-circle text-lg bg-[#eee] hover:bg-green hover:text-white">
//               <FaGoogle />
//             </button>
//             <button className="btn btn-circle text-xl bg-[#eee]   hover:bg-green hover:text-white">
//               <FaInstagram />
//             </button>
//             <button className="btn btn-circle text-xl bg-[#eee]  hover:bg-green hover:text-white">
//               <FaGithub />
//             </button>
//           </div>
//         </div>
//       </div>
//     </dialog>
//   );
// };

// export default Modal;
