import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-slate-900 text-blue-200 text-center py-6 shadow-md">
      <h1 className="text-3xl font-bold font-mono tracking-wide drop-shadow-lg">
        🍽️ Chef Groq
      </h1>
      <p className="text-sm text-blue-300 mt-1">Delicious recipes at your fingertips</p>
    </header>
  );
}
