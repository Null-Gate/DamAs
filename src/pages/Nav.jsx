import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
const Nav = () => {
  const navData = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Category",
      path: "/cate",
    },
    {
      id: 3,
      title: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      title: "About Us",
      path: "/about-us",
    },
  ];

  const loc = useLocation();
  const [show, setShow] = useState(false);

  return (
    <div className="flex mb-5 w-full px-5 justify-between xl:justify-around h-[10vh] items-center font-bold shadow-md">
      <div>LOGO</div>
      {/* nav item */}
      <div className={`w-1/3 xl:flex justify-around hidden`}>
        {navData?.map((nav) => {
          return (
            <NavLink className={`overflow-hidden`} key={nav?.id} to={nav?.path}>
              {nav?.title}
              <motion.hr
                initial={{ scaleX: 0 }}
                animate={{ scaleX: loc?.pathname === nav?.path ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-3/5 h-[3px] bg-orange-500 rounded origin-left"
              />
            </NavLink>
          );
        })}
      </div>
      <button className="btn hidden">Login</button>

      {/* for Mobile  */}
      <div
        onClick={() => setShow(!show)}
        className="xl:hidden text-2xl bg-slate-400 text-white rounded-full p-2"
      >
        {show ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <IoClose />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <RxHamburgerMenu />
          </motion.div>
        )}
      </div>

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-[100px] z-10 gap-2 text-center font-normal bg-white rounded absolute right-2 top-[11vh]"
        >
          {navData?.map((el) => {
            return (
              <div key={el.title}>
                <NavLink onClick={() => setShow(!show)} to={el.path}>
                  {el.title}
                </NavLink>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Nav;
