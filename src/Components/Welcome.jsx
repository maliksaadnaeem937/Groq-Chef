import React from "react";

export default function Welcome() {
  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Welcome!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Please add at least{" "}
        <span className="font-semibold">three ingredients</span> to make a
        recipe.
      </p>
      <p className="text-md text-gray-500 mt-4">
        Get creative and start cooking! 🍽️
      </p>
    </div>
  );
}
