import DeleteButton from "./DeleteButton";
import React from "react";

export default function Ingredients({ itemsList, deleteItem }) {
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
        📝 Ingredients
      </h2>
      {itemsList.length > 0 ? (
        <ul className="space-y-3">
          {itemsList.map((ele, index) => (
            <div
              key={index} 
              className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm hover:bg-gray-200 transition"
            >
              <li className="text-gray-800 text-lg font-medium capitalize">
                {ele}
              </li>
              <DeleteButton index={index} deleteItem={deleteItem} />
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center mt-3">No ingredients added.</p>
      )}
    </div>
  );
}
