"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

interface Product {
  id: number;
  title: string;
  category: string;
  region: string;
  price: string;
  img: string;
  supplier: string;
  site: string;
}

const categories = [
  "Seeds",
  "Fertilizers",
  "Agro Machinery",
  "Livestock Feed",
  "Veterinary Products",
  "Irrigation Tools",
];

const regions = ["Central", "Western", "Eastern", "Northern"];

const products: Product[] = [
  { id: 1, title: "Hybrid Maize Seeds", category: "Seeds", region: "Central", price: "UGX 120,000 / 50kg", img: "https://images.pexels.com/photos/2213575/pexels-photo-2213575.jpeg", supplier: "Amazon Seeds", site: "amazonseedsug.com" },
  { id: 2, title: "Tomato Seeds", category: "Seeds", region: "Western", price: "UGX 30,000 / 1kg", img: "https://images.pexels.com/photos/1050280/pexels-photo-1050280.jpeg", supplier: "SmartFarming UG", site: "smartfarmingug.com/shop/" },
  { id: 3, title: "Beans Seeds", category: "Seeds", region: "Eastern", price: "UGX 35,000 / 1kg", img: "https://images.pexels.com/photos/4211111/pexels-photo-4211111.jpeg", supplier: "Kofs Agro", site: "bnivictorious.ug/businesses/kofs-agro-inputs-u-ltd/" },
  { id: 4, title: "Rice Seeds", category: "Seeds", region: "Northern", price: "UGX 50,000 / 1kg", img: "https://images.pexels.com/photos/1043807/pexels-photo-1043807.jpeg", supplier: "Eraja Agro", site: "erajagrow.com" },
  { id: 5, title: "Organic Fertilizer", category: "Fertilizers", region: "Central", price: "UGX 85,000 / 50kg", img: "https://images.pexels.com/photos/4207900/pexels-photo-4207900.jpeg", supplier: "Kofs Agro", site: "bnivictorious.ug/businesses/kofs-agro-inputs-u-ltd/" },
  { id: 6, title: "NPK 20-10-10", category: "Fertilizers", region: "Western", price: "UGX 90,000 / 50kg", img: "https://images.pexels.com/photos/4142761/pexels-photo-4142761.jpeg", supplier: "Amazon Seeds", site: "amazonseedsug.com" },
  { id: 7, title: "UREA Fertilizer", category: "Fertilizers", region: "Eastern", price: "UGX 80,000 / 50kg", img: "https://images.pexels.com/photos/4199092/pexels-photo-4199092.jpeg", supplier: "SmartFarming UG", site: "smartfarmingug.com/shop/" },
  { id: 8, title: "DAP Fertilizer", category: "Fertilizers", region: "Northern", price: "UGX 88,000 / 50kg", img: "https://images.pexels.com/photos/4342543/pexels-photo-4342543.jpeg", supplier: "Eraja Agro", site: "erajaagro.co.ug" },
  { id: 9, title: "Tractor Hire", category: "Agro Machinery", region: "Central", price: "UGX 1,500,000 / day", img: "https://images.pexels.com/photos/2889137/pexels-photo-2889137.jpeg", supplier: "AgroEquip Ltd", site: "agroequipltd.com" },
  { id: 10, title: "Maize Sheller", category: "Agro Machinery", region: "Western", price: "UGX 450,000", img: "https://images.pexels.com/photos/4344025/pexels-photo-4344025.jpeg", supplier: "Kenchic", site: "kenchic.com" },
  { id: 11, title: "Irrigation Pump", category: "Agro Machinery", region: "Eastern", price: "UGX 500,000", img: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg", supplier: "Eraja Agro", site: "erajaagro.co.ug" },
  { id: 12, title: "Hand Hoe", category: "Agro Machinery", region: "Northern", price: "UGX 15,000", img: "https://images.pexels.com/photos/5732826/pexels-photo-5732826.jpeg", supplier: "Paradise Animal Clinic", site: "paradiseanimalclinicug.com" },
  { id: 13, title: "Layer Feed (20kg)", category: "Livestock Feed", region: "Central", price: "UGX 70,000", img: "https://images.pexels.com/photos/4194856/pexels-photo-4194856.jpeg", supplier: "SmartFarming UG", site: "smartfarmingug.com/shop/" },
  { id: 14, title: "Cattle Feed (50kg)", category: "Livestock Feed", region: "Western", price: "UGX 150,000", img: "https://images.pexels.com/photos/466780/pexels-photo-466780.jpeg", supplier: "Kofs Agro", site: "bnivictorious.ug/businesses/kofs-agro-inputs-u-ltd/" },
  { id: 15, title: "Pig Feed (20kg)", category: "Livestock Feed", region: "Eastern", price: "UGX 60,000", img: "https://images.pexels.com/photos/5932/pig-farm-pigs-piglets.jpg", supplier: "Amazon Seeds", site: "amazonseedsug.com" },
  { id: 16, title: "Goat Feed (20kg)", category: "Livestock Feed", region: "Northern", price: "UGX 55,000", img: "https://images.pexels.com/photos/2330938/pexels-photo-2330938.jpeg", supplier: "Eraja Agro", site: "erajaagro.co.ug" },
  { id: 17, title: "Goat Dewormer Injection", category: "Veterinary Products", region: "Central", price: "UGX 18,000 / 100ml", img: "https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg", supplier: "Kofs Agro", site: "bnivictorious.ug/businesses/kofs-agro-inputs-u-ltd/" },
  { id: 18, title: "Newcastle Vaccine", category: "Veterinary Products", region: "Western", price: "UGX 25,000", img: "https://images.pexels.com/photos/2098760/pexels-photo-2098760.jpeg", supplier: "SmartFarming UG", site: "smartfarmingug.com/shop/" },
  { id: 19, title: "Livestock Antibiotics", category: "Veterinary Products", region: "Eastern", price: "UGX 22,000", img: "https://images.pexels.com/photos/327416/pexels-photo-327416.jpeg", supplier: "Eraja Agro", site: "erajaagro.co.ug" },
  { id: 20, title: "Vitamin Supplement", category: "Veterinary Products", region: "Northern", price: "UGX 20,000", img: "https://images.pexels.com/photos/433988/pexels-photo-433988.jpeg", supplier: "Paradise Animal Clinic", site: "paradiseanimalclinicug.com" },
  { id: 21, title: "Drip Kit", category: "Irrigation Tools", region: "Central", price: "UGX 250,000", img: "https://images.pexels.com/photos/590373/pexels-photo-590373.jpeg", supplier: "Eraja Agro", site: "erajaagro.co.ug" },
  { id: 22, title: "Sprinkler System", category: "Irrigation Tools", region: "Western", price: "UGX 300,000", img: "https://images.pexels.com/photos/590373/pexels-photo-590373.jpeg", supplier: "Kenchic", site: "kenchic.com" },
  { id: 23, title: "Solar Water Pump", category: "Irrigation Tools", region: "Eastern", price: "UGX 450,000", img: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg", supplier: "Amazon Seeds", site: "amazonseedsug.com" },
  { id: 24, title: "Water Hose 50m", category: "Irrigation Tools", region: "Northern", price: "UGX 40,000", img: "https://images.pexels.com/photos/6006/pexels-photo.jpg", supplier: "Bukoola", site: "https://bukoolachemicals.com/shop/" },
];

// Carousel images
const carouselImages = [
  "https://images.unsplash.com/photo-1708417134532-58723b020afe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxidXklMjBmYXJtJTIwaW5wdXRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1660341600197-1976328be88f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxidXklMjBmYXJtJTIwaW5wdXRzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661883044790-9c4342a4639c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0dGxlJTIwdmFjY2luZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1575015826404-cbe87877467f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvdWx0cnklMjB2YWNjaW5lc3xlbnwwfHwwfHx8MA%3D%3D",
];

export default function Market() {
  const [cart, setCart] = useState<Product[]>([]);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterRegion, setFilterRegion] = useState<string | null>(null);
  const [filterSupplier, setFilterSupplier] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBySearch, setFilterBySearch] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const suppliers = Array.from(new Set(products.map((p) => p.supplier)));

  // FILTER LOGIC
  const filteredProducts = products.filter((product) => {
    return (
      (!filterCategory || product.category === filterCategory) &&
      (!filterRegion || product.region === filterRegion) &&
      (!filterSupplier || product.supplier === filterSupplier) &&
      (!filterBySearch ||
        product.title.toLowerCase().includes(filterBySearch.toLowerCase()))
    );
  });

  // ADD TO CART
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

  const goToSlide = (i: number) => setCurrentSlide(i);

  return (
    <main className="w-full bg-gray-50 dark:bg-gray-900">

      {/* =====================================
            HERO SECTION (NEW BEAUTIFUL DESIGN)
      ====================================== */}
      <section className="w-full bg-gradient-to-br from-green-700 to-green-500 dark:from-green-900 dark:to-green-700 text-white py-12 shadow-xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-6 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow">
              Uganda’s Largest Online Agro-Input Marketplace
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Trusted suppliers • Verified quality • Nationwide delivery.
              Find the right agricultural inputs at the right price.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                ✔ 100% Verified Input Suppliers
              </div>
              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                🚚 Delivery to All Districts in Uganda
              </div>
              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                🔒 Secure Online Payments
              </div>
            </div>

          </div>

          {/* RIGHT SLIDER */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20">
            <Image
              src={carouselImages[currentSlide]}
              alt="Farm Inputs"
              fill
              className="object-cover transition duration-700"
            />

            {/* SLIDER BUTTONS */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full"
            >
              <CircleArrowLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full"
            >
              <CircleArrowRight />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-4 flex w-full justify-center gap-2">
              {carouselImages.map((_, i) => (
                <span
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    currentSlide === i ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
           SEARCH BAR (NEW DESIGN)
      ================================ */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex gap-3 items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 border border-gray-200 dark:border-gray-700">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 text-gray-800 dark:text-white bg-transparent outline-none text-lg"
          />

          <Button
            onClick={() => setFilterBySearch(searchTerm)}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 text-lg rounded-lg"
          >
            Search
          </Button>
        </div>
      </section>

      {/* ==============================================
           FILTER SECTION (NEW CARD-STYLE LAYOUT)
      =============================================== */}
      <section className="max-w-7xl mx-auto px-6 mt-10 grid lg:grid-cols-3 gap-8">

        {/* CATEGORY FILTER */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setFilterCategory(null)}
              variant={!filterCategory ? "default" : "outline"}
              className={`rounded-full ${!filterCategory && "bg-green-700 text-white"}`}
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                variant={filterCategory === cat ? "default" : "outline"}
                className={`rounded-full ${
                  filterCategory === cat && "bg-green-700 text-white"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* REGIONS */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Filter by Region</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setFilterRegion(null)}
              variant={!filterRegion ? "default" : "outline"}
              className={`rounded-full  ${!filterRegion && "bg-green-700 text-white"}`}
            >
              All
            </Button>
            {regions.map((reg) => (
              <Button
                key={reg}
                onClick={() => setFilterRegion(reg)}
                variant={filterRegion === reg ? "default" : "outline"}
                className={`rounded-full ${
                  filterRegion === reg && "bg-green-700 text-white"
                }`}
              >
                {reg}
              </Button>
            ))}
          </div>
        </div>

        {/* SUPPLIERS */}
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Filter by Supplier</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setFilterSupplier(null)}
              variant={!filterSupplier ? "default" : "outline"}
              className={`rounded-full ${!filterSupplier && "bg-green-700 text-white"}`}
            >
              All
            </Button>
            {suppliers.map((sup) => (
              <Button
                key={sup}
                onClick={() => setFilterSupplier(sup)}
                variant={filterSupplier === sup ? "default" : "outline"}
                className={`rounded-full ${
                  filterSupplier === sup && "bg-green-700 text-white"
                }`}
              >
                {sup}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================
            PRODUCT GRID (NEW DESIGN)
      ===================================== */}
      <section className="max-w-7xl mx-auto px-6 mt-12 mb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {p.title}
                </h3>

                <p className="text-green-700 dark:text-green-400 font-bold">
                  {p.price}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {p.category} • {p.region}
                </p>

                <p className="text-xs text-gray-400">
                  Supplier: {p.supplier}
                </p>

                <a
                  href={p.site.startsWith("http") ? p.site : `https://${p.site}`}
                  target="_blank"
                >
                  <Button className="w-full mt-3 bg-green-700 hover:bg-green-800 text-white">
                    Buy Now
                  </Button>
                </a>

                
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-300 col-span-full text-lg py-10">
              No products match your filters.
            </p>
          )}
        </div>
      </section>

     
    </main>
  );
}