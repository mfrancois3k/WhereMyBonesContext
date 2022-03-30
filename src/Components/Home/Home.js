import React from "react";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import "./Home.scss";
import PlaceHolderContext from "../C";
import { useContext } from "react";

const Home = () => {
  const { data } = useContext(PlaceHolderContext);
  const navigate = useNavigate();
  console.log(data);

  // const handleClick = () => { navigate("/",)
  return (
    <>
      <button onClick={() => navigate(`/services`)}> services test</button>
      <button onClick={() => navigate(`/aboutMe`)}> about me test</button>
      <h1>testing my knowledge Home page </h1>

      <div className="row center">
        <div className="col col span-6">its center</div>
      </div>
      {/* <div className="links"> */}
      {/* <nav>
          <NavLink to="/aboutMe"> About </NavLink>
          <NavLink to="/services"> Profile </NavLink>
        </nav>
      </div> */}
      {/* <Outlet /> */}
    </>
  );
};

export default Home;
