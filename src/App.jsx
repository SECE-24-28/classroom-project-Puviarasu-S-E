import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import AboutSection from "./AboutSection";
import PostionComponent from "./positioning/position-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import ImpactAtGlance from "./ImpactAtGlance/ImpactAtGlance";
import OurPromise from "./OurPromise/OurPromise";
import FlexWrap from "./FlexWrap/flex-wrap-componenet";
import ExamplePositionComponent from "./PositionExample/ExamplePositionComponent";
import PropsPractice from "./props-practice/props-practice";
import UseStateComponent from "./use-state-component/use-state-component";
import FourOFourComponent from "./404-component/404-component";
import UsestateformComponent from "./user-state-form/user-state-form-component";
import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-component";

const App = () => {
  const userProps = { name: "Arun", mobile: "14234423243" };

  return (
    <div>
      <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/position" style={{ margin: "0 10px" }}>
          Position
        </Link>
        <Link to="/trusted-by" style={{ margin: "0 10px" }}>
          Trusted By
        </Link>
        <Link to="/impact" style={{ margin: "0 10px" }}>
          Impact
        </Link>
        <Link to="/our-promise" style={{ margin: "0 10px" }}>
          Our Promise
        </Link>
        <Link to="/flex-wrap" style={{ margin: "0 10px" }}>
          Flex Wrap
        </Link>
        <Link to="/example" style={{ margin: "0 10px" }}>
          Example
        </Link>
        <Link to="/use-state" style={{ margin: "0 10px" }}>
          Counter
        </Link>
        <Link to="/props" style={{ margin: "0 10px" }}>
          Props
        </Link>
        <Link to="/use-state-form" style={{ margin: "0 10px" }}>
          Form
        </Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/position" element={<PostionComponent />} />
          <Route path="/trusted-by" element={<TrustedbyComponent />} />
          <Route path="/impact" element={<ImpactAtGlance />} />
          <Route path="/our-promise" element={<OurPromise />} />
          <Route path="/flex-wrap" element={<FlexWrap />} />
          <Route path="/example" element={<ExamplePositionComponent />} />
          <Route path="/use-state" element={<UseStateComponent />} />
          <Route path="/props" element={<PropsPractice {...userProps} />} />

          {/* Route for form component */}
          <Route path="/use-state-form" element={<UsestateformComponent />} />

          <Route path="*" element={<FourOFourComponent />} />
          <Route path="/addition-operation" element={<AdditionOperationComponent />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
