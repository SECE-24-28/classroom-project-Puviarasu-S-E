import React from "react";
import "./OurPromise.css";

const OurPromise = () => {
  return (
    <>
      <div className="promise-container">
        <h2 className="Title">Our Promise</h2>
        <p className="para">
          As part of our high-quality service, we'd like to offer something extra too.
        </p>
      </div>

      <div className="element">
        {/* Card 1 */}
        <div className="element-item">
          <h5>Top Code Quality</h5>
          <p>
            Our commitment goes beyond mere code – it encompasses providing
            solutions. You receive W3C fully compliant markup, without any
            compromise on quality.
          </p>
        </div>

        {/* Card 2 */}
        <div className="element-item1">
          <h5>Responsive</h5>
          <p>
            We understand the value of a positive attitude, timely responsiveness,
            and adaptability. We're dedicated to attentively listening and leveraging
            our utmost capabilities to serve you.
          </p>
        </div>

        {/* Card 3 */}
        <div className="element-item2">
          <h5>Rockstar Team</h5>
          <p>
            Our expertise is our unique selling proposition. You'll have access to an
            all-star team of experienced professionals fully dedicated to serving you,
            armed with coding skills that are truly exceptional.
          </p>
        </div>

        {/* Card 4 */}
        <div className="element-item3">
          <h5>Fast Turn-arounds</h5>
          <p>
            The importance of speed is on par with quality for us. We are swift,
            nimble, and capable of providing high-quality code within a timeframe
            that suits your preferences.
          </p>
        </div>

        {/* Card 5 */}
        <div className="element-item4">
          <h5>Life-time support</h5>
          <p>
            Our commitment to code quality is exemplified by our enduring support. If
            any bugs happen to emerge in the future, feel free to reach out to us for
            assistance.
          </p>
        </div>

        {/* Card 6 */}
        <div className="element-item5">
          <h5>Secured Agreement</h5>
          <p>
            The creative work you receive is entirely your own, and we unequivocally
            respect that. We assure you of our commitment and readiness to formalize
            this with a Non-Disclosure Agreement (NDA).
          </p>
        </div>
      </div>
    </>
  );
};

export default OurPromise;
