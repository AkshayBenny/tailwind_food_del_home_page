import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Main from "../../Components/Main/Main";

function Home() {
  return (
    <div className="text-gray-600 bg-gray-50 md:grid md:grid-cols-3">
      <Navbar />
      <Main />
    </div>
  );
}

export default Home;
