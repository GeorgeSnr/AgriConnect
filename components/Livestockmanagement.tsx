"use client";
import React, { useState } from "react";
import {
  HeartIcon,
  SyringeIcon,
  HomeIcon,
  BeefIcon,
  MilkIcon,
  StethoscopeIcon,
} from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

interface LivestockManagementTab {
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

const livestockManagementTabs: LivestockManagementTab[] = [
  {
    id: "health",
    name: "Animal Health",
    description: "Vaccination schedules, disease prevention, and treatment protocols for Ugandan livestock.",
    icon: HeartIcon,
    details: [
      { title: "Vaccination Programs", description: "FMD, LSD, Newcastle, and Goat Pox schedules for cattle, poultry, and goats." },
      { title: "Parasite Control", description: "Deworming and tick control using safe acaricides and anthelmintics." },
      { title: "Biosecurity Measures", description: "Farm hygiene, quarantine, and movement control to prevent outbreaks." },
    ],
    image: "https://plus.unsplash.com/premium_photo-1664297461489-f2b2c95d7a66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdmVzdG9jayUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D&w=1200&h=600",
    
    gradient: "from-red-400 to-pink-600",
  },
  {
    id: "vaccination",
    name: "Vaccination & Treatment",
    description: "Step-by-step guides for administering vaccines and common medications.",
    icon: SyringeIcon,
    details: [
      { title: "Injection Techniques", description: "Subcutaneous, intramuscular, and intranasal methods for different species." },
      { title: "Antibiotic Use", description: "Oxytetracycline, penicillin, and dosage charts for respiratory and wound infections." },
      { title: "Emergency Care", description: "First aid for bloat, prolapse, and poisoning cases." },
    ],
    image: "https://plus.unsplash.com/premium_photo-1664298896164-d177a0097450?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHZhY2NpbmF0aW9ufGVufDB8fDB8fHww&w=1200&h=600",
    gradient: "from-orange-400 to-red-600",
  },
  {
    id: "housing",
    name: "Housing & Shelter",
    description: "Design and management of livestock housing for optimal welfare and productivity.",
    icon: HomeIcon,
    details: [
      { title: "Cattle Kraals", description: "Zero-grazing units and open pens with proper drainage and ventilation." },
      { title: "Poultry Houses", description: "Deep litter and battery cage systems for layers and broilers." },
      { title: "Goat & Pig Pens", description: "Raised floors, feeding troughs, and waste management." },
    ],
    image: "https://images.unsplash.com/photo-1697545698404-46828377ae9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG91bHRyeSUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D&w=1200&h=600",
    gradient: "from-amber-400 to-yellow-600",
  },
  {
    id: "feeding",
    name: "Feeding & Nutrition",
    description: "Balanced rations and feeding strategies for growth, milk, and meat production.",
    icon: BeefIcon,
    details: [
      { title: "Dairy Cattle Rations", description: "Lactation feeds, mineral blocks, and silage making." },
      { title: "Poultry Feeds", description: "Chick mash, grower, and layer feeds with local ingredients." },
      { title: "Forage & Supplements", description: "Napier grass, calliandra, and urea treatment for dry seasons." },
    ],
    image: "https://plus.unsplash.com/premium_photo-1664297483124-7e1b158d1e9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHRsZSUyMGZlZWRpbmd8ZW58MHx8MHx8fDA%3D&w=1200&h=600",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: "dairy",
    name: "Dairy Management",
    description: "Best practices for milk production, hygiene, and value addition.",
    icon: MilkIcon,
    details: [
      { title: "Milking Hygiene", description: "Clean udder prep, stainless steel cans, and rapid cooling." },
      { title: "Mastitis Control", description: "California Mastitis Test and dry cow therapy." },
      { title: "Milk Processing", description: "Yoghurt, ghee, and pasteurization for local markets." },
    ],
    image: "https://plus.unsplash.com/premium_photo-1661962861018-9d8451676b13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1pbGtpbmd8ZW58MHx8MHx8fDA%3D&w=1200&h=600",
    gradient: "from-blue-400 to-cyan-600",
  },
  {
    id: "breeding",
    name: "Breeding & Reproduction",
    description: "Improving genetics and reproductive efficiency in livestock.",
    icon: StethoscopeIcon,
    details: [
      { title: "Artificial Insemination", description: "Semen handling, heat detection, and AI services in Uganda." },
      { title: "Pregnancy Diagnosis", description: "Ultrasound and palpation for cattle and goats." },
      { title: "Calf & Kid Rearing", description: "Colostrum feeding and weaning schedules." },
    ],
    image: "https://images.pexels.com/photos/6234991/pexels-photo-6234991.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
    gradient: "from-purple-400 to-indigo-600",
  },
];

const rightColumnImages = [
  {
    src: "https://images.unsplash.com/photo-1563169721-8f27f0921bb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvYXRzJTIwaW4lMjBVZ2FuZGF8ZW58MHx8MHx8fDA%3D&w=800&h=600",
    alt: "Goat farming in Uganda",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1677850456175-ef31221f5f70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxBbmtvbGUlMjBjYXR0bGUlMjBpbiUyMFVnYW5kYXxlbnwwfHwwfHx8MA%3D%3D&w=800&h=600",
    alt: "Dairy Farming in East Africa",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1667979823433-cacea4b24c8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNoZWVwJTIwY2FyZSUyMGluJTIwVWdhbmRhfGVufDB8fDB8fHww&w=800&h=600",
    alt: "Sheep in Rural Uganda",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661834367623-fb570fe65d01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNoaWNrZW4lMjB2ZXRlcmluYXJ5JTIwY2FyZSUyMGluJTIwVWdhbmRhfGVufDB8fDB8fHww&w=800&h=600",
    alt: "Modern Poultry Housing",
  },
  {
    src: "https://images.pexels.com/photos/6234991/pexels-photo-6234991.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    alt: "Livestock Breeding Program",
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

export default function LivestockManagement() {
  const [activeTab, setActiveTab] = useState(livestockManagementTabs[0].id);

  const currentTab =
    livestockManagementTabs.find((tab) => tab.id === activeTab) || livestockManagementTabs[0];

  return (
    <div className="bg-white pt-0 sm:py-6 mt-2 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN – TEXT */}
          <div className="text-left">
            <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-600 ring-1 ring-inset ring-orange-500/20">
              AgriConnect Livestock Management
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Boost livestock health and productivity with expert guides for Uganda
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Access vaccination schedules, feeding plans, housing designs, and breeding advice — tailored for cattle, poultry, goats, and pigs in Uganda.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-orange-600 text-white text-lg font-medium rounded-lg shadow hover:bg-orange-700 transition">
                Get Started
              </button>

              <button className="px-6 py-3 bg-white text-orange-600 border border-orange-600 text-lg font-medium rounded-lg shadow-sm hover:bg-orange-50 transition">
                Join Livestock Forum
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN – CAROUSEL */}
          <div className="relative flex justify-center">
            {/* Blurred background */}
            <div className="absolute inset-0 bg-orange-200 rounded-3xl blur-2xl opacity-30"></div>

            <div className="relative w-full max-w-md h-100 rounded-3xl overflow-hidden shadow-xl">
              <Slider {...carouselSettings}>
                {rightColumnImages.map((img, idx) => (
                  <div key={idx} className="relative w-full h-100">
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
              {livestockManagementTabs.map((tab) => (
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
                      activeTab === tab.id ? "text-orange-600" : "text-gray-400"
                    }`}
                  />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Image Card */}
              <div className="relative">
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${currentTab.gradient} opacity-15 blur-xl rounded-3xl`}
                ></div>

                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={currentTab.image}
                    alt={`${currentTab.name} illustration`}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className={`inline-flex items-center rounded-full bg-gradient-to-r ${currentTab.gradient} px-3 py-1 text-sm font-medium text-white mb-2`}
                    >
                      {currentTab.name}
                    </div>
                    <p className="text-base font-medium text-white">
                      {currentTab.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${currentTab.gradient} shadow-md mb-6`}
                >
                  <currentTab.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {currentTab.name}
                </h3>

                <p className="mt-3 text-lg text-gray-600">
                  {currentTab.description}
                </p>

                <div className="mt-8 space-y-6">
                  {currentTab.details.map((detail, index) => (
                    <div key={index} className="flex">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${currentTab.gradient} bg-opacity-10`}
                      >
                        <span className="text-sm font-medium text-orange-600">
                          {index + 1}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-semibold text-gray-900">
                          {detail.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <button
                    className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm bg-gradient-to-r ${currentTab.gradient} hover:opacity-90`}
                  >
                    Explore {currentTab.name} Guides
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