
import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {createUser, login} = useContext(AuthContext);
          // redirecting to home page or specifig page
      const location = useLocation();
      const navigate = useNavigate();
      const from = location.state?.from?.pathname || "/";

      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        createUser(email, password).then((result) => {
          // Signed up 
          const user = result.user;
          alert("Account creation successfully done!")
          document.getElementById("my_modal_5").close()
          navigate(from, {replace: true})
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        })
      }
  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center p-5 my-3">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Create A Account!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-[#eee]"
                {...register("email")}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-[#eee]"
                {...register("password")}
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt text-base text-black link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error */}
            {/* {
            errorMessage ? <p className="text-red-500 text-xs italic">{errorMessage}</p> : ""
            } */}

            {/* login btn */}
            <div className="form-control mt-2">
              <input
                type="submit"
                value="Signup"
                className="btn bg-green text-white text-base"
              />
            </div>

            <p className="text-center my-2">
              Have an account?{" "}
              <button className="underline text-red-500 ml-1"
               onClick={() => document.getElementById("my_modal_5").showModal()}
              >
                Login
              </button>{" "}
            </p>

            <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-xl"
            >✕</Link>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle text-xl bg-[#eee] hover:bg-green hover:text-white">
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
        <Modal/>
    </div>
  )
}

export default Signup

// import React from 'react'
// import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form"
// import Modal from "./Modal";


// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const {createUser, login} = useContext(AuthContext);
//         // redirecting to home page or specifig page
//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathname || "/";

//   const onSubmit = (data) => {
//     const email = data.email;
//     const password = data.password;
//      console.log(email, password)
//     login(email, password).then((result) => {
//       const user = result.user;
//       alert("Login successfull");
//       document.getElementById("my_modal_5").close()
//       navigate(from, {replace: true})
//     }).catch((error) => {
//       const errorMessage = error.message;
//       setErrorMessage("Provide a correct email and password!")
//     })
//   };

//   return (
//     <div className="max-w-md bg-white-500  shadow w-full mx-auto flex items-center justify-center rounded-xl border-2 my-20 pb-10 ">
//       <div className="modal-action flex flex-col justify-center mt-0 bg-[#eee] ">
//           <form onSubmit={handleSubmit(onSubmit)} className="card-body " method="dialog">
//             <h3 className="font-bold text-lg">Create A Account!</h3>

//             {/* email */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-base">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered bg-[#eee]"
//                 {...register("email")}
//                 required
//               />
//             </div>

//             {/* password */}
//             <div className="form-control b">
//               <label className="label">
//                 <span className="label-text text-base">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered bg-[#eee]"
//                 {...register("password")}
//                 required
//               />
//               <label className="label ">
//                 <a href="#" className="label-text-alt link link-hover text-base">
//                   Forgot password?
//                 </a>
//               </label>
//             </div>

//             {/* error */}
//             {/* {
//               errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
//             } */}

//             {/* login btn */}
//             <div className="form-control ">
//               <input
//                 type="submit"
//                 value="Sign up"
//                 className="btn bg-green text-white text-base"
//               />
//             </div>

//             <p className="text-center my-2">
//               Have an account?{" "}
//               <button  className="underline text-red-500 ml-1"
//                 onClick={() => document.getElementById("my_modal_5").showModal()}>
//                 Login
//               </button>{" "}
//             </p>

//             <Link
//             to="/"
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl text-white  "
//             >✕</Link>
//           </form>

//           {/* social sign in */}
//           <div className="text-center space-x-3 mt-0">
//             <button className="btn btn-circle text-xl bg-[#eee] hover:bg-green hover:text-white" >
//               <FaGoogle />
//             </button>
//             <button className="btn btn-circle text-xl bg-[#eee] hover:bg-green hover:text-white">
//               <FaFacebookF />
//             </button>
//             <button className="btn btn-circle text-xl bg-[#eee] hover:bg-green hover:text-white">
//             <FaGithub />
//             </button>
//           </div>
//         </div>
//         <Modal/>
//     </div>
//   )
// }

// export default Signup