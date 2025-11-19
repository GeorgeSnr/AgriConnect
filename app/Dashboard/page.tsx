// app/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import {
  Home,
  Sprout,
  CatIcon,
  ShoppingCart,
  TrendingUp,
  MessageCircle,
  User,
  CloudRain,
  AlertCircle,
  Calendar,
  MapPin,
  Sun,
  Plus,
  Search,
  Filter,
  Menu,
  X,
} from "lucide-react";
import FarmerWeatherWidget from "@/components/WeatherWidget";

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Modal States
  const [showCropModal, setShowCropModal] = useState(false);
  const [showLivestockModal, setShowLivestockModal] = useState(false);

  // Form States
  const [cropForm, setCropForm] = useState({ name: "", variety: "", plantedDate: "", acres: "" });
  const [livestockForm, setLivestockForm] = useState({ type: "CatIcons", count: "" });

  // Saved Data
  const [crops, setCrops] = useState([
    { name: "Maize - Longe 10H", planted: "12 Aug 2025", stage: "Vegetative", days: 68 },
    { name: "Beans - NABE 15", planted: "20 Sep 2025", stage: "Flowering", days: 45 },
    { name: "Coffee - SL28", planted: "2023", stage: "Bearing", days: null },
  ]);

  const [livestock, setLivestock] = useState([
    { type: "CatIcons", count: 38 },
    { type: "Goats", count: 12 },
    { type: "Pigs", count: 8 },
    { type: "Chickens", count: 89 },
  ]);

  const menuItems = [
    { id: "home", name: "Home", icon: Home },
    { id: "crops", name: "My Crops", icon: Sprout },
    { id: "livestock", name: "Livestock", icon: CatIcon },
    { id: "market", name: "Market Prices", icon: TrendingUp },
    { id: "shop", name: "Shop Inputs", icon: ShoppingCart },
    { id: "messages", name: "Messages", icon: MessageCircle },
    { id: "profile", name: "Profile", icon: User },
  ];

  // Handlers
  const handleAddCrop = () => {
    if (cropForm.name && cropForm.variety) {
      setCrops([
        ...crops,
        {
          name: `${cropForm.name} - ${cropForm.variety}`,
          planted: cropForm.plantedDate || new Date().toLocaleDateString("en-GB"),
          stage: "Germination",
          days: 1,
        },
      ]);
      setCropForm({ name: "", variety: "", plantedDate: "", acres: "" });
      setShowCropModal(false);
    }
  };

  const handleAddLivestock = () => {
    if (livestockForm.type && livestockForm.count) {
      const num = parseInt(livestockForm.count);
      const existing = livestock.find((l) => l.type === livestockForm.type);
      if (existing) {
        existing.count += num;
        setLivestock([...livestock]);
      } else {
        setLivestock([...livestock, { type: livestockForm.type, count: num }]);
      }
      setLivestockForm({ type: "CatIcons", count: "" });
      setShowLivestockModal(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-green-700">AgriConnect</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 flex pb-20 lg:pb-0">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 bg-green-800 text-white fixed h-full overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <Sprout className="w-8 h-8" /> AgriConnect
            </h1>
            <p className="text-green-200 mt-2">Welcome, Musawo</p>
          </div>
          <nav className="mt-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-green-700 transition ${
                    activeTab === item.id ? "bg-green-700 border-l-4 border-white font-bold" : ""
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}>
            <div className="bg-green-800 w-72 h-full p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-10">
                <h1 className="text-2xl font-bold text-white">AgriConnect</h1>
                <button onClick={() => setSidebarOpen(false)}><X className="w-8 h-8 text-white" /></button>
              </div>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg transition ${
                      activeTab === item.id ? "bg-green-700 text-white" : "text-white/90 hover:bg-green-700"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-64 pt-16 lg:pt-0">
          <div className="p-4 lg:p-8 max-w-7xl mx-auto">

            {/* ==================== HOME ==================== */}
            {activeTab === "home" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Good morning, Musawo!</h2>

                {/* Weather Widget */}
                <FarmerWeatherWidget />

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-5 shadow">
                    <p className="text-gray-600 text-sm">Active Crops</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">{crops.length}</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <p className="text-gray-600 text-sm">Livestock</p>
                    <p className="text-3xl font-bold text-orange-600 mt-2">
                      {livestock.reduce((sum, a) => sum + a.count, 0)}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <p className="text-gray-600 text-sm">Income (UGX)</p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">8.2M</p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow">
                    <p className="text-gray-600 text-sm">Tasks</p>
                    <p className="text-3xl font-bold text-red-600 mt-2">3</p>
                  </div>
                </div>

                {/* Alert */}
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-yellow-600" />
                    <div>
                      <p className="font-bold text-lg">Maize price up 18% in Kampala!</p>
                      <p className="text-sm">Current: UGX 145,000 / 100kg</p>
                    </div>
                  </div>
                </div>

                {/* Tasks */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-green-600" /> Upcoming Tasks
                  </h3>
                  {["Spray maize (Plot A)", "Vaccinate CatIcons", "Soil test ready"].map((task, i) => (
                    <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-lg mb-2">
                      <p>{task}</p>
                      <span className="text-red-600 font-bold">{["Tomorrow", "In 4 days", "Today"][i]}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-green-600 text-white py-6 rounded-2xl font-bold text-lg shadow-lg hover:bg-green-700">
                    <ShoppingCart className="w-10 h-10 mx-auto mb-2" />
                    Buy Inputs
                  </button>
                  <button className="bg-blue-600 text-white py-6 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700">
                    <TrendingUp className="w-10 h-10 mx-auto mb-2" />
                    Sell Produce
                  </button>
                </div>
              </div>
            )}

            {/* ==================== MY CROPS ==================== */}
            {activeTab === "crops" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">My Crops</h2>
                  <button
                    onClick={() => setShowCropModal(true)}
                    className="bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-green-700"
                  >
                    <Plus className="w-5 h-5" /> Add Crop
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {crops.map((crop, i) => (
                    <div key={i} className="bg-white rounded-xl shadow p-6">
                      <h3 className="font-bold text-xl">{crop.name}</h3>
                      <p className="text-gray-600 mt-1">Planted: {crop.planted}</p>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{crop.stage}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-green-600 h-3 rounded-full"
                            style={{ width: crop.days ? `${(crop.days / 120) * 100}%` : "100%" }}
                          />
                        </div>
                      </div>
                      {crop.days && <p className="text-sm text-gray-500 mt-3">{crop.days} days since planting</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== LIVESTOCK ==================== */}
            {activeTab === "livestock" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">My Livestock</h2>
                  <button
                    onClick={() => setShowLivestockModal(true)}
                    className="bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-orange-700"
                  >
                    <Plus className="w-5 h-5" /> Add Animals
                  </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {livestock.map((animal) => (
                    <div key={animal.type} className="bg-white rounded-xl p-6 shadow text-center">
                      <CatIcon className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                      <p className="font-bold text-2xl">{animal.count}</p>
                      <p className="text-gray-600">{animal.type}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl shadow p-6 mt-6">
                  <h3 className="text-xl font-bold mb-4">Next Vaccination Due</h3>
                  <div className="flex justify-between p-4 bg-red-50 rounded-lg">
                    <p>CatIcons - FMD Vaccine</p>
                    <span className="text-red-600 font-bold">In 4 days</span>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== MARKET PRICES ==================== */}
            {activeTab === "market" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h2 className="text-3xl font-bold">Live Market Prices</h2>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-initial">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search maize, beans..."
                        className="pl-10 pr-4 py-3 border rounded-xl w-full"
                      />
                    </div>
                    <button className="bg-gray-100 p-3 rounded-xl">
                      <Filter className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { product: "Maize (White)", price: "UGX 145,000", change: "+18%", location: "Kampala" },
                    { product: "Beans (Nambale)", price: "UGX 310,000", change: "stable", location: "Central" },
                    { product: "Coffee (Arabica)", price: "UGX 15,800/kg", change: "+8%", location: "Mt. Elgon" },
                    { product: "Matooke", price: "UGX 30,000/bunch", change: "-12%", location: "Mbarara" },
                  ].map((item) => (
                    <div key={item.product} className="bg-white rounded-xl p-5 shadow flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{item.product}</h3>
                        <p className="text-gray-600 text-sm">{item.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">{item.price}</p>
                        <p className={`text-sm ${item.change.includes('+') ? 'text-red-600' : item.change === 'stable' ? 'text-gray-500' : 'text-green-600'}`}>
                          {item.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== SHOP INPUTS ==================== */}
            {activeTab === "shop" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Shop Farm Inputs</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {["Urea 50kg", "DAP 50kg", "Maize Seed", "Pesticide", "Veterinary Drugs", "Tools"].map((item) => (
                    <div key={item} className="bg-white rounded-xl shadow overflow-hidden">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                      <div className="p-5">
                        <h3 className="font-bold text-lg">{item}</h3>
                        <p className="text-gray-600 mt-2">From UGX 45,000</p>
                        <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== MESSAGES ==================== */}
            {activeTab === "messages" && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Messages & Alerts</h2>
                <div className="space-y-4">
                  {[
                    { from: "Extension Officer", msg: "Fall Armyworm reported in your area", time: "2h ago", urgent: true },
                    { from: "Buyer - John", msg: "Interested in your 10 tons maize", time: "5h ago", urgent: false },
                    { from: "AgriConnect", msg: "New fertilizer prices available", time: "1 day ago", urgent: false },
                  ].map((msg, i) => (
                    <div key={i} className={`p-5 rounded-xl ${msg.urgent ? 'bg-red-50 border-2 border-red-300' : 'bg-white shadow'}`}>
                      <div className="flex justify-between">
                        <div>
                          <p className="font-bold">{msg.from}</p>
                          <p className="mt-1">{msg.msg}</p>
                        </div>
                        <p className="text-sm text-gray-500">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== PROFILE ==================== */}
            {activeTab === "profile" && (
              <div className="space-y-6 max-w-2xl">
                <h2 className="text-3xl font-bold">My Profile</h2>
                <div className="bg-white rounded-xl shadow p-8">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 bg-gray-300 rounded-full" />
                    <div>
                      <h3 className="text-2xl font-bold">Musawo Kato</h3>
                      <p className="text-gray-600">Farmer ID: AGR-2025-0481</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-2">
                        <MapPin className="w-5 h-5" /> Wakiso District
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-600">Phone</span>
                      <span className="font-medium">+256 772 123 456</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-gray-600">Total Land</span>
                      <span className="font-medium">12 acres</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-medium">January 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Bottom Nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-2xl z-40">
          <div className="grid grid-cols-5 py-3">
            {menuItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center py-2 transition-all ${
                    activeTab === item.id ? "text-green-600 scale-110" : "text-gray-600"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                  <span className="text-xs mt-1 font-medium">{item.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODALS */}
      {showCropModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Add New Crop</h3>
              <button onClick={() => setShowCropModal(false)}><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Crop Name (e.g. Maize)" value={cropForm.name} onChange={(e) => setCropForm({ ...cropForm, name: e.target.value })} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input type="text" placeholder="Variety (e.g. Longe 10H)" value={cropForm.variety} onChange={(e) => setCropForm({ ...cropForm, variety: e.target.value })} className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
              <input type="date" value={cropForm.plantedDate} onChange={(e) => setCropForm({ ...cropForm, plantedDate: e.target.value })} className="w-full px-4 py-3 border rounded-xl" />
              <button onClick={handleAddCrop} className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700">
                Add Crop
              </button>
            </div>
          </div>
        </div>
      )}

      {showLivestockModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Add Livestock</h3>
              <button onClick={() => setShowLivestockModal(false)}><X className="w-6 h-6" /></button>
            </div>
            <div className="space-y-4">
              <select
                value={livestockForm.type}
                onChange={(e) => setLivestockForm({ ...livestockForm, type: e.target.value })}
                className="w-full px-4 py-3 border rounded-xl"
              >
                <option>CatIcons</option>
                <option>Goats</option>
                <option>Pigs</option>
                <option>Chickens</option>
              </select>
              <input
                type="number"
                placeholder="Number of animals"
                value={livestockForm.count}
                onChange={(e) => setLivestockForm({ ...livestockForm, count: e.target.value })}
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button onClick={handleAddLivestock} className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700">
                Add Animals
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}