import useLocalStorage from "./useLocalStorage";

export default function DeleteButton({ index, deleteItem }) {
  return (
    <div className="flex justify-center">
      <button
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        onClick={() => deleteItem(index)}
      >
        Delete Item
      </button>
    </div>
  );
}
