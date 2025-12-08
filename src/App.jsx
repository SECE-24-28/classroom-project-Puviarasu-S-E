import React from "react";
import { Routes, Route } from "react-router-dom";

import AboutSection from "./AboutSection";
import PostionComponent from "./positioning/position-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import ImpactAtGlance from "./ImpactAtGlance/ImpactAtGlance";
import OurPosition from "./OurPromise/OurPromise";
import FlexWrap from "./FlexWrap/flex-wrap-componenet";
import ExamplePositionComponent from "./PositionExample/ExamplePositionComponent";
import PropsPractice from "./props-practice/props-practice";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/position" element={<PostionComponent />} />
        <Route path="/trusted-by" element={<TrustedbyComponent />} />
        <Route path="/impact" element={<ImpactAtGlance />} />
        <Route path="/our-promise" element={<OurPosition />} />
        <Route path="/flex-wrap" element={<FlexWrap />} />
        <Route path="/example" element={<ExamplePositionComponent />} />

        <Route
          path="/props-arun"
          element={<PropsPractice name="Arun" mobile="14234423243" />}
        />
        <Route
          path="/props-sasi"
          element={<PropsPractice name="Sasi" mobile="232332231231" />}
        />
      </Routes>
    </div>
  );
}

export default App;
