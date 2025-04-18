import React from "react";
import { Link } from "react-router";

const PhoneCard = ({ phone }) => {
  const { name, brand, image, description } = phone || {};
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h4 className="text-base font-semibold">Brand: {brand}</h4>
          <h2 className="card-title">Model: {name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to="/phoneDetails">
              <button
                className="relative cursor-pointer inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  View More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneCard;
