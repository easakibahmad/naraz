import React from "react";
import image from "../assets/image3.jpg";

const Card1 = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-slate-950">
      <div className="cols-span-1 bg-yellow-400">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="col-span-3 grid grid-cols-1 gap-2 my-auto ">
        <h1>The Exorcist: Believer</h1>
        <p>The Exorcist: Believer The Exorcist: Believer</p>
      </div>
    </div>
  );
};

export default Card1;
