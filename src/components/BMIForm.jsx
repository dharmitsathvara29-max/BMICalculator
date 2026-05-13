import { useState } from "react";
import BMIResult from "./BMIResult";
function BMIForm() {
  const [unit, setUnit] = useState("cm");

  const [height, setHeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const [weight, setWeight] = useState("");

  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

   const calculateBMI = () => {
    if (!weight) {
      alert("Please enter weight");
      return;
    }
    let heightInMeter;

    // CM Calculation
    if (unit === "cm") {

      if (!height || height <= 0) {
        alert("Please enter valid height");
        return;
      }

      heightInMeter = height / 100;
    }

    else {

      if (!feet || feet <= 0) {
        alert("Please enter valid feet");
        return;
      }

      const totalCm =
        (parseFloat(feet) * 30.48) +
        (parseFloat(inches || 0) * 2.54);

      heightInMeter = totalCm / 100;
    }
     const bmiValue =
      weight / (heightInMeter * heightInMeter);

    const finalBMI = bmiValue.toFixed(2);
    setBmi(finalBMI);
    if (finalBMI < 18.5) {
      setCategory("Underweight");
    }
     else if (finalBMI < 25) {
      setCategory("Normal Weight");
    }
     else if (finalBMI < 30) {
      setCategory("Overweight");
    }
     else {
      setCategory("Obese");
    }

  };
   const resetData = () => {

    setHeight("");
    setFeet("");
    setInches("");
    setWeight("");
    setBmi("");
    setCategory("");
  };
    const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calculateBMI();
    }
   };
    return (
     <div className="bg-gradient-to-r from-white to-gray-200 min-h-screen flex items-center justify-center">
     <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-[90%] max-w-md transition-all duration-300">
     <h1 className="text-3xl font-bold text-center mb-6">
          BMI Calculator
        </h1>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setUnit("cm")}
            className={`px-4 py-2 rounded-lg transition ${
              unit === "cm"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            CM
          </button>

          <button
            onClick={() => setUnit("ft")}
            className={`px-4 py-2 rounded-lg transition ${
              unit === "ft"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            FT / IN
          </button>

        </div>
   {/* Height Input */}
        {unit === "cm" ? (
           <input
            type="number"
            placeholder="Enter Height (cm)"
            value={height}
            min="1"
            onChange={(e) => setHeight(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

        ) : (

          <div className="flex gap-4 mb-4">
            <input
              type="number"
              placeholder="Feet"
              min="0"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-1/2 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              placeholder="Inches"
              min="0"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-1/2 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>

        )}


        <input
          type="number"
          placeholder="Enter Weight (kg)"
          value={weight}
          min="1"
          onChange={(e) => setWeight(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-purple-400"
        />
         {/* Buttons */}
        <div className="flex justify-between">

          <button
            onClick={calculateBMI}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Calculate
          </button>
           <button
            onClick={resetData}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Reset
          </button>
         </div>
        {/* Result */}
        {bmi && (
          <BMIResult
            bmi={bmi}
            category={category}
          />
        )}

      </div>

    </div>

  );
}
export default BMIForm;