import { useEffect, useState } from "react";
import axio from "axios";
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
    const location=useLocation();
  return (
    <div className="homepage">
        <h1>Hello {} and welcome </h1>
    </div>
  )
};

export default Home;
