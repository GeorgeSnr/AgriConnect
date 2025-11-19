"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
    Sun,
    CloudRain,
    Droplets,
    Bug,
    PackageIcon,
    ShoppingCartIcon,
    DollarSignIcon,
    AlertCircleIcon,
} from "lucide-react";

interface DashboardTab {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
    content: React.ReactNode;
    gradient: string;
    image: string;
}

const dashboardTabs: DashboardTab[] = [
    {
        id: "weather",
        name: "Weather Forecast",
        description: "Check the real-time weather and crop advice for your district.",
        icon: Sun,
        gradient: "from-green-400 to-teal-600",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&h=600&auto=format&fit=crop",
        content: (
            <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="p-4 bg-green-50 rounded-lg text-center">
                    <Sun className="mx-auto h-10 w-10 text-yellow-400 mb-2" />
                    <p className="font-bold text-xl">28°C</p>
                    <p>Sunny</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <Droplets className="mx-auto h-10 w-10 text-blue-400 mb-2" />
                    <p className="font-bold text-xl">Optimal</p>
                    <p>Soil Moisture</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg text-center">
                    <Bug className="mx-auto h-10 w-10 text-red-400 mb-2" />
                    <p className="font-bold text-xl">Moderate</p>
                    <p>Pest Risk</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg text-center">
                    <CloudRain className="mx-auto h-10 w-10 text-gray-500 mb-2" />
                    <p className="font-bold text-xl">20%</p>
                    <p>Rain Chance (3h)</p>
                </div>
            </div>
        ),
    },
    {
        id: "crops",
        name: "Crop Market Prices",
        description: "Live crop prices across Uganda markets.",
        icon: PackageIcon,
        gradient: "from-yellow-400 to-amber-600",
        image: "https://images.unsplash.com/photo-1752580114331-56ca9ab4dcfb?w=800&h=600&auto=format&fit=crop",
        content: (
            <div className="space-y-4">
                {[
                    { name: "Maize (White)", unit: "100kg bag", price: "UGX 130,000 – 150,000", trend: "up" },
                    { name: "Beans (Nambale)", unit: "100kg bag", price: "UGX 280,000 – 320,000", trend: "stable" },
                    { name: "Coffee (Arabica)", unit: "kg", price: "UGX 14,000 – 16,500", trend: "up" },
                ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.unit}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">{item.price}</span>
                            <span
                                className={`h-5 w-5 ${item.trend === "up" ? "text-red-500" : item.trend === "down" ? "text-green-500" : "text-gray-400"
                                    }`}
                            >
                                ▲
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "livestock",
        name: "Livestock Prices",
        description: "Check live prices for cattle, goats, and poultry.",
        icon: ShoppingCartIcon,
        gradient: "from-orange-400 to-red-600",
        image: "https://images.unsplash.com/photo-1721433223188-21884d231a99?w=800&h=600&auto=format&fit=crop",
        content: (
            <div className="space-y-4">
                {[
                    { name: "Local Cow", unit: "head", price: "UGX 1.5M", trend: "up" },
                    { name: "Goat (Adult)", unit: "head", price: "UGX 180,000", trend: "stable" },
                ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.unit}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">{item.price}</span>
                            <span
                                className={`h-5 w-5 ${item.trend === "up" ? "text-red-500" : item.trend === "down" ? "text-green-500" : "text-gray-400"
                                    }`}
                            >
                                ▲
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        id: "alerts",
        name: "Farm Alerts",
        description: "Weather warnings, price alerts, and pest notifications.",
        icon: AlertCircleIcon,
        gradient: "from-purple-400 to-indigo-600",
        image: "https://images.unsplash.com/photo-1565182999561-5c3d46022204?w=800&h=600&auto=format&fit=crop",
        content: (
            <div className="space-y-4">
                {[
                    { title: "Heavy Rain Expected", type: "Weather", severity: "High" },
                    { title: "Maize Price Drop", type: "Market", severity: "Medium" },
                    { title: "Locust Alert", type: "Pest", severity: "High" },
                ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.type}</p>
                        </div>
                        <span
                            className={`font-bold ${item.severity === "High" ? "text-red-500" : item.severity === "Medium" ? "text-yellow-500" : "text-green-500"
                                }`}
                        >
                            {item.severity}
                        </span>
                    </div>
                ))}
            </div>
        ),
    },
];

const carouselImages = [
    { src: "https://images.unsplash.com/photo-1709236550338-e2bcc3beee70?w=800&h=600&auto=format&fit=crop", alt: "Market view" },
    { src: "https://images.unsplash.com/photo-1734076458312-a4e9a27cb840?w=800&h=600&auto=format&fit=crop", alt: "Agro shop" },
    { src: "https://images.unsplash.com/photo-1551356522-ec7d957e3743?w=800&h=600&auto=format&fit=crop", alt: "Livestock market" },
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

export default function FarmerDashboardFeature() {
    const [activeTab, setActiveTab] = useState(dashboardTabs[0].id);
    const currentTab = dashboardTabs.find((t) => t.id === activeTab) ?? dashboardTabs[0];

    return (
        <div className="bg-white pt-0 sm:py-12 rounded-2xl mt-4">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600">
                            AgriConnect Farmer Dashboard
                        </span>
                        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900">
                            Monitor your farm, markets & alerts
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Track real-time weather, crop & livestock prices, and receive alerts tailored to your district.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="px-6 py-3 bg-teal-600 text-white text-lg font-medium rounded-lg shadow hover:bg-teal-700">
                                Full Dashboard
                            </button>
                            <button className="px-6 py-3 bg-white text-teal-600 border border-teal-600 rounded-lg text-lg font-medium hover:bg-teal-50">
                                Set Alerts
                            </button>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-teal-200 rounded-3xl blur-2xl opacity-30"></div>
                        <div className="relative w-full max-w-md h-100 rounded-3xl overflow-hidden shadow-xl">
                            <Slider {...carouselSettings}>
                                {carouselImages.map((img, i) => (
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
                            {dashboardTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                                        ? `bg-white text-gray-900 shadow-sm ring-1 ring-gray-900/10`
                                        : `text-gray-600 hover:text-gray-900`
                                        }`}
                                >
                                    <tab.icon
                                        className={`mr-1.5 h-4 w-4 ${activeTab === tab.id ? "text-teal-600" : "text-gray-400"}`}
                                    />
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        {/* Image Card */}
                        <div className="relative">
                            <div
                                className={`absolute -inset-4 bg-gradient-to-r ${currentTab.gradient} opacity-15 blur-xl rounded-3xl`}
                            ></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src={currentTab.image}
                                    alt={`${currentTab.name}`}
                                    className="w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div
                                        className={`inline-flex items-center rounded-full bg-gradient-to-r ${currentTab.gradient} px-3 py-1 text-sm font-medium text-white mb-2`}
                                    >
                                        {currentTab.name}
                                    </div>
                                    <p className="text-base font-medium text-white">{currentTab.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="flex flex-col justify-center space-y-2">
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${currentTab.gradient} shadow-md`}>
                                <currentTab.icon className="h-6 w-6 text-white" />
                            </div>
                            {currentTab.content}
                            <div className="mt-10 right-0">
                                <button
                                    className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm bg-gradient-to-r ${currentTab.gradient} hover:opacity-90`}
                                >
                                    Login to Your DashBoard
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
