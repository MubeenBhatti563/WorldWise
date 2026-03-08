import React from "react";
import PageNav from "../components/PageNav";
import About from "../assets/about.jpg";

const Product = () => {
  return (
    <div className="min-h-screen">
      {" "}
      {/* Added a background to see text */}
      <PageNav />
      {/* Changed h-[80vh] to min-h-[80vh] so content isn't cut off on mobile */}
      <div className="grid place-items-center min-h-[80vh] py-12">
        {/* Responsive Flex: column on mobile, row on large screens */}
        <div className="flex flex-col lg:flex-row items-center mx-auto w-[90%] lg:w-[70%] gap-8 lg:gap-16">
          {/* Image Wrapper */}
          <div className="flex-1 w-full">
            <img
              src={About}
              alt="about"
              className="w-full h-auto max-h-100 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Wrapper */}
          <div className="flex-1 flex flex-col gap-5 text-white">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              About WorldWise.
            </h1>
            <p className="text-slate-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              expedita officiis eum nobis eveniet nemo quo, nesciunt dolores
              reiciendis quis ut.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              dolorem exercitationem quasi delectus magnam sequi ipsa a
              adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
