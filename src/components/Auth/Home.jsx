import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import Contact from "../Home/Contact";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className=" min-h-screen flex flex-col items-center justify-center gap-8 bg-black">
        <h1 className="text-lg font-bold text-cyan-500">
          Just click below and see what happen
        </h1>
        <button
          onClick={handleLogout}
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          See what happen
        </button>
      </div>
      <Contact />
    </>
  );
};

export default Home;
