import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Signup = ({ onLoginClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data array:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-5 h-full justify-around"
    >
      <div className="flex flex-col">
        <p className="head">Signup</p>
        <hr className="head-line" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="relative">
          <label className="input-label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative">
          <label className="input-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="input"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <div className="flex gap-3 text-sm">
        <span>Already have an account?</span>
        <span
          onClick={onLoginClick}
          className=" underline cursor-pointer text-[rgb(232,172,50)] font-semibold"
        >
          Sign-In
        </span>
      </div>
    </motion.div>
  );
};

export default Signup;
