"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  ShoppingCartIcon,
  TractorIcon,
  LeafIcon,
  ShieldCheckIcon,
  SproutIcon,
  FactoryIcon,
} from "lucide-react";

interface MarketplaceTab {
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

const marketplaceTabs: MarketplaceTab[] = [
  {
    id: "inputs",
    name: "Agro Inputs",
    description: "Certified seeds, fertilizers, herbicides, and pesticides.",
    icon: LeafIcon,
    details: [
      { title: "Certified Seeds", description: "Maize, beans, groundnuts, rice, vegetables from top suppliers." },
      { title: "Fertilizers", description: "NPK, UREA, DAP, organic fertilizers, liquid foliar feeds." },
      { title: "Crop Chemicals", description: "Herbicides, fungicides, insecticides with MoA labels." },
    ],
    image: "https://img.freepik.com/free-photo/agronomist-using-digital-tablet-wheat-field_342744-1521.jpg",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: "livestock-feed",
    name: "Livestock Feed",
    description: "Quality feed for poultry, cattle, pigs, and goats.",
    icon: FactoryIcon,
    details: [
      { title: "Poultry Feeds", description: "Starter, grower, finisher feeds from major Ugandan mills." },
      { title: "Dairy Feeds", description: "Lactation meal, heifer meal, mineral supplements." },
      { title: "Pig & Goat Feeds", description: "Balanced rations formulated for rapid weight gain." },
    ],
    image: "https://img.freepik.com/free-photo/chicken-farm_74190-3869.jpg",
    gradient: "from-yellow-400 to-orange-600",
  },
  {
    id: "vet-products",
    name: "Veterinary Products",
    description: "Vaccines, dewormers, antibiotics, supplements.",
    icon: ShieldCheckIcon,
    details: [
      { title: "Vaccines", description: "Newcastle, FMD, LSD, Goat Pox, and more." },
      { title: "Dewormers", description: "Broad-spectrum and species-specific deworming products." },
      { title: "Animal Health Drugs", description: "Antibiotics, acaricides, vitamin injections." },
    ],
    image: "https://img.freepik.com/free-photo/vet-treating-cow_23-2149323211.jpg",
    gradient: "from-red-400 to-pink-600",
  },
  {
    id: "equipment",
    name: "Farm Tools & Machinery",
    description: "Tractors, irrigation systems, sprayers, and tools.",
    icon: TractorIcon,
    details: [
      { title: "Farm Machinery", description: "Tractors, planters, shellers, harvesters." },
      { title: "Irrigation Systems", description: "Drip systems, sprinklers, solar irrigation pumps." },
      { title: "Small Tools", description: "Hoes, pangas, sprayers, wheelbarrows, pruning tools." },
    ],
    image: "https://img.freepik.com/free-photo/tractor-working-field_342744-1489.jpg",
    gradient: "from-blue-400 to-sky-600",
  },
  {
    id: "seedlings",
    name: "Seedlings & Nurseries",
    description: "Fruit seedlings, forestry seedlings, vegetable seedlings.",
    icon: SproutIcon,
    details: [
      { title: "Fruit Seedlings", description: "Mangoes, oranges, avocado, passion fruit, bananas." },
      { title: "Forestry Seedlings", description: "Pine, eucalyptus, grevillea." },
      { title: "Vegetable Seedlings", description: "Tomatoes, cabbages, eggplants, peppers." },
    ],
    image: "https://img.freepik.com/free-photo/man-holding-young-plant_23-2149186451.jpg",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "services",
    name: "Farm Services",
    description: "Soil testing, spray services, tractor hire, extension support.",
    icon: ShoppingCartIcon,
    details: [
      { title: "Soil Testing", description: "On-farm or laboratory soil analysis services." },
      { title: "Spray Services", description: "Professional spray operators for crops and livestock." },
      { title: "Mechanization", description: "Tractor hire, ploughing, planting, harvesting." },
    ],
    image: "https://img.freepik.com/free-photo/farmer-agronomist-examining-corn-field_342744-1467.jpg",
    gradient: "from-purple-500 to-indigo-600",
  },
];

const suppliersByCategory: Record<string, { name: string; category: string; logo: string }[]> = {
  "inputs": [
    { name: "GreenFields Ltd", category: "Seeds & Fertilizers", logo: "https://images.unsplash.com/photo-1600880292089-90aa2a7a0660?auto=format&fit=crop&w=80&q=80" },
    { name: "AgroFarm Supplies", category: "Crop Chemicals", logo: "https://images.unsplash.com/photo-1581090700227-d09b0d7a0b9a?auto=format&fit=crop&w=80&q=80" },
  ],
  "livestock-feed": [
    { name: "Livestock Hub", category: "Animal Feed", logo: "https://images.unsplash.com/photo-1601033200294-8a0c4c2eae14?auto=format&fit=crop&w=80&q=80" },
    { name: "FeedMasters Uganda", category: "Dairy & Poultry Feed", logo: "https://images.unsplash.com/photo-1600181956764-2462d4cdcf32?auto=format&fit=crop&w=80&q=80" },
  ],
  "vet-products": [
    { name: "VetCare Uganda", category: "Vaccines & Drugs", logo: "https://images.unsplash.com/photo-1625814984736-cf31a5bcb7b8?auto=format&fit=crop&w=80&q=80" },
    { name: "HealthyHerd Ltd", category: "Dewormers & Antibiotics", logo: "https://images.unsplash.com/photo-1600880292089-90aa2a7a0660?auto=format&fit=crop&w=80&q=80" },
  ],
  "equipment": [
    { name: "FarmMechanics", category: "Tractors & Tools", logo: "https://images.unsplash.com/photo-1600181956764-2462d4cdcf32?auto=format&fit=crop&w=80&q=80" },
  ],
  "seedlings": [
    { name: "Seedling World", category: "Fruit & Forestry Seedlings", logo: "https://images.unsplash.com/photo-1601033200294-8a0c4c2eae14?auto=format&fit=crop&w=80&q=80" },
  ],
  "services": [
    { name: "AgroPro Services", category: "Soil & Mechanization", logo: "https://images.unsplash.com/photo-1625814984736-cf31a5bcb7b8?auto=format&fit=crop&w=80&q=80" },
  ],
};

const rightColumnImages = [
  { src: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80", alt: "Crop Management" },
  { src: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Green Field" },
  { src: "https://images.pexels.com/photos/4427278/pexels-photo-4427278.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Agro Inspection" },
  { src: "https://images.pexels.com/photos/4861421/pexels-photo-4861421.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Farmer Guidance" },
  { src: "https://images.pexels.com/photos/6335397/pexels-photo-6335397.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Farm Services" },
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

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState(marketplaceTabs[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const currentTab = marketplaceTabs.find((tab) => tab.id === activeTab) || marketplaceTabs[0];

  const allSuppliers = suppliersByCategory[activeTab] || [];
  const filteredSuppliers = allSuppliers.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (categoryFilter ? s.category === categoryFilter : true)
  );

  const categories = Array.from(new Set(allSuppliers.map(s => s.category)));

  return (
    <div className="bg-white pt-0 sm:py-6 mt-2 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-600 ring-1 ring-inset ring-green-500/20">
              AgriConnect Marketplace
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Find trusted agricultural products & services across Uganda
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Buy agro-inputs, farm tools, livestock feed, veterinary products, and hire services from verified suppliers near you — all in one platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-green-700 text-white text-lg font-medium rounded-lg shadow hover:bg-green-800 transition">Start Shopping</button>
              <button className="px-6 py-3 bg-white text-green-700 border border-green-700 text-lg font-medium rounded-lg shadow-sm hover:bg-green-50 transition">Become a Seller</button>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-green-200 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative w-full max-w-md h-100 rounded-3xl overflow-hidden shadow-xl">
              <Slider {...carouselSettings}>
                {rightColumnImages.map((img, idx) => (
                  <div key={idx} className="relative w-full h-100">
                    <Image src={img.src} alt={img.alt} fill className="object-cover w-full h-full rounded-3xl" sizes="100vw" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-16">
          <div className="flex overflow-x-auto pb-4 sm:justify-center">
            <div className="inline-flex items-center space-x-2 rounded-full bg-gray-50 p-1.5">
              {marketplaceTabs.map((tab) => (
                <button key={tab.id} onClick={() => { setActiveTab(tab.id); setSearchQuery(""); setCategoryFilter(""); }} className={`flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${activeTab === tab.id ? `bg-white text-gray-900 shadow-sm ring-1 ring-gray-900/10` : `text-gray-600 hover:text-gray-900`}`}>
                  <tab.icon className={`mr-1.5 h-4 w-4 ${activeTab === tab.id ? "text-green-600" : "text-gray-400"}`} />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className={`absolute -inset-4 bg-gradient-to-r ${currentTab.gradient} opacity-15 blur-xl rounded-3xl`}></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src={currentTab.image} alt={`${currentTab.name} illustration`} className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className={`inline-flex items-center rounded-full bg-gradient-to-r ${currentTab.gradient} px-3 py-1 text-sm font-medium text-white mb-2`}>
                    {currentTab.name}
                  </div>
                  <p className="text-base font-medium text-white">{currentTab.description}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${currentTab.gradient} shadow-md mb-6`}>
                <currentTab.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{currentTab.name}</h3>
              <p className="mt-3 text-lg text-gray-600">{currentTab.description}</p>
              <div className="mt-8 space-y-6">
                {currentTab.details.map((detail, index) => (
                  <div key={index} className="flex">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${currentTab.gradient} bg-opacity-10`}>
                      <span className="text-sm font-medium text-green-600">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-semibold text-gray-900">{detail.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* SEARCH & CATEGORY FILTER */}
              
              {/* SUPPLIERS */}
              
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Ready to grow your farm business?</h3>
          <p className="mt-4 text-lg text-gray-600">Join AgriConnect today and access top suppliers, products, and services across Uganda.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-3 bg-green-700 text-white text-lg font-medium rounded-lg shadow hover:bg-green-800 transition">Start Shopping</button>
            <button className="px-6 py-3 bg-white text-green-700 border border-green-700 text-lg font-medium rounded-lg shadow-sm hover:bg-green-50 transition">Become a Seller</button>
          </div>
        </div>
      </div>
    </div>
  );
}
