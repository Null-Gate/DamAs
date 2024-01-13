import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cate from "../pages/Cate";
import Blog from "../pages/Blog";
import Aboutus from "../pages/Aboutus";
import Auth from "../pages/auth/Auth";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/cate" element={<Cate />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about-us" element={<Aboutus />} /> */}
    </Routes>
  );
};

export default Paths;
