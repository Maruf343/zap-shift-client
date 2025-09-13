import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
    const {register,handleSubmit,formState: {errors}} = useForm()
    const onSubmit = (data) =>{
        console.log(data)
    }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
      <h1 className="text-black text-5xl font-bold mt-5">Welcome Back</h1>
      <p className="font-bold text-black my-2">Login with proFast</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />


          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength: 6})} className="input" placeholder="Password" />
          {
            errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>
          }
          {
            errors.password?.type === 'minLength' && <p className="text-red-500">Password Must be 6 character or longer</p>
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
        </fieldset>
        <button className="btn btn-primary text-black w-full mt-4">Login</button>
      </form>
      <p className="my-2">Don't have any account? <Link className="text-primary" to="/register">Register</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
