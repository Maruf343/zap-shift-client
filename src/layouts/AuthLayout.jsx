import React from "react";
import { Link, Outlet } from "react-router";
import authImg from "../assets/authImage.png"
import ProFastLogo from "../pages/shared/proFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="bg-white p-12">
        <div>
            <Link to="/">
                <ProFastLogo></ProFastLogo>
            </Link>
        </div>
      <div className="hero-content px-15 flex-col lg:flex-row-reverse">
        <div className="flex-1 bg-[#FAFDF0]">
            <img
          src={authImg}
          className="rounded-lg "
        />
        </div>
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
