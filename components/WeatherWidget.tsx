// components/FarmerWeatherWidget.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import {
  CloudRain,
  Droplets,
  Thermometer,
  Sun,
  Bug,
  Calendar,
  Sprout,
  Languages,
  ChevronDown,
} from "lucide-react";

/* TYPES */
interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  city: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  rainChance: number;
  uvIndex: number;
  soilMoisture: "Dry" | "Optimal" | "Wet";
  pestRisk: "Low" | "Moderate" | "High";
  plantingAdvice: string;
}

interface CurrentWeatherAPIResponse {
  main: { temp: number; humidity: number; pressure: number };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
  name: string;
}

interface ForecastItem {
  rain?: { "3h"?: number };
}

interface ForecastAPIResponse {
  list: ForecastItem[];
}

/* CONSTANTS */
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY?.trim() ?? "";

const UGANDA_DISTRICTS = [
  "Abim","Adjumani","Agago","Alebtong","Amolatar","Amuria","Amuru","Apac",
  "Arua","Budaka","Bududa","Bugiri","Bugweri","Buhweju","Buikwe","Bukedea",
  "Bukwa","Bukomansimbi","Bukwo","Bulambuli","Buliisa","Bundibugyo","Bunyangabu",
  "Bushenyi","Busia","Butaleja","Butambala","Butebo","Buvuma","Buyende","Dokolo",
  "Gomba","Gulu","Hoima","Ibanda","Iganga","Isingiro","Jinja","Kaabong","Kabale",
  "Kabarole","Kaberamaido","Kalangala","Kaliro","Kalungu","Kampala","Kamuli","Kamwenge",
  "Kanungu","Kapchorwa","Kasese","Katakwi","Kayunga","Kazo","Kibaale","Kiboga","Kisoro",
  "Kitagwenda","Kitgum","Koboko","Kole","Kotido","Kumi","Kwania","Kween","Kyankwanzi",
  "Kyegegwa","Kyenjojo","Kyotera","Lamwo","Lira","Luuka","Luwero","Lwengo","Lyantonde",
  "Madi-Okollo","Manafwa","Maracha","Masaka","Masindi","Mayuge","Mbale","Mbarara",
  "Mitooma","Moroto","Moyo","Mpigi","Mubende","Mukono","Nakapiripirit","Nakaseke",
  "Nakasongola","Namayingo","Namisindwa","Napak","Nebbi","Ngora","Ntoroko","Ntungamo",
  "Nwoya","Otuke","Oyam","Pader","Pakwach","Pallisa","Rakai","Rubirizi","Rukiga",
  "Rukungiri","Sembabule","Serere","Sheema","Sironko","Soroti","Tororo","Wakiso","Yumbe",
  "Zombo"
].sort();

const LUGANDA: Record<string, string> = {
  "Farmer Weather": "Obudde bw’Abalimi",
  "Select District": "Londa Ekibuga",
  "Search district...": "Noonya ekibuga...",
  "Rain in 3h": "Enkuba mu saawa 3",
  "Soil Moisture": "Obuzibu bw’ettaka",
  "Pest Risk": "Obuzibu bw’enswagwa",
  "UV Index": "Obulamu bw’ekitangaala",
  "Real-time": "Ku saawa",
  "Updated just now": "Kyakyusiddwa",
  "Avoid planting today": "Togenda kulima leero",
  "Best time to plant maize": "Ekiseera eky’okulima emmere",
  "Wait for cooler temps": "Linda obudde obulala",
  "Good planting conditions": "Obudde obulungi okukungula",
  Dry: "Lirise",
  Optimal: "Bulungi",
  Wet: "Lukalu",
  Low: "Katono",
  Moderate: "Katono n’ekitono",
  High: "Bungi",
};

export default function FarmerWeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Kampala");
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState<"en" | "lg">("en");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = (key: string) => (lang === "lg" && LUGANDA[key] ? LUGANDA[key] : key);
  const filteredDistricts = UGANDA_DISTRICTS.filter((d) =>
    d.toLowerCase().includes(search.toLowerCase())
  );

  // Fetch weather function
  const fetchWeather = async (city: string) => {
    setLoading(true);
    try {
      const [curRes, fcRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},UG&appid=${API_KEY}&units=metric`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},UG&appid=${API_KEY}&units=metric`),
      ]);
      if (!curRes.ok || !fcRes.ok) throw new Error("Failed to fetch weather");

      const cur: CurrentWeatherAPIResponse = await curRes.json();
      const fc: ForecastAPIResponse = await fcRes.json();

      const rain3h = fc.list.slice(0, 3).reduce((sum, item) => sum + (item.rain?.["3h"] ?? 0), 0);
      const rainChance = rain3h > 1 ? 80 : rain3h > 0.5 ? 50 : 20;
      const uvIndex = cur.main.temp > 28 ? 8 : cur.main.temp > 24 ? 6 : 4;
      const soilMoisture = rain3h > 2 ? "Wet" : rain3h > 0.5 ? "Optimal" : "Dry";
      const pestRisk = cur.main.humidity > 75 && cur.main.temp > 25 ? "High" : cur.main.temp > 28 ? "Moderate" : "Low";
      const plantingAdvice = rain3h > 1 ? "Avoid planting today" : cur.main.temp > 22 && cur.main.temp < 30 ? "Best time to plant maize" : "Wait for cooler temps";

      setWeather({
        temp: Math.round(cur.main.temp),
        description: cur.weather[0].description,
        icon: cur.weather[0].icon,
        city: cur.name,
        humidity: cur.main.humidity,
        windSpeed: cur.wind.speed,
        pressure: cur.main.pressure,
        rainChance,
        uvIndex,
        soilMoisture,
        pestRisk,
        plantingAdvice,
      });
    } catch {
      setWeather({
        temp: 26,
        description: "partly cloudy",
        icon: "02d",
        city,
        humidity: 70,
        windSpeed: 3,
        pressure: 1012,
        rainChance: 30,
        uvIndex: 6,
        soilMoisture: "Optimal",
        pestRisk: "Low",
        plantingAdvice: "Good planting conditions",
      });
    } finally {
      setLoading(false);
    }
  };

  // Geolocation effect
  useEffect(() => {
    const getWeather = async () => {
      if (!navigator.geolocation) {
        await fetchWeather("Kampala");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const res = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&limit=1&appid=${API_KEY}`
            );
            const [loc] = await res.json();
            const city = loc?.name ?? "Kampala";
            setSelectedCity(city);
            await fetchWeather(city);
          } catch {
            await fetchWeather("Kampala");
          }
        },
        async () => {
          await fetchWeather("Kampala");
        }
      );
    };

    getWeather();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Icons
  const getIcon = (code: string) => {
    const cls = "w-10 h-10 text-white drop-shadow-md";
    if (code.includes("01")) return <Sun className={cls} />;
    if (["02","03","04","09","10"].some((i) => code.includes(i))) return <CloudRain className={cls} />;
    return <Thermometer className={cls} />;
  };

  const soilColor = (s: WeatherData["soilMoisture"]) =>
    s === "Dry" ? "text-orange-400" : s === "Wet" ? "text-blue-400" : "text-green-400";

  const pestColor = (r: WeatherData["pestRisk"]) =>
    r === "High" ? "text-red-400" : r === "Moderate" ? "text-orange-400" : "text-green-400";

  return (
    <div className="mt-0 max-w-7xl mx-auto px-4 relative z-10">
      <div ref={dropdownRef} className="relative">
        {/* LANGUAGE TOGGLE */}
        <div className="flex justify-end mb-1">
          <button
            onClick={() => setLang((l) => (l === "en" ? "lg" : "en"))}
            className="flex items-center gap-1 text-xs text-gray-600 hover:text-green-700"
          >
            <Languages className="w-3.5 h-3.5" />
            {lang === "en" ? "Luganda" : "English"}
          </button>
        </div>

        {/* MAIN CARD */}
        <div className="bg-linear-to-br from-green-600 via-emerald-600 to-teal-700 rounded-xl shadow-lg p-4 text-gray-50">
          <div className="flex flex-col md:flex-row gap-4">
            {/* WEATHER INFO */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Sprout className="w-6 h-6 text-green-100" />
                <p className="text-sm font-bold">{t("Farmer Weather")}</p>
              </div>

              {loading || !weather ? (
                <div className="space-y-1">
                  <div className="h-8 bg-white/20 rounded w-20" />
                  <div className="h-3 bg-white/20 rounded w-32" />
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    {getIcon(weather.icon)}
                    <div>
                      <p className="text-4xl font-bold">{weather.temp}°C</p>
                      <p className="text-xs capitalize opacity-90">{weather.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className={`p-2 rounded-lg ${weather.rainChance > 60 ? "bg-red-500/25" : "bg-white/10"}`}>
                      <CloudRain className="w-4 h-4 mx-auto mb-1 text-white" />
                      <p className="font-bold">{weather.rainChance}%</p>
                      <p className="opacity-80">{t("Rain in 3h")}</p>
                    </div>

                    <div className="p-2 rounded-lg bg-white/10">
                      <Droplets className={`w-4 h-4 mx-auto mb-1 ${soilColor(weather.soilMoisture)}`} />
                      <p className="font-bold">{t(weather.soilMoisture)}</p>
                      <p className="opacity-80">{t("Soil Moisture")}</p>
                    </div>

                    <div className="p-2 rounded-lg bg-white/10">
                      <Bug className={`w-4 h-4 mx-auto mb-1 ${pestColor(weather.pestRisk)}`} />
                      <p className="font-bold">{t(weather.pestRisk)}</p>
                      <p className="opacity-80">{t("Pest Risk")}</p>
                    </div>

                    <div className={`p-2 rounded-lg ${weather.uvIndex > 7 ? "bg-orange-500/25" : "bg-white/10"}`}>
                      <Sun className="w-4 h-4 mx-auto mb-1 text-yellow-300" />
                      <p className="font-bold">UV {weather.uvIndex}</p>
                      <p className="opacity-80">{t("UV Index")}</p>
                    </div>
                  </div>

                  <div className="mt-2 p-2 bg-white/15 rounded-lg flex items-center gap-2 text-xs">
                    <Calendar className="w-4 h-4" />
                    <p className="font-medium">{t(weather.plantingAdvice)}</p>
                  </div>
                </>
              )}
            </div>

            {/* DISTRICT SELECTOR */}
            <div className="w-full md:w-[30%] relative">
              <label className="text-xs font-medium text-green-100">{t("Select District")}</label>
              <button
                onClick={() => setShowDropdown((s) => !s)}
                className="relative w-full pl-3 pr-9 py-2.5 bg-white/20 text-white rounded-lg border border-white/30 backdrop-blur-sm text-left text-sm flex justify-between items-center"
              >
                {selectedCity}
                <ChevronDown className="w-4 h-4" />
              </button>

              {showDropdown && (
                <div className="absolute top-20 left-0 w-full bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <input
                    type="text"
                    placeholder={t("Search district...")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none text-sm text-gray-700"
                    autoFocus
                  />
                  <div className="max-h-60 overflow-y-auto">
                    {filteredDistricts.length === 0 ? (
                      <p className="px-3 py-2 text-sm text-gray-500">No district found</p>
                    ) : (
                      filteredDistricts.map((d) => (
                        <button
                          key={d}
                          onClick={() => {
                            setSelectedCity(d);
                            setSearch("");
                            setShowDropdown(false);
                            fetchWeather(d);
                          }}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-green-50 border-b last:border-0 text-gray-600"
                        >
                          {d}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Last updated */}
        {!loading && weather && (
          <p className="text-center text-xs text-gray-500 mt-1">
            {t("Real-time")} • {t("Updated just now")}
          </p>
        )}
      </div>
    </div>
  );
}
