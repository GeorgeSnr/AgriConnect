"use client";
import React, { useState } from "react";
import { PackageIcon, ShoppingCartIcon, Leaf, Droplet } from "lucide-react";
import Image from "next/image";

/* ===========================
      CONSUMER PRODUCT DATA
=========================== */

interface ProductItem {
  name: string;
  price: string;
  market: string;
  region: string;
  image: string;
}

interface ProductCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  gradient: string;
  items: ProductItem[];
}

/* Ugandan consumer-ready products */
const productCategories: ProductCategory[] = [
  {
    id: "staples",
    name: "Staples & Tubers",
    icon: PackageIcon,
    gradient: "from-green-400 to-emerald-600",
    items: [
      { name: "Matooke (per bunch)", price: "UGX 25,000 – 35,000", market: "Nakasero, Kalerwe", region: "Central", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600" },
      { name: "Irish Potatoes (100kg)", price: "UGX 90,000 – 110,000", market: "Owino, Mbale", region: "Eastern & Central", image: "https://images.unsplash.com/photo-1606755962779-32a7d237f70b?w=600" },
      { name: "Sweet Potatoes (kg)", price: "UGX 1,500 – 2,500", market: "Kalerwe, Nakasero", region: "Central", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600" },
      { name: "Cassava (100kg)", price: "UGX 70,000 – 90,000", market: "Mbale, Masaka", region: "Eastern & Central", image: "https://images.unsplash.com/photo-1592928305118-2f1a8b3b4f58?w=600" },
      { name: "Beans (per 50kg bag)", price: "UGX 140,000 – 160,000", market: "Nakasero, Owino", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1605478476965-9e820a4264bc?w=600" }
    ]
  },
  {
    id: "fruits",
    name: "Fruits & Vegetables",
    icon: Leaf,
    gradient: "from-yellow-400 to-amber-600",
    items: [
      { name: "Tomatoes (kg)", price: "UGX 3,000 – 5,000", market: "Owino, Kalerwe", region: "Central", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600" },
      { name: "Onions (kg)", price: "UGX 4,000 – 6,000", market: "Nakasero, Mbale", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1593529467223-7c7d3a70b0a1?w=600" },
      { name: "Carrots (kg)", price: "UGX 3,500 – 5,000", market: "Masaka, Mbale", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1617196036333-ff09707e02ec?w=600" },
      { name: "Bananas (per dozen)", price: "UGX 5,000 – 7,000", market: "Nakasero, Kalerwe", region: "Central", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e38e?w=600" },
      { name: "Mangoes (kg)", price: "UGX 4,000 – 6,500", market: "Owino, Mbale", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1593011958374-d14ec4b9c164?w=600" }
    ]
  },
  {
    id: "poultry",
    name: "Poultry & Meat",
    icon: ShoppingCartIcon,
    gradient: "from-red-400 to-orange-600",
    items: [
      { name: "Local Chicken (per bird)", price: "UGX 20,000 – 30,000", market: "Owino, Kalerwe", region: "Central", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600" },
      { name: "Turkey (per bird)", price: "UGX 80,000 – 120,000", market: "Nakasero, Mbale", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1603386329600-68b0a20d4b0e?w=600" },
      { name: "Eggs (tray of 30)", price: "UGX 12,000 – 15,000", market: "Kalerwe, Owino", region: "Central", image: "https://images.unsplash.com/photo-1588167059843-07b6fa1b2207?w=600" },
      { name: "Local Beef (kg)", price: "UGX 15,000 – 18,000", market: "Masaka, Mbale", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1603009382946-3e5e3a9ed68a?w=600" },
      { name: "Goat Meat (kg)", price: "UGX 20,000 – 25,000", market: "Owino, Nakasero", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1598514983121-2d92f798b62e?w=600" }
    ]
  },
  {
    id: "packaged",
    name: "Packaged & Processed Foods",
    icon: Droplet,
    gradient: "from-blue-400 to-cyan-600",
    items: [
      { name: "Maize Flour (1kg)", price: "UGX 4,000 – 5,000", market: "Nakasero, Owino", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1580910051074-d02c0b230c86?w=600" },
      { name: "Cooking Oil (1L)", price: "UGX 8,000 – 12,000", market: "Owino, Kalerwe", region: "Central", image: "https://images.unsplash.com/photo-1598514982971-4d0e7e04ed18?w=600" },
      { name: "Sugar (1kg)", price: "UGX 4,000 – 5,500", market: "Nakasero, Masaka", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1598514983030-3d67d36f1b32?w=600" },
      { name: "Milk (1L, pasteurized)", price: "UGX 3,500 – 5,000", market: "Owino, Kalerwe", region: "Central", image: "https://images.unsplash.com/photo-1598514983035-9b87c09d1b61?w=600" },
      { name: "Coffee (Roasted Beans, 250g)", price: "UGX 15,000 – 18,000", market: "Nakasero, Mbale", region: "Central & Eastern", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600" }
    ]
  }
];

/* ===========================
      PAGE COMPONENT
=========================== */

export default function ConsumerProducts() {
  const [activeTab, setActiveTab] = useState("all");

  const allItems = productCategories.flatMap(c => c.items);
  const currentItems = activeTab === "all"
    ? allItems
    : productCategories.find(c => c.id === activeTab)?.items || [];

  return (
    <div className="bg-green-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="text-center py-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Agro-Consumer Products Across Uganda
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse fresh produce, meat, poultry, and packaged foods from verified markets like Nakasero, Owino, Kalerwe, Mbale, and more.
          </p>
        </section>

        {/* TABS */}
        <div className="flex overflow-x-auto pb-4 justify-center">
  <div className="inline-flex gap-2 bg-green-50 p-1.5 rounded-full">
    {/* All Products */}
    <button
      onClick={() => setActiveTab("all")}
      className={`flex cursor-pointer items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
        activeTab === "all"
          ? "bg-white shadow ring-1 ring-gray-900/10 text-gray-900"
          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
      }`}
    >
      All Products
    </button>

    {/* Category Tabs */}
    {productCategories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => setActiveTab(cat.id)}
        className={`flex cursor-pointer items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
          activeTab === cat.id
            ? "bg-white shadow ring-1 ring-gray-900/10 text-gray-900"
            : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
        }`}
      >
        <cat.icon
          className={`mr-1.5 h-4 w-4 ${
            activeTab === cat.id ? "text-teal-600" : "text-gray-400"
          }`}
        />
        {cat.name}
      </button>
    ))}
  </div>
</div>

        {/* PRODUCT GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-teal-600 font-bold">{item.price}</p>
                <p className="mt-2 text-gray-600 text-sm">Market: <span className="font-medium">{item.market}</span></p>
                <p className="text-gray-600 text-sm">Region: <span className="font-medium">{item.region}</span></p>
                <button className={`mt-4 w-full text-white py-2 rounded-lg bg-linear-to from-teal-400 to-emerald-600 hover:opacity-90`}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
