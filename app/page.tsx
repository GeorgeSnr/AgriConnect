// app/page.tsx
"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { LogIn, ChevronLeft, ChevronRight } from "lucide-react";
import WeatherWidget from "@/components/WeatherWidget";
import Marketplace from "@/components/Marketplace";
import CropManagement from "@/components/Cropmanagement";
import LivestockManagement from "@/components/Livestockmanagement";
import MarketPrices from "@/components/Marketprice";
import FarmerDashboardFeature from "@/components/Dashboardfeature";

interface Feature {
  href: string;
  title: string;
  desc: string;
  img: string;
  width: number;
  height: number;
}

const features: Feature[] = [
  {
    href: "/market-prices",
    title: "Market Prices",
    desc: "Real-time prices for maize, beans, coffee, and livestock in Ugandan markets.",
    img: "https://images.pexels.com/photos/533189/pexels-photo-533189.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
    width: 1200,
    height: 800,
  },
  {
    href: "/crop-management",
    title: "Crop Management",
    desc: "Seasonal planting calendars for Central, Eastern, and Northern Uganda regions.",
    img: "https://media.istockphoto.com/id/1371705013/photo/3d-illustration-of-smart-farming-concept-tractor-on-a-smartphone-farm-online-management-ads.jpg?s=612x612&w=0&k=20&c=fD_RrwKligg6_W1qw3CS9h8clfUy9_8mCLAVL8H3T3o=",
    width: 1200,
    height: 800,
  },
  {
  href: "/livestock-management",
  title: "Livestock Management",
  desc: "Vaccination schedules and feeding guides for Ankole cattle and local goats.",
  img: "https://media.istockphoto.com/id/2203280073/photo/young-male-farmer-using-a-digital-tablet-to-inspect-cows-on-a-livestock-farm.jpg?s=612x612&w=0&k=20&c=FlcQ72UedbTMo2_xi4QdAPqCrhYzFP8gZJbxmnFviC0=",
  width: 1200,
  height: 800,
},
  {
    href: "/marketplace",
    title: "Marketplace",
    desc: "Buy certified seeds, fertilizers, and tools from verified Kampala suppliers.",
    img: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
    width: 1200,
    height: 800,
  },
  {
  href: "/farm-records",
  title: "Farm Records",
  desc: "Digital logbooks to track inputs, labor, yields, and income in UGX for Ugandan smallholder farms.",
  img: "/records.avif",
  width: 1200,
  height: 800,
},
  {
    href: "/dashboard",
    title: "Dashboard",
    desc: "Analytics on rainfall patterns, soil health, and cooperative performance.",
    img: "https://media.istockphoto.com/id/2173244351/photo/businessman-holding-tablet-with-virtual-farming-map-screen-global-strategy-planning-planning.jpg?s=612x612&w=0&k=20&c=B3EkAhkPDMugW02O6jxCPiGZHpkwAyAJXJT3tZLxrDc=",
    width: 1200,
    height: 800,
  },
  {
    href: "/forum",
    title: "Community Forum",
    desc: "Ask NAADS experts and connect with farmers from Karamoja to Buganda.",
    img: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
    width: 1200,
    height: 800,
  },
];

/* --------------------------------------------------------------
   FAST & CONTROLLED CAROUSEL
   -------------------------------------------------------------- */
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "ease-in-out",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  pauseOnHover: true,
  lazyLoad: "ondemand" as const,
  adaptiveHeight: false,
  appendDots: (dots: React.ReactNode) => (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
      {dots}
    </div>
  ),
  customPaging: () => (
    <button className="w-1.5 h-1.5 rounded-full bg-white/70 hover:bg-white transition-all duration-300" />
  ),
};

/* --------------------------------------------------------------
   CUSTOM ARROW COMPONENTS
   -------------------------------------------------------------- */
function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all hover:scale-110"
      aria-label="Previous"
    >
      <ChevronLeft className="w-5 h-5 text-green-700" />
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all hover:scale-110"
      aria-label="Next"
    >
      <ChevronRight className="w-5 h-5 text-green-700" />
    </button>
  );
}

/* --------------------------------------------------------------
   MAIN COMPONENT – TIGHT LAYOUT
   -------------------------------------------------------------- */
export default function HomePage() {
  return (
    <section className="relative min-h-screen">
      {/* Floating Login */}
      <Link
        href="/auth"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2.5 bg-green-700 text-white text-sm font-medium rounded-full shadow-lg hover:bg-green-800 transition-all hover:scale-105"
      >
        <LogIn className="w-4 h-4" />
        Login
      </Link>

      {/* Weather Widget – ZERO GAP to navbar */}
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <WeatherWidget />
      </div>

      {/* Hero Carousel – Minimal margin */}
      <div className="mx-3 md:mx-6 mt-4 pb-2 ">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Slider {...sliderSettings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
            {features.map((f, idx) => (
              <div key={f.href} className="relative h-64 md:h-80 lg:h-96">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoKAAgAAQAcJaACdLoAAD+3gAAA"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-5 md:p-8 text-white max-w-xl">
                    <h3 className="text-xl md:text-3xl font-bold mb-1.5 drop-shadow-md">
                      {f.title}
                    </h3>
                    <p className="text-sm md:text-base opacity-90 drop-shadow">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Marketplace/>
        <CropManagement/>
        <LivestockManagement/>
        <MarketPrices/>
        <FarmerDashboardFeature/>
      </div>
      
    </section>
  );
}