import React from "react";
import Step from "./Step";

const Stepper = ({ step }) => {
  const steps = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="flex w-full justify-center">
      {steps.map((stepNumber) => (
        <Step
          key={stepNumber}
          step={stepNumber}
          active={stepNumber === step}
          completed={stepNumber < step}
        />
      ))}
    </div>
  );
};

export default Stepper;
