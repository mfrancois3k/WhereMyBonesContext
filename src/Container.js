// import { NavLink, Home, Services, AboutMe } from "./Components";
import { Route, Routes } from "react-router-dom";
import { Home, Services, AboutMe } from "./Components";
import { PlaceHolderProvider } from "./Context/PlaceHolderContext";

const Container = () => {
  return (
    <div>
      <PlaceHolderProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      </PlaceHolderProvider>
      {/* <PreLoader /> */}
    </div>
  );
};

export default Container;
