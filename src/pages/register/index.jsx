import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLocalStorage, getLocalStorage } from "../../utils/localStorage";

const Register = () => {
  const navigate = useNavigate();
  const data = getLocalStorage("formData");
  const [formData, setFormData] = useState({
    nama: null,
    email: null,
  });

  useEffect(() => {
    if (data) {
      navigate("/survey", { replace: true });
    }
  }, [data, navigate]);

  const handleInputChange = (e) => {
    let { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    if (!formData.nama || !formData.email) {
      console.log("Validation Error: Please fill required fields");
      return;
    }

    createLocalStorage("formData", JSON.stringify(formData));
    navigate("/survey", { replace: true });
  };

  return (
    <div className="w-full h-svh bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-300">
      <div className="h-[100svh] flex justify-center items-center px-5">
        <form className="w-[500px] rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-3xl text-center">
              Selamat datang
            </h3>
            <p className="text-sm text-center text-gray-700">
              Isi data diri sebelum melakukan survey
            </p>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="nama"
              >
                Nama
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="nama"
                placeholder="Masukan nama anda"
                required={true}
                type="text"
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="fulan@gmail.com"
                required={true}
                type="email"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="items-center p-6 flex justify-center">
            <button
              type="submit"
              className="min-w-[200px] p-2 inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-[#6A59A6]"
              onClick={handleSubmit}
            >
              Mulai
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
