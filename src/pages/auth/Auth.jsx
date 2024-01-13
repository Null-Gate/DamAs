import React, { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import { AnimatePresence, motion } from "framer-motion";

const Auth = () => {
  const [activeComponent, setActiveComponent] = useState("welcome");

  // Function to switch between components
  const switchComponent = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "welcome":
        return (
          <Welcome
            onLoginClick={() => switchComponent("sign-in")}
            onSignupClick={() => switchComponent("sign-up")}
          />
        );
      case "sign-in":
        return <Login onSignupClick={() => switchComponent("sign-up")} />;
      case "sign-up":
        return <Signup onLoginClick={() => switchComponent("sign-in")} />;
      default:
        return (
          <Welcome
            onLoginClick={() => switchComponent("sign-in")}
            onSignupClick={() => switchComponent("sign-up")}
          />
        );
    }
  };

  return (
    <div className="flex flex-col">
      {/* top decoration */}
      <motion.div
        initial={{ height: "60vh" }}
        animate={{
          height:
            activeComponent === "welcome"
              ? "60vh"
              : activeComponent === "sign-up"
              ? "20vh"
              : activeComponent === "sign-in"
              ? "40vh"
              : null,
          borderRadius:
            activeComponent === "welcome"
              ? "0 0 0 100px"
              : activeComponent === "sign-up"
              ? "0 0 0 50px"
              : activeComponent === "sign-in"
              ? "0 0 0 100px"
              : null,
        }}
        exit={{ height: "0vh" }}
        className={`bg-[rgb(232,172,50)] w-full rounded-es-[100px] text-white p-5`}
      >
        <h1 className="font-bold text-xl">Hello</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      </motion.div>
      {/* main content */}
      <motion.div
        initial={{ height: "60vh" }}
        animate={{
          height:
            activeComponent === "welcome"
              ? "40vh"
              : activeComponent === "sign-up"
              ? "80vh"
              : activeComponent === "sign-in"
              ? "60vh"
              : null,
        }}
        className={`w-full bg-[rgb(232,172,50)]`}
      >
        <motion.div
          animate={{
            borderRadius:
              activeComponent === "welcome"
                ? "0 100px 0 0"
                : activeComponent === "sign-up"
                ? "0 50px 0 0"
                : activeComponent === "sign-in"
                ? "0 100px 0 0"
                : null,
          }}
          className="w-full h-full bg-white rounded-se-[100px] flex flex-col items-center justify-between py-16"
        >
          <AnimatePresence>{renderActiveComponent()}</AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Auth;
