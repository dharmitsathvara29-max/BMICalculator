
function BMIResult({ bmi, category }) {

  const getCategoryColor = () => {

    if (category === "Underweight") {
      return "text-blue-500";
    }

    else if (category === "Normal Weight") {
      return "text-green-500";
    }

    else if (category === "Overweight") {
      return "text-yellow-500";
    }

    else {
      return "text-red-500";
    }
  };

  const getEmoji = () => {

    if (category === "Underweight") {
      return "🥗";
    }

    else if (category === "Normal Weight") {
      return "💪";
    }

    else if (category === "Overweight") {
      return "⚠️";
    }

    else {
      return "🚨";
    }
  };

  const getHealthTip = () => {

    if (category === "Underweight") {
      return "Eat a balanced nutritious diet.";
    }

    else if (category === "Normal Weight") {
      return "Great! Maintain your healthy lifestyle.";
    }

    else if (category === "Overweight") {
      return "Try regular exercise and healthy eating.";
    }

    else {
      return "Consult a healthcare expert for guidance.";
    }
  };
const getProgressWidth = () => {

  const bmiValue = parseFloat(bmi);

  if (bmiValue >= 40) {
    return "100%";
  }

  return `${(bmiValue / 40) * 100}%`;
};
  return (
    <div className="mt-6 text-center bg-gray-100 p-4 rounded-xl">

      <h2 className="text-5xl font-extrabold text-black tracking-wide">
        BMI: {bmi}
      </h2>

      <p className="text-5xl mt-3">
        {getEmoji()}
      </p>

      <p className={`text-xl mt-2 font-semibold ${getCategoryColor()}`}>
        {category}
      </p>
     <p className="text-gray-600 mt-3">
     {getHealthTip()}
     </p>

<div className="mt-6">

  <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
     <div
      className={`h-full transition-all duration-1000 ${
        category === "Underweight"
          ? "bg-blue-500"
          : category === "Normal Weight"
          ? "bg-green-500"
          : category === "Overweight"
          ? "bg-yellow-500"
          : "bg-red-500"
      }`}
      style={{ width: getProgressWidth() }}
    ></div> 
 </div>

  <div className="flex justify-between text-xs text-black-300 mt-2">
    <span>Under</span>
    <span>Normal</span>
    <span>Over</span>
    <span>Obese</span>

  </div>

</div>
    </div>

  );
}

export default BMIResult;