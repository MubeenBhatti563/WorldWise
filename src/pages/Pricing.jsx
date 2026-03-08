import React from "react";
import PageNav from "../components/PageNav";
import Building from "../assets/building.jpg";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {" "}
      {/* Added a background to see text */}
      <PageNav />
      {/* Changed h-[80vh] to min-h-[80vh] so content isn't cut off on mobile */}
      <div className="grid place-items-center min-h-[80vh] py-12">
        {/* Responsive Flex: column on mobile, row on large screens */}
        <div className="flex flex-col lg:flex-row items-center mx-auto w-[90%] lg:w-[70%] gap-8 lg:gap-16">
          {/* Text Wrapper */}
          <div className="flex-1 flex flex-col gap-5 text-white">
            <h1 className="flex flex-col gap-0.5 text-3xl lg:text-5xl font-semibold">
              <span>Simple pricing.</span>
              <span>Just $9/month.</span>
            </h1>
            <p className="text-slate-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              expedita officiis eum nobis eveniet nemo quo, nesciunt dolores
              reiciendis quis ut.
            </p>
            <Link
              to="/login"
              className="inline-block rounded-md bg-green-500 px-8 py-3 text-sm font-bold tracking-wider text-slate-800 transition-all hover:bg-green-400 active:scale-95 min-w-50 max-w-75 cursor-pointer text-center"
            >
              START TRACKING NOW
            </Link>
          </div>
          {/* Image Wrapper */}
          <div className="flex-1 w-full">
            <img
              src={Building}
              alt="about"
              className="w-full h-auto max-h-100 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
