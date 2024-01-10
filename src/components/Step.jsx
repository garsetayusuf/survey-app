import React from "react";

const Step = ({ active, completed }) => {
  return (
    <div className="flex items-center m-[2px] justify-center">
      <div
        className={`${
          active ? "bg-blue-500" : completed ? "bg-[#6A59A6]" : "bg-gray-200"
        } max-sm:w-[20px] max-lg:w-[50px] max-2xl:w-[50px] w-[75px] h-1 rounded-lg mx-1`}
      />
    </div>
  );
};

export default Step;
