/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Stepper from "../../components/stepper";
import { createLocalStorage, getLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Quiz from "../../components/quiz";

const Survey = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(() => {
    const storedStep = getLocalStorage("currentStep");
    return storedStep ? parseInt(storedStep, 10) : 1;
  });
  const duration = 10;
  const [counter, setCounter] = useState(() => {
    const storedCounter = getLocalStorage("counter");
    return storedCounter ? parseInt(storedCounter, 10) : duration;
  });
  let timeoutId;

  useEffect(() => {
    createLocalStorage("currentStep", currentStep);
    setExpirationTimer();
    setTimer();
  }, [counter, currentStep]);

  useEffect(() => {
    createLocalStorage("counter", counter.toString());
  }, [counter]);

  const setExpirationTimer = () => {
    createLocalStorage("duration", duration.toString());
  };

  const setTimer = () => {
    timeoutId =
      counter > 0 &&
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);

    if (counter <= 0) {
      handleNextStep();
      setCounter(duration);

      if (currentStep === 10 && counter === 0) {
        navigate("/result", { replace: true });
        setCounter(0);
      }
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 10));
  };

  return (
    <div className="p-5 max-sm:w-full max-2xl:h-full md:w-full h-svh bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-300 flex items-center flex-col gap-4">
      <Stepper step={currentStep}></Stepper>
      <div className="bg-white px-2 py-1 shadow-lg rounded-lg min-w-fit w-fit">
        Waktu: {moment.utc(counter * 1000).format("HH:mm:ss")}
      </div>
      <Quiz currentStep={currentStep} />
      <button
        onClick={() => {
          if (currentStep === 10) {
            clearTimeout(timeoutId);
            navigate("/result", { replace: true });
          } else {
            clearTimeout(timeoutId);
            handleNextStep();
            setCounter(duration);
          }
        }}
        type="submit"
        className="min-w-[200px] h-max p-2 inline-flex items-center justify-center rounded-lg text-sm font-medium text-white bg-[#6A59A6] cursor-pointer"
      >
        {currentStep === 10 ? "Selesai" : "Berikutnya"}
      </button>
    </div>
  );
};

export default Survey;
