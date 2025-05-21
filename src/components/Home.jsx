import React, { useEffect, useState } from "react";
import IMG1 from "../img/img-1.png";

function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <div className="p-4 md:p-10">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-2 md:px-8 bg-gray-50 mt-0 md:mt-[-50px]">
          <div
            className={`flex-1 transition-all duration-1000 p-4 md:p-10 ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center md:text-left">
              Welcome to Our Donations Website
            </h1>
            <p className="text-base md:text-2xl text-gray-700 text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem ipsa omnis beatae corporis, ut dolor delectus velit sunt, hic impedit corrupti sapiente ducimus minus itaque, consequatur unde quos a laborum cumque accusamus aspernatur voluptate magnam nam. Eos, iusto perferendis!
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end p-4 md:p-10 w-full">
            <img
              src={IMG1}
              alt="Donation"
              className="w-64 md:max-w-md w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;  