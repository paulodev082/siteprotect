import React from "react";

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-4">
      {["Todos", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full border transition ${
            selected === cat
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
