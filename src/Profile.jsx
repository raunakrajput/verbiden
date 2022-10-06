import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser,registerData } from './redux/userSlice';
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register,handleSubmit,formState: { errors },reset,trigger, } = useForm();
  const dispatch=useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerData({
      username:data.username,
      email:data.email,
      firstName:data.firstName,
      lastName:data.lastName,
      address:data.address,
      city:data.city,
      country:data.country,
      pcode:data.code,
      message:data.message,
    }
    ));
    reset();
  };
  const user=useSelector(selectUser)
  console.log(user);

  const handleLogout=()=>{
    dispatch(logout({
      status:false,
    }
    ));   
  }

  return (
   <div className="h-full container mx-auto ">
   <div className='my-10 flex justify-center items-center flex-col'>
   <p className='text-green-500'>Welcome </p>
   <p className='text-red-300'>{user.email}</p>
    <button className="btn w-[200px] inline-block" onClick={handleLogout}>Logout</button>

   </div>
 
        <form className="flex items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-10  shadow-sm border-x border-gray-300">
        <div className="mx-10 ">
          <p className=" text-2xl  text-gray-500 font-semi mb-3">Edit Profile</p>

          <div className="gap-4 md:flex">
          <div className="block w-full pt-2">
            <label for="company" className="label">Company (Disabled)</label>
            <input type="text"  className="input-disable" placeholder="Creative Code Inc." disabled/>
        </div>
        <div className="block w-full pt-2">
            <label for="username" className="label">Username</label>
            <input type="text"  className="input" placeholder="Username" 
            {...register("username", { required: true, maxLength: 10 })} onKeyUp={() => {
                trigger("username");
              }}
           />
                {errors.username && <small className='alert'>Please check the Username and Maximum 10 letter allow</small>}
        </div>

        <div className="block w-full pt-2">
            <label for="email" className="label">Email Address</label>
            <input type="email"  className="input" placeholder="Email Address" 
              {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (<small className='alert'>{errors.email.message}</small>
              )}
        </div> 
          </div>


          <div className="gap-4 md:flex">
        <div className="block w-full pt-2">
            <label for="first_name" className="label">First Name</label>
            <input type="text"  className="input" placeholder="Company" {...register("firstName", { required: true, minLength: 1 })} onKeyUp={() => {
                trigger("firstName");
              }}/>
            {errors.firstName && <small className='alert'>Please check the First Name</small>}
        </div>
        <div className="block w-full pt-2">
            <label for="last_name" className="label">Last Name</label>
            <input type="text"  className="input" placeholder="Last Name" {...register("lastName", { required: true, minLength: 1 })} onKeyUp={() => {
                trigger("lastName");
              }}/>
              {errors.lastName && <small className='alert'>Please check the Last Name</small>}
        </div>
          </div>



          
          <div className="flex gap-4 ">
        <div className="block w-full pt-2">
            <label for="address" className="label">Address</label>
            <input type="text"  className="input" placeholder="Home Address" 
              {...register("address", { required: true, minLength: 10 })} onKeyUp={() => {
                trigger("address");}}
            />
            {errors.address && <small className='alert'>Please check the address</small>}
        </div>
          </div>



          <div className="gap-4  md:flex">
        <div className="block w-full pt-2">
            <label for="city" className="label">City</label>
            <input type="text"  className="input" placeholder="City" {...register("city", { required: true, minLength: 1 })} onKeyUp={() => {
                trigger("city");
              }}/>
              {errors.city && <small className='alert'>Please check the city</small>}
        </div>
        <div className="block w-full pt-2">
            <label for="country" className="label">Country</label>
            <input type="text"  className="input" placeholder="Country" {...register("country", { required: true, minLength: 1 })} onKeyUp={() => {
                trigger("country");
              }}/>
              {errors.country && <small className='alert'>Please check the country</small>}
        </div>
        <div className="block w-full pt-2">
            <label for="postal_code" className="label">Postal Code</label>
            <input type="text"  className="input" placeholder="Zip Code" {...register("code", { required: true, pattern:{value:/^[0-9]{5}(?:-[0-9]{4})?$/}})} onKeyUp={() => {
                trigger("code");
              }}/>
              {errors.code && <small className='alert'>Please check the postal code</small>}
        </div>
          </div>
          


          <div className="flex gap-4 ">
          <div className="block w-full pt-2">
            <label for="about_me" className="label">About Me</label>
            <textarea type="text"  className="textarea" placeholder="Here can be your description" 
                {...register("message", { required: "Message is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }}
            />
            {errors.message && (
                <small className='alert'>{errors.message.message}</small>
              )}
        </div>
        
          </div>
         

          <div className="flex justify-end items-end">
          <div className=" w-[200px] pt-4 mb-2">
        
            <button
            type="submit"
                className="update-btn"
              >
              Update Profile
              </button>
        </div>
        
          </div>
    

          </div>
    
          </div>
        </form>
      </div>
  

  )
}

export default Profile
