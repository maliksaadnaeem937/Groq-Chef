import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";
import GetRecipie from "./GetRecipie";
import useGroqAPI from "./useGroqAPI";
import ShowRecipie from "./ShowRecipie";
import LoadingSpinner from "./Loading.jsx";
import Welcome from "./Welcome.jsx";
import useLocalStorage from "./useLocalStorage.jsx";
export default function Form() {
  const { fetchData, data, loading, error } = useGroqAPI();

  const { getItems, addItem, itemsList, deleteItem } = useLocalStorage();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").trim();

    if (newIngredient) {
      addItem(newIngredient);
      event.currentTarget.reset();
    }
  };

  const getRecipie = async () => {
    fetchData(itemsList.join(", "));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <main className="py-10 flex flex-col items-center">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Add Ingredient
        </h2>
        <form
          className="flex flex-col md:flex-row gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="Enter ingredient"
            name="ingredient"
            className="border p-3 rounded-md flex-1 outline-none focus:ring-2 focus:ring-orange-400 w-full md:w-auto"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-5 py-3 rounded-md hover:bg-orange-600 transition w-full md:w-auto"
          >
            Add
          </button>
        </form>
      </div>
      <div className="mt-6 w-full max-w-lg">
        <Ingredients itemsList={itemsList} deleteItem={deleteItem} />
      </div>

      {!itemsList || itemsList.length === 0 ? <Welcome /> : <></>}
      {itemsList && itemsList.length >= 3 ? (
        <div className="mt-6">
          <GetRecipie getRecipie={getRecipie} />
        </div>
      ) : (
        <></>
      )}

      {loading && <LoadingSpinner></LoadingSpinner>}
      {error && <div>{error}</div>}
      {data && !loading && itemsList.length >= 3 ? (
        <ShowRecipie data={data}></ShowRecipie>
      ) : (
        <></>
      )}
    </main>
  );
}
