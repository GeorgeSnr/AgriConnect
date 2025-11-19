"use client";

import { useState } from "react";
import { Bird, Calendar, Cat, CheckCircle2, ChevronDown, Download, Home, MessageCircle, PiggyBank, Shield, TrendingUp } from "lucide-react";

// Homepage: app/page.tsx
export default function LivestockManagement() {
  const [activeAnimal, setActiveAnimal] = useState("cattle");
  // Practices with detailed info for each livestock type
  const practices: Record<string, { health: string[]; breeding: string[]; nutrition: string[]; housing_land: string[]; marketing_infra: string[] }> = {
    cattle: {
      health: [
        "Vaccinate against common diseases like Rinderpest, FMD, and Blackleg.",
        "Regular deworming and tick control.",
        "Maintain vaccination schedule with local vet services.",
        "Practice good hygiene: Clean housing and equipment regularly.",
        "Monitor animals for signs of illness and seek veterinary care promptly."
      ],
      breeding: [
        "Select breeds suited to the local environment such as Ankole or crossbreeds.",
        "Implement artificial insemination (AI) or natural mating during heat.",
        "Maintain good record-keeping for breeding cycles.",
        "Provide high-quality feed to support reproductive health."
      ],
      nutrition: [
        "Provide balanced diet: 60kg fresh Napier + 3kg dairy meal for lactation.",
        "Supplement with minerals and vitamins as needed.",
        "Ensure access to clean, fresh water at all times.",
        "Make silage during June–July for dry season feeding."
      ],
      housing_land: [
        "Implement zero-grazing units with raised floors and good ventilation.",
        "Use manure composting for soil fertility.",
        "Control overgrazing with paddocks and rotational grazing."
      ],
      marketing_infra: [
        "Grade animals before selling to fetch good prices.",
        "Join local cooperatives and WhatsApp groups for market access.",
        "Build secure fencing and infrastructure to protect livestock."
      ],
    },
    goats: {
      health: [
        "Vaccinate against PPR and other endemic diseases.",
        "Deworm regularly every 3 months.",
        "Practice quarantine of new animals.",
        "Maintain clean housing to prevent parasites."
      ],
      breeding: [
        "Select breeds like Small East African or Boer crosses.",
        "Use natural mating or AI during estrus.",
        "Maintain breeding records for performance tracking."
      ],
      nutrition: [
        "Calliandra fence as a protein source.",
        "Provide 1kg concentrate for lactating does.",
        "Ensure access to clean water.",
        "Supplement with minerals and salt blocks."
      ],
      housing_land: [
        "Raised wire cages or slatted floors to prevent worms.",
        "Rotational grazing to avoid overgrazing.",
        "Plant fodder crops like Brachiaria."
      ],
      marketing_infra: [
        "Target buyers looking for high-quality meat or breeding stock.",
        "Join local markets and cooperatives.",
        "Build secure pens and fencing."
      ],
    },
    pigs: {
      health: [
        "Ensure iron injections on day 3 of piglets' age.",
        "Avoid ASF; cook swill at 100°C if used as feed.",
        "Maintain clean pens and proper waste disposal.",
        "Vaccinate against common pig diseases if available."
      ],
      breeding: [
        "Select healthy breeding boars and sows.",
        "Use AI or natural service during estrus cycle.",
        "Maintain breeding records for litter performance."
      ],
      nutrition: [
        "Use fermented bedding to reduce smell and improve manure quality.",
        "Provide high-quality feed with adequate protein and energy.",
        "Ensure constant supply of clean water."
      ],
      housing_land: [
        "Deep litter system with rice husk, sawdust, microbes.",
        "Proper ventilation and drainage.",
        "Segregate breeding stock from fatteners."
      ],
      marketing_infra: [
        "Find reliable markets for pork, live pigs, or processed products.",
        "Ensure secure fencing and access roads.",
        "Build a pig pen with good hygiene and biosecurity."
      ],
    },
    poultry: {
      health: [
        "Vaccinate against Newcastle, Gumboro, and other diseases.",
        "Practice strict biosecurity: disinfect footwear and equipment.",
        "Maintain clean litter and proper ventilation.",
        "Treat wounds and monitor for respiratory issues."
      ],
      breeding: [
        "Use high-yielding breeds for broilers or layers.",
        "Implement all-in-all-out systems for disease control.",
        "Maintain records of hatchability and productivity."
      ],
      nutrition: [
        "Provide balanced feed: starter, grower, finisher for broilers.",
        "Supplement with oyster shell for eggshell strength.",
        "Ensure continuous access to clean water.",
        "Use feeders and drinkers that minimize wastage."
      ],
      housing_land: [
        "Deep litter system with wood shavings or rice husk.",
        "Ensure proper orientation (East-West) for cooling.",
        "Build a predator-proof shelter."
      ],
      marketing_infra: [
        "Identify buyers for live or processed products.",
        "Maintain hygiene and biosecurity to meet market standards.",
        "Build secure, ventilated housing."
      ],
    },
    sheep: {
      health: [
        "Deworm every 3–4 months.",
        "Vaccinate against footrot, tetanus, and other diseases.",
        "Practice good hygiene in housing.",
        "Monitor for signs of parasites or illness."
      ],
      breeding: [
        "Select breeds suited for meat or wool, like Merino or Dorper.",
        "Use natural or AI breeding during heat.",
        "Record breeding and lambing details."
      ],
      nutrition: [
        "Graze and supplement with hay or pasture during dry season.",
        "Provide clean water at all times.",
        "Use mineral blocks and salt."
      ],
      housing_land: [
        "Rotational grazing to prevent overgrazing.",
        "Manage manure for soil fertility.",
        "Provide shelter from extreme weather."
      ],
      marketing_infra: [
        "Market lambs and wool locally or regionally.",
        "Join cooperative markets.",
        "Ensure animal health and cleanliness for premium prices."
      ],
    },
    rabbits: {
      health: [
        "Deworm every 3–4 months.",
        "Maintain clean cages and good ventilation.",
        "Vaccinate against myxomatosis and viral hemorrhagic disease if available.",
        "Monitor for signs of stress or disease."
      ],
      breeding: [
        "Breed every 42 days for quick turnover.",
        "Use high-quality breeding stock.",
        "Record breeding and litter data."
      ],
      nutrition: [
        "70% forage + 30% pellets.",
        "Provide fresh water daily.",
        "Offer greens and vegetables for variety."
      ],
      housing_land: [
        "Wire cages with slatted floors.",
        "Ensure shade and ventilation.",
        "Clean cages daily."
      ],
      marketing_infra: [
        "Target local markets for meat and breeding stock.",
        "Ensure hygiene for premium prices.",
        "Build secure enclosures."
      ],
    }
  };



  return (
    <>
      {/* HERO - Full Screen */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white flex items-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-3 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 backdrop-blur p-6 rounded-full">
              <Cat className="w-20 h-20" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-3">AgriConnect</h1>
          <p className="text-xl md:text-3xl mb-4 opacity-90">Uganda’s best Livestock Farming Platform</p>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Daily prices • Best practices • Free guides in Luganda • Talk to a vet instantly
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/dashboard" className="bg-white text-emerald-600 px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition shadow-xl">
              Start Farming Smarter
            </a>
            <a href="tel:0800200300" className="bg-white/20 backdrop-blur border-2 border-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/30 transition">
              Call Free: 0800 200 300
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10" />
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-100 mb-8">Trusted by 120,000+ farmers across Uganda</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            {["NAADS", "Operation Wealth Creation", "Heifer International", "Pearl Dairy", "Jeshi la Maziwa"].map(partner => (
              <div key={partner} className="text-2xl font-bold text-gray-100">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVESTOCK HUB */}
      <section className="py-10 bg-green-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">One App for All Your Animals</h2>

          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { animal: "Cattle", icon: Cat, color: "emerald", benefit: "20–30L milk/day possible" },
              { animal: "Goats", icon: Cat, color: "lime", benefit: "Earn UGX 3M+ per year" },
              { animal: "Pigs", icon: PiggyBank, color: "pink", benefit: "80kg in just 6 months" },
              { animal: "Poultry", icon: Bird, color: "amber", benefit: "280+ eggs per hen" },
              { animal: "Sheep", icon: Bird, color: "stone", benefit: "Low cost, high demand" },
              { animal: "Rabbits", icon: Bird, color: "violet", benefit: "Breed every 42 days" },
            ].map(item => (
              <div key={item.animal} className="text-center group">
                <div className={`inline-block p-2 rounded-3xl bg-${item.color}-50 group-hover:scale-110 transition shadow-lg`}>
                  <item.icon className={`w-18 h-18 text-${item.color}-300`} />
                </div>
                <h3 className="text-2xl font-bold mt-3">{item.animal}</h3>
                <p className="text-gray-600 mt-2">{item.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Select Your Livestock to see best Practices</h2>
      <div className="text-balck font-bold w-4 h-4 mx-[50%] animate-bounce">
        <ChevronDown/>
      </div>
      
      {/* ===================================================== */}
{/* Practices for selected livestock */}
      {/* PRACTICES – NOW WITH BEAUTIFUL 2-COLUMN CARDS */}
<section className="mt-6 mb-4 max-w-7xl mx-auto px-4">
    
  {/* Tabs */}
  <div className="flex flex-wrap gap-4 mb-12 justify-center">
    {Object.keys(practices).map((animal) => (
      <button
        key={animal}
        className={`px-6 py-3 rounded-xl font-semibold transition text-lg shadow 
          ${
            activeAnimal === animal
              ? "bg-emerald-600 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        onClick={() => setActiveAnimal(animal)}
      >
        {animal.charAt(0).toUpperCase() + animal.slice(1)}
      </button>
    ))}
  </div>

  {/* 2-column layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* HEALTH */}
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <h4 className="text-2xl font-bold mb-4">🩺 Health & Hygiene</h4>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
        {practices[activeAnimal].health.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>

    {/* BREEDING */}
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <h4 className="text-2xl font-bold mb-4">🐄 Breeding & Reproduction</h4>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
        {practices[activeAnimal].breeding.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>

    {/* NUTRITION */}
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <h4 className="text-2xl font-bold mb-4">🥬 Feeding & Nutrition</h4>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
        {practices[activeAnimal].nutrition.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>

    {/* HOUSING */}
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <h4 className="text-2xl font-bold mb-4">🏡 Housing & Land</h4>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
        {practices[activeAnimal].housing_land.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>

    {/* MARKETING – FULL WIDTH */}
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition md:col-span-2">
      <h4 className="text-2xl font-bold mb-4">📈 Marketing & Infrastructure</h4>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
        {practices[activeAnimal].marketing_infra.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  </div>
</section>


      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Everything You Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Live Prices Daily", desc: "Kampala, Gulu, Mbarara, Mbale — updated every morning", icon: TrendingUp },
              { title: "Free Guides in Luganda", desc: "PDFs you can save & read offline", icon: Download },
              { title: "Vaccination Calendar", desc: "Never miss FMD, PPR, or Newcastle again", icon: Calendar },
              { title: "Chat with Vet 7am–9pm", desc: "Send photo → get answer in 2 minutes", icon: MessageCircle },
            ].map(f => (
              <div key={f.title} className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition">
                <div className="inline-block p-6 bg-emerald-100 rounded-2xl mb-6">
                  <f.icon className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">What Farmers Say</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Sarah Nakato", location: "Mukono", text: "My milk went from 12L to 28L per cow after following AgriConnect tips!" },
              { name: "Moses Opiro", location: "Gulu", text: "Sold 50 goats at UGX 280k each — best price ever!" },
              { name: "Amina Namusoke", location: "Jinja", text: "The vet chat saved my 200 chickens from Newcastle" },
            ].map(t => (
              <div key={t.name} className="bg-white/10 backdrop-blur rounded-3xl p-8">
                <p className="text-lg italic mb-6">“{t.text}”</p>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm opacity-80">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8">Start Earning More Today</h2>
          <p className="text-2xl mb-12">Join 120,000+ Ugandan farmers growing with AgriConnect</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/register" className="bg-white text-emerald-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:scale-105 transition shadow-2xl">
              Create Free Account
            </a>
            <a href="/dashboard" className="bg-white/20 backdrop-blur border-2 border-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-white/30 transition">
              Continue as Guest
            </a>
          </div>
        </div>
      </section>

     
    </>
  );
}
