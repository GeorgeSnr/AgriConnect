"use client";
import React, { useState } from "react";
import {
  CalendarIcon,
  BugIcon,
  DropletIcon,
  SproutIcon,
  WheatIcon,
} from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

/* --- Crop Tabs --- */
interface CropManagementTab {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  details: {
    title: string;
    description: string;
  }[];
  image: string;
  gradient: string;
}

const cropManagementTabs: CropManagementTab[] = [
  {
    id: "planning",
    name: "Planning & Planting",
    description: "Seasonal calendars, seed selection, and soil preparation for Ugandan regions.",
    icon: CalendarIcon,
    details: [
      { title: "Planting Calendars", description: "Region-specific schedules for maize, beans, coffee, and vegetables." },
      { title: "Seed Selection", description: "Certified varieties resistant to local pests and suitable for soil types." },
      { title: "Soil Preparation", description: "Tilling, pH testing, and organic matter incorporation." },
    ],
    image:
      "https://images.unsplash.com/photo-1723540561412-002d352416f0?w=600&auto=format&fit=crop&q=60",
    gradient: "from-green-400 to-emerald-600",
  },

  {
    id: "pest-disease",
    name: "Pest & Disease Management",
    description: "Identification, prevention, and control methods for common crop threats.",
    icon: BugIcon,
    details: [
      { title: "Pest Identification", description: "Guides for armyworms, borers, and aphids in maize and coffee." },
      { title: "Disease Control", description: "Management of blight, wilt, and rust using IPM approaches." },
      { title: "Safe Pesticide Use", description: "Recommended products and application techniques." },
    ],
    image:
      "https://media.istockphoto.com/id/2164057761/photo/farmer-spray-liquid-fertilizer-pest-control-using-danger-chemical-in-agriculture-plant.webp",
    gradient: "from-red-400 to-pink-600",
  },

  {
    id: "irrigation",
    name: "Irrigation & Water Management",
    description: "Efficient water use strategies for dry seasons in Uganda.",
    icon: DropletIcon,
    details: [
      { title: "Irrigation Systems", description: "Drip, sprinkler, and furrow methods for smallholder farms." },
      { title: "Water Scheduling", description: "Rainfall-based plans for Central and Northern regions." },
      { title: "Conservation Techniques", description: "Mulching and rainwater harvesting." },
    ],
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    gradient: "from-blue-400 to-sky-600",
  },

  {
    id: "fertilization",
    name: "Fertilization & Nutrition",
    description: "Soil nutrient management for optimal crop yields.",
    icon: SproutIcon,
    details: [
      { title: "Fertilizer Types", description: "NPK, urea, and organic options for Ugandan soils." },
      { title: "Application Methods", description: "Timing and rates for maize, beans, and cash crops." },
      { title: "Soil Testing", description: "Affordable kits and lab services." },
    ],
    image:
      "https://images.pexels.com/photos/5197443/pexels-photo-5197443.jpeg",
    gradient: "from-yellow-400 to-orange-600",
  },

  {
    id: "harvesting",
    name: "Harvesting & Post-Harvest",
    description: "Techniques for maximizing quality and minimizing losses.",
    icon: WheatIcon,
    details: [
      { title: "Harvesting Methods", description: "Timing and tools for grains, tubers, and fruits." },
      { title: "Drying & Storage", description: "Solar dryers and hermetic bags to prevent aflatoxins." },
      { title: "Value Addition", description: "Simple processing for better market prices." },
    ],
    image:
      "https://images.pexels.com/photos/5529569/pexels-photo-5529569.jpeg",
    gradient: "from-purple-500 to-indigo-600",
  },
];

/* --- Carousel Images --- */
const rightColumnImages = [
  {
    src: "https://plus.unsplash.com/premium_photo-1661962947148-d9c791458d9b?w=600&auto=format&fit=crop",
    alt: "Crop Management Overview",
  },
  {
    src: "https://media.istockphoto.com/id/1373233691/photo/shot-of-a-young-woman-carrying-a-crate-full-of-freshly-picked-vegetables.jpg",
    alt: "Vegetable Farming in Uganda",
  },
  {
    src: "https://media.istockphoto.com/id/1292346079/photo/farmers-who-inspect-the-quality-of-fresh-coffee-beans.jpg",
    alt: "Coffee Nursery Management",
  },
];

/* --- Carousel Settings --- */
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2800,
  arrows: false,
  pauseOnHover: true,
};

/* --- MAIN COMPONENT --- */
export default function CropManagement() {
  const [activeTab, setActiveTab] = useState(cropManagementTabs[0].id);

  const currentTab =
    cropManagementTabs.find((tab) => tab.id === activeTab) ||
    cropManagementTabs[0];

  return (
    <div className="bg-white pt-2 sm:pt-6 pb-10 rounded-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center py-10">

          {/* TEXT COLUMN */}
          <div className="space-y-4 sm:space-y-6 text-left">
            <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs sm:text-sm font-medium text-green-600 ring-1 ring-green-500/20">
              AgriConnect Crop Management
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Optimize crop production with region-aware guides
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Planting calendars, pest control guides, irrigation planning, fertilization advice, and harvesting support tailored for Ugandan farmers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="px-5 py-3 bg-green-700 text-white text-base rounded-lg shadow hover:bg-green-800 transition">
                Get Started
              </button>

              <button className="px-5 py-3 bg-white border border-green-700 text-green-700 text-base rounded-lg shadow-sm hover:bg-green-50">
                Join Community Forum
              </button>
            </div>
          </div>

          {/* IMAGE CAROUSEL */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-green-200 rounded-3xl blur-2xl opacity-30"></div>

            <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-xl">
              <Slider {...carouselSettings}>
                {rightColumnImages.map((img, idx) => (
                  <div key={idx} className="relative h-64 sm:h-80">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover rounded-3xl"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-4 sm:mt-10 flex overflow-x-auto pb-4">
          <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full p-2">
            {cropManagementTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm ring-1 ring-gray-300 text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <tab.icon
                  className={`mr-1.5 h-4 w-4 ${
                    activeTab === tab.id ? "text-green-600" : "text-gray-400"
                  }`}
                />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* IMAGE */}
          <div className="relative">
            <div
              className={`absolute -inset-3 bg-gradient-to-r ${currentTab.gradient} opacity-20 blur-xl rounded-3xl`}
            ></div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={currentTab.image}
                alt={currentTab.name}
                className="w-full h-60 sm:h-72 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

              <div className="absolute bottom-0 p-4 sm:p-6">
                <div
                  className={`inline-flex items-center rounded-full bg-gradient-to-r ${currentTab.gradient} px-3 py-1 text-xs sm:text-sm font-medium text-white mb-2`}
                >
                  {currentTab.name}
                </div>
                <p className="text-sm sm:text-base text-white">
                  {currentTab.description}
                </p>
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center space-y-6">
            <div
              className={`h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${currentTab.gradient} shadow`}
            >
              <currentTab.icon className="h-6 w-6 text-white" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {currentTab.name}
            </h3>

            <p className="text-sm sm:text-lg text-gray-600">
              {currentTab.description}
            </p>

            <div className="space-y-6">
              {currentTab.details.map((detail, index) => (
                <div key={index} className="flex">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${currentTab.gradient}`}
                  >
                    <span className="text-sm text-white font-semibold">
                      {index + 1}
                    </span>
                  </div>

                  <div className="ml-4">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                      {detail.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`mt-4 inline-flex items-center rounded-lg px-4 py-3 text-sm sm:text-base font-semibold text-white shadow bg-gradient-to-r ${currentTab.gradient} hover:opacity-90`}
            >
              Explore {currentTab.name} Guides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
