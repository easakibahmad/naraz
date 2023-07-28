import React from "react";

const Navbar = () => {
  return (
    <div className="bg-yellow-400 h-20">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 items-center p-4">
        <h1 className="text-2xl font-bold">Naraz</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search in Naraz"
            className="input w-full rounded-none focus:outline-none"
          />
          <button className="bg-black text-white px-1 py-3">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
