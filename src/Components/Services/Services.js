import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.scss";

const Services = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* <button onClick={() => navigate(`/aboutMe`)}>
        {" "}
        im sening u to about me
      </button> */}
      <p>testing my knowledge Services page</p>
    </>
  );
};

export default Services;
