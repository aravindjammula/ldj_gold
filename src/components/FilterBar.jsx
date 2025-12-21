import React from 'react';

const FilterBar = ({ activeCategory, setCategory }) => {
  const categories = ["All", "Gold", "Diamond", "Vintage"];

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-6 py-2 rounded-full border transition-all duration-300 ${
            activeCategory === cat
              ? "bg-gray-900 text-white border-gray-900 shadow-lg"
              : "bg-white text-gray-600 border-gray-300 hover:border-yellow-600 hover:text-yellow-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;