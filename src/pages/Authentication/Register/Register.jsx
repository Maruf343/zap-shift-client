import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Create An Account</h1>
        <p className="font-bold text-black ">Register with proFast</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-rose-500">Email is required</p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-rose-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-rose-500">
                Password must be 6 character or longer
              </p>
            )}
            <button className="btn btn-primary text-black mt-4">
              Register
            </button>
            <p className="my-2 text-[#CACACD]">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
