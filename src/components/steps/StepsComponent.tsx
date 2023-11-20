import React from "react";
//styles
import "./index.scss";

const StepsComponent = (props: any) => {
  const { steps, step } = props;
  return (
    <div className="steps__components ">
      {/* map here */}

      {steps.length >= 1 && (
        <div className="step__comp">
          {/* line */}
          <div className="step__line active"></div>
          {/* circle and number */}
          <div className="step__circle circle__active">
            <p>1</p>
          </div>
        </div>
      )}

      {steps.length > 1 &&
        steps.map(
          (curr_step: number, index: number) =>
            index > 0 &&
            (index + 1 <= step ? (
              <div key={index} className="step__comp">
                {/* line */}
                <div className="step__line active"></div>
                {/* circle and number */}
                <div className="step__circle circle__active">
                  <p>{curr_step}</p>
                </div>
              </div>
            ) : (
              <div key={index} className="step__comp">
                {/* line */}
                <div className="step__line "></div>
                {/* circle and number */}
                <div className="step__circle">
                  <p>{curr_step}</p>
                </div>
              </div>
            ))
        )}

      <div className="step__line"></div>
    </div>
  );
};

export default StepsComponent;
