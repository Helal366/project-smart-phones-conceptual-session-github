import React, { useState } from "react";
import bannerImg from "../assets/banner.png";
import Button from "./Button";

const Hero = ({handleSearch}) => {
  const [searchText, setSearchText]=useState('');
  // console.log(searchText);
  return (
    <div className="py-12">
      <img
        src={bannerImg}
        alt="Banner Image"
        className="w-full mx-auto md:max-w-md"
      />
      <div className="text-center space-y-4">
        <h1 className="font-thin text-7xl text-gray-900">
          Browse,Search,View,Buy{" "}
        </h1>
        <p className="text-gray-500 mb-4">
          Best place to browse, search, view details and purchase of top
          flagship phones of the current time -- FlagShipFaceOff
        </p>
        <form
          onSubmit={(e)=>{
            handleSearch(e, searchText)
            setSearchText('')
          }}
          className="flex flex-col md:flex-row justify-center
                items-center mb-4 px-24"
        >
          <input
            onChange={(e)=>setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search phone by name"
            className="bg-white border border-gray-300 rounded 
                    shadow-md w-2/3 h-12 px-4 focus:outline-none
                    focus:shadow-outline md:mr-2 mb-3 md:mb-0"
          />
          <Button label='Search' type='submit'></Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
