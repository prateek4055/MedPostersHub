// src/components/CategoryFilter.tsx
import React from "react";
import { posters } from "../data/posters"; // relative import from components -> data

// compute categories from posters so we don't rely on an exported `categories` symbol
const categories: string[] = Array.from(new Set(posters.map((p) => p.category))).sort();

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* optional "All" button */}
      <button
        key="all"
        onClick={() => onSelect("")}
        className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
          selected === ""
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            selected === category
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
