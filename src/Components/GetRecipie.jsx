import React, { useState } from "react";
import useGroqAPI from "./useGroqAPI";

export default function GetRecipie({ getRecipie }) {



  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Ready to Get a Recipe?
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Generate a recipe from your list of ingredients and create delicious
          meals with ease!
        </p>
        <button
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={getRecipie}
        >
          Get Recipe
        </button>
      </div>
    </>
  );
}
