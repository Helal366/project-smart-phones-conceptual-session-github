import React from "react";
import Navbar from "../components/Navbar";
import { Link, useRouteError } from "react-router";
import Button from "../components/Button";

const ErrorPage = () => {
  const error=useRouteError();
  console.log(error);
  console.log(error.status);
  return (
    <>
      <Navbar></Navbar>
      <div className="py-24 text-center w-2/3 mx-auto">
        <h1 className="text-4xl md:text-5xl xl:text-7xl font-thin text-gray-900 mb-8"> {error?.status || 404}</h1>
        <h3 className="text-3xl md:text-4xl xl:text-5xl font-thin text-gray-900 mb-8">  {error?.statusText}</h3>
        <p className="mb-8 text-xl md:text-2xl font-bold text-gray-900"> {error?.error?.message || 'Something went wrong'} </p>
        <p className="mb-8 text-xl md:text-2xl font-thin text-gray-900"> {error?.error?.stack || ''} </p>
        <Link to='/'>
          <Button label='Go to Home'></Button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
