import { Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Survey from "./pages/survey";
import Result from "./pages/result";

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
