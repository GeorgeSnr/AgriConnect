"use client";
import React, { useState } from "react";
import { TrendingUpIcon, PackageIcon, ShoppingCartIcon, DollarSignIcon, AlertCircleIcon } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

interface MarketCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  items: {
    product: string;
    unit: string;
    priceRange: string;
    trend: "up" | "down" | "stable";
    location: string;
  }[];
  image: string;
  gradient: string;
}

const marketCategories: MarketCategory[] = [
  {
    id: "crops",
    name: "Crop Market Prices",
    description: "Live wholesale & retail prices for maize, beans, coffee, bananas, and more across Uganda.",
    icon: PackageIcon,
    items: [
      { product: "Maize (White)", unit: "100kg bag", priceRange: "UGX 120,000 – 150,000", trend: "up", location: "Kampala, Gulu, Mbale" },
      { product: "Beans (Nambale)", unit: "100kg bag", priceRange: "UGX 280,000 – 320,000", trend: "stable", location: "Central & Western" },
      { product: "Coffee (Arabica)", unit: "kg", priceRange: "UGX 14,000 – 16,500", trend: "up", location: "Mt. Elgon, Rwenzori" },
      { product: "Matooke", unit: "bunch", priceRange: "UGX 25,000 – 35,000", trend: "down", location: "Mbarara, Masaka" },
      { product: "Irish Potatoes", unit: "100kg bag", priceRange: "UGX 90,000 – 110,000", trend: "stable", location: "Kabale, Kisoro" },
    ],
    image: "https://images.unsplash.com/photo-1752580114331-56ca9ab4dcfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TmFrYXNlcm8lMjBtYXJrZXQlMjBVZ2FuZGF8ZW58MHx8MHx8fDA%3D&w=1200&h=600",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: "livestock",
    name: "Livestock Market Prices",
    description: "Current prices for cattle, goats, poultry, and pigs in major livestock markets.",
    icon: ShoppingCartIcon,
    items: [
      { product: "Local Cow (Live)", unit: "head", priceRange: "UGX 1.2M – 1.8M", trend: "up", location: "Karamoja, Soroti" },
      { product: "Goat (Adult)", unit: "head", priceRange: "UGX 150,000 – 250,000", trend: "stable", location: "Teso, Acholi" },
      { product: "Broiler Chicken", unit: "kg live", priceRange: "UGX 14,000 – 16,000", trend: "up", location: "Kampala, Wakiso" },
      { product: "Layer (Point of Lay)", unit: "bird", priceRange: "UGX 22,000 – 28,000", trend: "stable", location: "Luwero, Mukono" },
      { product: "Pork", unit: "kg carcass", priceRange: "UGX 12,000 – 14,000", trend: "down", location: "Masaka, Jinja" },
    ],
    image: "https://images.unsplash.com/photo-1721433223188-21884d231a99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0dGxlJTIwbWFya2V0fGVufDB8fDB8fHww&w=1200&h=600",
    gradient: "from-orange-400 to-red-600",
  },
  {
    id: "inputs",
    name: "Farm Inputs Prices",
    description: "Fertilizers, seeds, pesticides, and veterinary drugs pricing.",
    icon: DollarSignIcon,
    items: [
      { product: "Urea Fertilizer", unit: "50kg bag", priceRange: "UGX 135,000 – 150,000", trend: "up", location: "Nationwide" },
      { product: "DAP Fertilizer", unit: "50kg bag", priceRange: "UGX 180,000 – 200,000", trend: "stable", location: "Agro-dealers" },
      { product: "Maize Seed (Longe 10H)", unit: "10kg", priceRange: "UGX 45,000 – 55,000", trend: "stable", location: "NARO, Seed Co." },
      { product: "Oxytetracycline (100ml)", unit: "bottle", priceRange: "UGX 18,000 – 22,000", trend: "up", location: "Vet shops" },
      { product: "Amitraz (Tick Control)", unit: "1L", priceRange: "UGX 35,000 – 42,000", trend: "stable", location: "Agrovets" },
    ],
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVydGlsaXplciUyMGFwcGxpY2F0aW9ufGVufDB8fDB8fHww&w=1200&h=600",
    gradient: "from-yellow-400 to-amber-600",
  },
  {
    id: "alerts",
    name: "Price Alerts & Trends",
    description: "Get notified on price drops, shortages, or market opportunities.",
    icon: AlertCircleIcon,
    items: [
      { product: "Maize Price Surge", unit: "Alert", priceRange: "+15% in 2 weeks", trend: "up", location: "Northern Uganda" },
      { product: "Matooke Glut", unit: "Alert", priceRange: "-20% in Mbarara", trend: "down", location: "Western Region" },
      { product: "Coffee Export Premium", unit: "Alert", priceRange: "+UGX 2,000/kg", trend: "up", location: "Global Market" },
      { product: "Poultry Feed Shortage", unit: "Warning", priceRange: "Expected in Dec", trend: "up", location: "Central" },
      { product: "Goat Market Fair", unit: "Event", priceRange: "Nov 25–27", trend: "stable", location: "Moroto" },
    ],
    image: "https://plus.unsplash.com/premium_photo-1744231750405-b1c013b179af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vYmlsZSUyMHBob25lJTIwcHJpY2UlMjBhbGVydHN8ZW58MHx8MHx8fDA%3D&w=1200&h=600",
    gradient: "from-purple-400 to-indigo-600",
  },
];

const rightColumnImages = [
  {
    src: "https://images.unsplash.com/photo-1709236550338-e2bcc3beee70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhaW4lMjBtYXJrZXQlMjBVZ2FuZGF8ZW58MHx8MHx8fDA%3D&w=800&h=600",
    alt: "Kampala grain market",
  },
  {
    src: "https://images.unsplash.com/photo-1734076458312-a4e9a27cb840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fE5ha2FzZXJvJTIwbWFya2V0JTIwVWdhbmRhfGVufDB8fDB8fHww&w=800&h=600",
    alt: "Supermarket Prices",
  },
  {
    src: "https://images.unsplash.com/photo-1551356522-ec7d957e3743?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW4lMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D&w=800&h=600",
    alt: "Poultry market distribution",
  },
  {
    src: "https://images.unsplash.com/photo-1732634260264-27441fcdf905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1dGNoZXJ5fGVufDB8fDB8fHww&w=800&h=600",
    alt: "Butcher market in Wakiso",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1686529896385-8a8d581d0225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TmFrYXNlcm8lMjBtYXJrZXQlMjBVZ2FuZGF8ZW58MHx8MHx8fDA%3D&w=800&h=600",
    alt: "Nakasero Market prices",
  },
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
};

export default function MarketPrices() {
  const [activeTab, setActiveTab] = useState(marketCategories[0].id);
  const currentTab = marketCategories.find((t) => t.id === activeTab) ?? marketCategories[0];

  return (
    <div className="bg-white p sm:py-6 mt-2 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT – TEXT */}
          <div className="text-left">
            <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 ring-1 ring-inset ring-teal-500/20">
              AgriConnect Market Prices
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Real-time crop & livestock prices across Uganda
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Track wholesale and retail prices from Kampala to Karamoja. Updated daily from major markets and agro-dealers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-teal-600 text-white text-lg font-medium rounded-lg shadow hover:bg-teal-700 transition">
                View Full Price List
              </button>
              <button className="px-6 py-3 bg-white text-teal-600 border border-teal-600 text-lg font-medium rounded-lg shadow-sm hover:bg-teal-50 transition">
                Set Price Alerts
              </button>
            </div>
          </div>

          {/* RIGHT – CAROUSEL */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-teal-200 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative w-full max-w-md h-100 rounded-3xl overflow-hidden shadow-xl">
              <Slider {...carouselSettings}>
                {rightColumnImages.map((img, i) => (
                  <div key={i} className="relative w-full h-100">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover w-full h-full rounded-3xl"
                      sizes="100vw"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex overflow-x-auto pb-4 sm:justify-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-gray-50 p-1.5">
              {marketCategories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? `bg-white text-gray-900 shadow-sm ring-1 ring-gray-900/10`
                      : `text-gray-600 hover:text-gray-900`
                  }`}
                >
                  <tab.icon
                    className={`mr-1.5 h-4 w-4 ${
                      activeTab === tab.id ? "text-teal-600" : "text-gray-400"
                    }`}
                  />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Image Card */}
              <div className="relative">
                <div
                  className={`absolute -inset-4 bg-linear-to-r ${currentTab.gradient} opacity-15 blur-xl rounded-3xl`}
                ></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image width={60} height={60}
                    src={currentTab.image}
                    alt={`${currentTab.name} market`}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className={`inline-flex items-center rounded-full bg-linear-to-r ${currentTab.gradient} px-3 py-1 text-sm font-medium text-white mb-2`}
                    >
                      {currentTab.name}
                    </div>
                    <p className="text-base font-medium text-white">
                      {currentTab.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price List */}
              <div className="flex flex-col justify-center">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${currentTab.gradient} shadow-md mb-6`}
                >
                  <currentTab.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{currentTab.name}</h3>
                <p className="mt-3 text-lg text-gray-600">{currentTab.description}</p>

                <div className="mt-8 space-y-4">
                  {currentTab.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.product}</h4>
                        <p className="text-sm text-gray-500">{item.unit} • {item.location}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-gray-900">{item.priceRange}</span>
                        <TrendingUpIcon
                          className={`h-5 w-5 ${
                            item.trend === "up"
                              ? "text-red-500"
                              : item.trend === "down"
                              ? "text-green-500"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <button
                    className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm bg-linear-to ${currentTab.gradient} hover:opacity-90`}
                  >
                    View Detailed {currentTab.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}