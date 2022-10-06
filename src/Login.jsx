import React,{useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {login} from "./redux/userSlice";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register,handleSubmit,formState: { errors },reset,trigger, } = useForm();
  
  const onSubmit = (data) => {
    // console.log(data);
    
    dispatch(login({
      email:data.email,
      password:data.password,
      status:true,
     }))
    reset();
  };

  const [verified, setVerifed] = useState(false);

  const dispatch=useDispatch();
  const onChange=()=>{
    setVerifed(true);
  }

    
  return (
    <div className="h-screen px-6  text-gray-800 flex justify-center items-center ">
          <div className=" bg-white/20 shadow-xl " >
          <div className="mx-10 my-10 ">
            <p className="text-1xl pl-2 my-3 text-gray-500 font-semibold">Login with</p>
            <div className="flex items-center justify-center ">
              <button className="social-btn bg-gray-600  hover:bg-gray-700">
                <BsGithub />
              </button>
              <button className="social-btn  bg-red-600  hover:bg-red-700">
                <BsGoogle />
              </button>
              <button className="social-btn  bg-blue-600  hover:bg-blue-700">
                <BsFacebook />
              </button>
            </div>
          
            <div className="or">
              <p className="text-center font-semibold mx-4 mb-0">Or</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <input
                type="email"
                className=" input "
                placeholder="Email"
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                trigger("email");
              }}
              />
              {errors.email && (
                <small className="alert">{errors.email.message}</small>
              )}
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="input"
                placeholder="Password"
                {...register("password", { 
                            required: true, 
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                        onKeyUp={() => {
                trigger("password");
              }}
                        
              />
              {errors.password && <small className="alert">Must have  upperletter and  number</small>}
            </div>

            <div className="text-center lg:text-left">
              <button
              type="submit"
                className="btn"
                disabled={!verified}
              >
                Login
              </button>
            </div>
            <div className="my-8">
            <ReCAPTCHA 
                sitekey="6LcuAVgiAAAAAA8OOG4X5_qLjLkQEEK-ee14vOTx"
                  onChange={onChange}
                      />
                      </div>
                      </form>
            <p className="text-center text-sm font-semibold mt-2 text-gray-500 ">
              Looking to <span className="text-blue-400 hover:text-green-400 cursor-pointer">create an account</span>{" "}?
              <br />
              <a href="#!" className="text-blue-400 hover:text-red-400" >
                Forget Password 
              </a>{" "}?
            </p>
            </div>
          </div>
      </div>
  
  );
};

export default Login;
