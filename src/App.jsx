import React from "react";
import Layout from "./utils/Layout";
import Paths from "./routes/Paths";

const App = () => {
  return (
    <div className="text-gray-800">
      <Layout>
        <Paths />
      </Layout>
    </div>
  );
};

export default App;
