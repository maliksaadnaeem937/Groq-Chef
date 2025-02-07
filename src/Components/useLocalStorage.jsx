import React, { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage() {
  const [itemsList, setItemsList] = useState([]);

  const getItems = () => {
    const list = localStorage.getItem("IngredientsList");
    if (list === null || JSON.parse(list).length === 0) {
      setItemsList([]);
    } else {
      setItemsList(JSON.parse(list));
    }
  };
  const addItem = (item) => {
    const newArray = [item, ...itemsList];
    localStorage.setItem("IngredientsList", JSON.stringify(newArray));
    setItemsList(newArray);
  };

  const deleteItem = (index) => {
    const newArray = itemsList.filter((_, i) => i !== index);
    if (newArray.length === 0) {
      localStorage.removeItem("IngredientsList");
      setItemsList(newArray);
      return;
    }
    localStorage.setItem("IngredientsList", JSON.stringify(newArray));
    setItemsList(newArray);
  };

  return { getItems, addItem, itemsList, deleteItem };
}
