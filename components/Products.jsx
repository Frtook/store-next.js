"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
let data = null;
// icons
import { GoStarFill } from "react-icons/go";

export default function PorductsPage() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://fakestoreapi.com/products/");
      data = await res.json();
      setItems(data);
    }
    getData();
  }, []);

  function filterByCategory(category) {
    if (category === "all") {
      setItems(data);
      return;
    }
    setItems([...data].filter((item) => category === item.category));
  }
  function filterBySort(sort) {
    setItems(
      [...items].sort((a, b) => {
        if (sort === "title") {
          return a.title.charCodeAt() - b.title.charCodeAt();
        } else if (sort === "price") {
          return a.price - b.price;
        } else if (sort === "rating") {
          return b.rating.rate - a.rating.rate;
        }
      })
    );
  }

  return (
    <>
      <div>
        <div className="flex gap-2">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              filterByCategory(e.target.value);
            }}
            className="p-2 rounded-lg focus:outline-none"
          >
            <option disabled value="">
              Category
            </option>
            <option value="all">All</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men&apos;s clothing</option>
            <option value="women's clothing">Women&apos;s clothing</option>
          </select>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              filterBySort(e.target.value);
            }}
            className="p-2 rounded-lg focus:outline-none"
          >
            <option value="" disabled>
              Sort By
            </option>
            <option value="title">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items && items.map((p) => <Items key={p.id} product={p} />)}
          {!items && (
            <div className="flex flex-col gap-2 p-4 bg-white animate-pulse rounded-2xl">
              <div className="self-center block w-32 h-32 bg-gray-200 rounded-2xl"></div>
              <p className="w-full h-10 bg-gray-300 rounded-3xl"></p>
              <p className="w-1/2 h-10 bg-gray-300 rounded-3xl"></p>
              <p className="w-full h-10 bg-gray-300 rounded-3xl"></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Items({ product }) {
  return (
    <Link
      // https://fakestoreapi.com/products/
      href={`http://localhost:3000/` + product.id}
      className="flex flex-col justify-between gap-2 p-4 bg-white shadow-2xl rounded-2xl"
    >
      <Image
        className="self-center w-32 bg-gray-400"
        width={128}
        height={128}
        src={product.image}
        alt=""
      />
      <p className="text-xl line-clamp-1">{product.title}</p>
      <div className="flex justify-between">
        <p className="font-bold">${product.price}</p>
        <span className="flex items-center gap-2">
          <GoStarFill className="text-orange-500" />
          <p>{product.rating.rate}</p>
        </span>
      </div>
    </Link>
  );
}
