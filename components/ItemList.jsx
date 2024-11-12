"use client";

import { useState } from "react";

export default function ItemList() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  return (
    <div className="flex gap-2">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded-lg focus:outline-none"
      >
        <option disabled value="">
          Category
        </option>
        <option value="All">All</option>
        <option value="Jewels">Jewels</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothse">Clothse</option>
      </select>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 rounded-lg focus:outline-none"
      >
        <option value="" disabled>
          Sort By
        </option>
        <option value="Name">Name</option>
        <option value="Price">Price</option>
        <option value="Rating">Rating</option>
      </select>
    </div>
  );
}
