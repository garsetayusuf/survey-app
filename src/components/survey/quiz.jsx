import React, { useEffect, useState } from "react";
import { createLocalStorage, getLocalStorage } from "../../utils/localStorage";

const Quiz = ({ currentStep }) => {
  const questions = [
    {
      id: 1,
      question: "Mana yang merupakan hewan?",
      options: ["Kuda", "Apel", "Mangga"],
    },
    {
      id: 2,
      question: "Apa warna langit?",
      options: ["Biru", "Hijau", "Merah"],
    },
    {
      id: 3,
      question: "Berapakah hasil dari 5 + 3?",
      options: ["6", "8", "10"],
    },
    {
      id: 4,
      question: "Apa ibu kota Indonesia?",
      options: ["Jakarta", "Surabaya", "Bandung"],
    },
    {
      id: 5,
      question: "Apa singkatan dari HTML?",
      options: [
        "Hypertext Markup Language",
        "Hyperlink and Text Markup Language",
        "High-Level Text Markup Language",
      ],
    },
    {
      id: 6,
      question: "Siapakah presiden pertama Indonesia?",
      options: ["Soekarno", "Soeharto", "Jokowi"],
    },
    {
      id: 7,
      question: "Berapakah jumlah provinsi di Indonesia?",
      options: ["34", "33", "32"],
    },
    { id: 8, question: "Apa huruf pertama abjad?", options: ["A", "B", "C"] },
    {
      id: 9,
      question: "Apa nama benua terbesar?",
      options: ["Asia", "Eropa", "Afrika"],
    },
    { id: 10, question: "Berapakah 2 pangkat 3?", options: ["8", "6", "10"] },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const storedOptions = getLocalStorage("selectedOptions");
    if (storedOptions) {
      setSelectedOptions(JSON.parse(storedOptions));
    }
  }, []);

  useEffect(() => {
    const storedOptions = getLocalStorage("selectedOptions");
    const updatedOptions = {
      ...JSON.parse(storedOptions),
      [currentStep]: "",
    };

    setSelectedOptions(updatedOptions);
    createLocalStorage("selectedOptions", JSON.stringify(updatedOptions));
  }, [currentStep]);

  const handleChange = (questionId, selectedOption) => {
    const updatedOptions = {
      ...selectedOptions,
      [questionId]: selectedOption || "",
    };

    setSelectedOptions(updatedOptions);
    createLocalStorage("selectedOptions", JSON.stringify(updatedOptions));
  };

  return (
    <div className="w-[80%] h-full bg-white shadow-lg p-5 rounded-lg flex flex-col gap-3">
      {questions.map(
        (question) =>
          currentStep === question.id && (
            <form key={question.id} className="h-full flex flex-col gap-3">
              <div className="font-semibold text-3xl leading-9">{`Soal ${question.id}`}</div>
              <div className="text-3xl">{question.question}</div>
              {question.options.map((option, index) => (
                <div key={index} className="flex flex-col justify-center py-10">
                  <label>
                    <input
                      type="checkbox"
                      value={option}
                      className="mr-2 text-2xl w-4 h-4"
                      onChange={() => handleChange(question.id, option)}
                      checked={selectedOptions[question.id] === option}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </form>
          )
      )}
    </div>
  );
};

export default Quiz;
