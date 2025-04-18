import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Root() {
  return (
    <>
      <section className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="flex-1">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}

export default Root;
