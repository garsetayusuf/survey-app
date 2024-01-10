import React from "react";
import {
  clearLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { toTitleCase } from "../../utils/titlecase";

const Result = () => {
  const data = getLocalStorage("selectedOptions");
  const formData = getLocalStorage("formData");
  const navigate = useNavigate();

  const handlleRestart = () => {
    navigate("/survey", { replace: true });
    removeLocalStorage("currentStep");
    removeLocalStorage("selectedOptions");
    removeLocalStorage("duration");
  };

  const handlleHomepage = () => {
    clearLocalStorage();
    navigate("/", { replace: true });
  };

  return (
    <div className="p-5 max-sm:w-full min-2xl:h-full md:w-full h-svh bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-300 flex items-center justify-center flex-col gap-5">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        Hasil Survey {formData && toTitleCase(JSON.parse(formData).nama)}
      </h1>
      <table style={{ border: "1px solid #000", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #000",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Soal
            </th>
            <th
              style={{
                border: "1px solid #000",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Jawaban
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.keys(JSON.parse(data)).map((key, index) => {
              return (
                <tr key={index}>
                  <td
                    style={{
                      border: "1px solid #000",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    {key}
                  </td>
                  <td
                    style={{
                      border: "1px solid #000",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    {JSON.parse(data)[key]
                      ? JSON.parse(data)[key]
                      : "Tidak di jawab"}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-4">
        <button
          onClick={handlleRestart}
          className="min-w-[200px] h-max p-2 inline-flex items-center justify-center rounded-lg text-sm font-medium text-white bg-[#6A59A6] cursor-pointer"
        >
          Ulangi
        </button>
        <button
          onClick={handlleHomepage}
          className="min-w-[200px] h-max p-2 inline-flex items-center justify-center rounded-lg text-sm font-medium text-white bg-[#6A59A6] cursor-pointer"
        >
          Halaman Awal
        </button>
      </div>
    </div>
  );
};

export default Result;
