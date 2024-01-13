import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className=" flex justify-center flex-col items-center gap-5">
        <h1 className="text-2xl font-bold">Sing up to our newsletter</h1>
        <div className="flex shadow-md rounded-lg">
          <input
            className="p-3 rounded-l-lg lg:w-[450px] border outline-none"
            type="text"
          />
          <button className="p-3 rounded-r-lg w-[100px] bg-blue-500 text-white">
            Submit
          </button>
        </div>
      </div>
      {/* footer  */}
      <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 justify-around">
        <div className="flex flex-col gap-5">
          <div className="text-lg font-bold mb-2">
            <p>Touro</p>
          </div>
          <span>Lorem ipsum dolor sit amet...</span>
          <span>Lorem ipsum dolor sit amet...</span>
          <span>Lorem ipsum dolor sit amet...</span>
          <div className="flex justify-around text-gray-500 text-2xl">
            <p className="hover:text-orange-500 cursor-pointer transition">
              <FaFacebook />
            </p>
            <p className="hover:text-orange-500 cursor-pointer transition">
              <FaTwitter />
            </p>
            <p className="hover:text-orange-500 cursor-pointer transition">
              <IoLogoInstagram />
            </p>
            <p className="hover:text-orange-500 cursor-pointer transition">
              <FaLinkedin />
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-bold mb-2">Quick Link</h1>
          <span>Home</span>
          <span>Categories</span>
          <span>Blog</span>
          <span>About Us</span>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-bold mb-2">Quick Link</h1>
          <span>FAQs</span>
          <span>Privavy Policy</span>
          <span>Term & Conditions</span>
          <span>Support</span>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-bold mb-2">Contact Us</h1>
          <span className="flex items-center gap-2">
            <CiLocationOn className="text-orange-500" />
            Tamwe, Kamahtan Street, Myit Thar Nyount
          </span>
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-orange-500" />
            09-425212523
          </span>
          <span className="flex items-center gap-2">
            <MdMarkEmailRead className="text-orange-500" />
            thatzinmin667@gmail.com
          </span>
        </div>
      </div>
      {/* Copyright  */}
      <div className="border-t my-5 py-5 flex gap-3 justify-center">
        Copyright &copy; <span className="text-orange-500">code2lab.com</span>
        by ThantZinMin
      </div>
    </div>
  );
};

export default Footer;
