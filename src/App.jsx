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
import UsestateformComponent from "./user-state-form/user-state-form-component";
import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-component";

import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectComponent from "./use-effect-practice/use-effect-practice-component";
import UseEffectComponent2 from "./use-effect-practice/use-effect-practice-component2";
import UseEffectComponent3 from "./use-effect-practice/use-effect-practice-component3";

import RegisterForm from "./Register-Form/RegisterForm";
import FourOFourComponent from "./404-component/404-component";

const App = () => {
  const userProps = { name: "Arun", mobile: "14234423243" };

  return (
    <div>
      {/* ================= NAVBAR ================== */}
      <nav
        style={{
          padding: "15px",
          backgroundColor: "#e9e9e9",
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
          fontSize: "17px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/position">Position</Link>
        <Link to="/trusted-by">Trusted By</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/our-promise">Our Promise</Link>
        <Link to="/flex-wrap">Flex Wrap</Link>
        <Link to="/example">Example</Link>

        {/* State & Props */}
        <Link to="/use-state">Counter</Link>
        <Link to="/props">Props</Link>
        <Link to="/use-state-form">Form</Link>
        <Link to="/addition-operation">Addition</Link>

        {/* API & Effects */}
        <Link to="/api-fetch">API Fetch</Link>
        <Link to="/use-effect-practice">UseEffect</Link>
        <Link to="/use-effect-practice2">UseEffect2</Link>
        <Link to="/use-effect-practice3">UseEffect3</Link>

        {/* Register */}
        <Link to="/register">Register</Link>
      </nav>

      {/* ================= ROUTES ================== */}
      <div style={{ padding: "20px" }}>
        <Routes>
          {/* Main Sections */}
          <Route path="/" element={<AboutSection />} />
          <Route path="/position" element={<PostionComponent />} />
          <Route path="/trusted-by" element={<TrustedbyComponent />} />
          <Route path="/impact" element={<ImpactAtGlance />} />
          <Route path="/our-promise" element={<OurPromise />} />
          <Route path="/flex-wrap" element={<FlexWrap />} />
          <Route path="/example" element={<ExamplePositionComponent />} />

          {/* Props & State */}
          <Route path="/use-state" element={<UseStateComponent />} />
          <Route path="/props" element={<PropsPractice {...userProps} />} />
          <Route path="/use-state-form" element={<UsestateformComponent />} />
          <Route
            path="/addition-operation"
            element={<AdditionOperationComponent />}
          />

          {/* Fetching & UseEffect */}
          <Route path="/api-fetch" element={<FetchApiComponent />} />
          <Route path="/use-effect-practice" element={<UseEffectComponent />} />
          <Route
            path="/use-effect-practice2"
            element={<UseEffectComponent2 />}
          />
          <Route
            path="/use-effect-practice3"
            element={<UseEffectComponent3 />}
          />

          {/* Register Form */}
          <Route path="/register" element={<RegisterForm />} />

          {/* 404 Page */}
          <Route path="*" element={<FourOFourComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
