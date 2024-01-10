import { Route, Routes } from "react-router-dom";
import Register from "./components/register";
import Survey from "./components/survey";
import Result from "./components/result";

export default function App() {
  return (
    <div className="bg-white flex justify-center items-center h-svh max-2xl:h-full">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}
