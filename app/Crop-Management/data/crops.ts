// src/data/crops.ts
import { Wheat, Coffee, Leaf, Flower2, Sun, Droplets, Apple, Bean, Nut, Sprout, AppleIcon } from 'lucide-react';

export const crops = [
  {
    name: { en: "Maize", lg: "Kasooli", rn: "Orubingo", sw: "Mahindi" },
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1594636843547-54d1c865d9dd?w=800&auto=format&fit=crop",
    soil: { en: "Well-drained loam, pH 5.5–7.0", lg: "Ettaka ly’omuddo", rn: "Oruhanga rw’omuddo", sw: "Udongo wa loam wenye mifereji" },
    spacing: "75 × 25–30 cm",
    variety: "Longe 10H, Longe 11, DK8031, Bazooka",
    fertilizer: { en: "2 bags DAP + 1 Urea/acre", lg: "2 DAP + 1 Urea", rn: "2 DAP + 1 Urea", sw: "Mifuko 2 DAP + 1 Urea" },
    harvest: { en: "3–4 months", lg: "Emyezi 3–4", rn: "Emyezi 3–4", sw: "Miezi 3–4" },
    yield: { poor: 800, average: 1800, good: 3500 },
    price: { ugx: 380000 },
    risks: {
      pests: { en: "Fall Armyworm, Stalk Borer", lg: "Fall Armyworm", rn: "Fall Armyworm", sw: "Funza Jeshi" },
      prevention: { en: "Scout weekly • Rocket/Thunder spray • Early planting", lg: "Londa buli wiiki • Dawa Rocket", rn: "Londa buli wiiki", sw: "Chunguza kila wiki • Nyunyiza Rocket" },
      image: "https://live.staticflickr.com/65535/52468294472_5e8e8d8e8a_b.jpg"
    },
    details: {
      soilPrep: { en: "Plow and loosen soil to improve aeration.", lg: "Songa n’okukakasa nsi okukuuma emikisa", rn: "Sukura ubutaka neza kugira ngo imizi yinjire", sw: "Geuza na kupanua udongo ili mizizi ipenye kwa urahisi" },
      seedSow: { en: "Plant quality seeds at correct spacing.", lg: "Piira mbuto ennungi era zitekako ku kifo ky’okukyusa", rn: "Hitamo imbuto nziza ubishyire ku buryo bukwiye", sw: "Chagua mbegu bora na kupanda kwa nafasi na wakati sahihi" },
      water: { en: "Irrigate regularly; soil should be moist but not waterlogged.", lg: "Waala amazi mu ngeri gyeegi era nsi ezaala", rn: "Tanga amazi ku gihe; ubutaka bukomeze kuba bworoshye", sw: "Toa umwagiliaji kwa wakati; udongo uwe unyevu lakini usio maji mengi" },
      nutrients: { en: "Apply fertilizers according to crop stage.", lg: "Teka ssente ku nsimbi ezaala", rn: "Shyiraho ifumbire hakurikijwe ubutaka n’ikigereranyo", sw: "Tumia mbolea kulingana na hali ya udongo na hatua ya zao" },
      weed: { en: "Control weeds by mulching or manual weeding.", lg: "Funa ebyuma ne bifu", rn: "Kuraho ibimera bihungabanya buri gihe", sw: "Ondoa magugu mara kwa mara kwa kutumia mulching au kupanda mapema" },
      pest: { en: "Inspect crops and use IPM to manage pests.", lg: "Laba eby’okulya ebikozesebwa", rn: "Reba ibyonnyi buri gihe ukoresheje uburyo bwa IPM", sw: "Angalia mazao mara kwa mara na kutumia mbinu za IPM kudhibiti wadudu" },
      harvest: { en: "Harvest at full maturity and handle properly.", lg: "Oduka bwe ziba zinoonyi era kora bulungi", rn: "Korera igihe cyose cyera neza", sw: "Vuna wakati zimekamilika na zishughulikie vizuri ili kuepuka hasara" },
    }
  },
  {
    name: { en: "Beans", lg: "Ebigaaga", rn: "Eihaza", sw: "Maharagwe" },
    icon: Bean,
    image: "https://images.unsplash.com/photo-1627920650077-6c8d3c1e9e0e?w=800&auto=format&fit=crop",
    soil: { en: "Sandy loam", lg: "Ettaka lya mchanga", rn: "Oruhanga rwa mchanga", sw: "Udongo wa mchanga" },
    spacing: "40 × 10–15 cm",
    variety: "NABE 15, NAROBEAN 5C, NABE 4",
    fertilizer: { en: "1 bag DAP at planting", lg: "1 DAP", rn: "1 DAP", sw: "Kifuko 1 cha DAP" },
    harvest: { en: "70–90 days", lg: "Obukaba 70–90", rn: "Obukaba 70–90", sw: "Siku 70–90" },
    yield: { poor: 400, average: 900, good: 1500 },
    price: { ugx: 450000 },
    risks: {
      pests: { en: "Bean Fly, Aphids", lg: "Bean Fly", rn: "Bean Fly", sw: "Inzi ya Maharagwe" },
      prevention: { en: "Early planting • Wood ash • Resistant varieties", lg: "Gura kare • Ekyota", rn: "Gura kare", sw: "Panda mapema" },
      image: "https://bugwoodcloud.org/images/768x512/5604321.jpg"
    },
    details: {
      soilPrep: { en: "Loosen soil and remove debris.", lg: "Funa nsi era sukula ebyebikadde", rn: "Sukura ubutaka", sw: "Panua udongo na ondoa mabaki" },
      seedSow: { en: "Sow seeds at correct spacing and depth.", lg: "Piira mbuto ku kifo eky’omugaso", rn: "Shyira imbuto neza", sw: "Pandisha mbegu kwa nafasi sahihi" },
      water: { en: "Keep soil moist; avoid waterlogging.", lg: "Waala amazi obulungi", rn: "Tanga amazi neza", sw: "Weka udongo unyevu; epuka maji mengi" },
      nutrients: { en: "Use appropriate fertilizer at sowing.", lg: "Teka ssente ku nsimbi", rn: "Shyiraho ifumbire", sw: "Tumia mbolea sahihi" },
      weed: { en: "Remove weeds regularly.", lg: "Funa ebyuma buli wiiki", rn: "Kuraho ibimera", sw: "Ondoa magugu mara kwa mara" },
      pest: { en: "Inspect for pests and control promptly.", lg: "Laba eby’okulya", rn: "Reba ibyonnyi", sw: "Angalia wadudu na kudhibiti" },
      harvest: { en: "Harvest pods when mature.", lg: "Oduka bwe ziba zinoonyi", rn: "Korera igihe cyose cyera", sw: "Vuna wakati zimekamilika" },
    }
  },
  {
    name: { en: "Cassava", lg: "Muwogo", rn: "Emihango", sw: "Mihogo" },
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1622214366188-9c3c7e1190e0?w=800&auto=format&fit=crop",
    soil: { en: "Sandy loam", lg: "Ettaka lya mchanga", rn: "Oruhanga rwa mchanga", sw: "Udongo mwepesi" },
    spacing: "1 × 1 m",
    variety: "NAROCASS 1 & 2, NASE 14, TME 14",
    fertilizer: { en: "Manure recommended", lg: "Obulemi", rn: "Obulemi", sw: "Samadi" },
    harvest: { en: "9–24 months", lg: "Emyezi 9–24", rn: "Emyezi 9–24", sw: "Miezi 9–24" },
    yield: { poor: 8000, average: 15000, good: 30000 },
    price: { ugx: 120000 },
    risks: {
      pests: { en: "Cassava Mosaic Disease", lg: "Endwadde ya Mosaic", rn: "Endwadde ya Mosaic", sw: "Magonjwa ya Mosaic" },
      prevention: { en: "Resistant varieties • Clean stems", lg: "Embibo ez’okulwanyisa", rn: "Eihanga ez’okulwanyisa", sw: "Aina zenye upinzani" },
      image: "https://live.staticflickr.com/65535/52467359737_8d8e8d8e8e_b.jpg"
    },
    details: {
      soilPrep: { en: "Prepare mounds or ridges for planting stakes.", lg: "Tegereza ettaka", rn: "Tegereza ubutaka", sw: "Andaa mabua au mistari" },
      seedSow: { en: "Plant healthy stakes upright.", lg: "Piira emiti", rn: "Shyira imbuto nziza", sw: "Pandisha mabua yenye afya" },
      water: { en: "Water during dry spells.", lg: "Waala amazi buli kaseera", rn: "Tanga amazi mu gihe cy’ubukonje", sw: "Mwagilia wakati wa ukame" },
      nutrients: { en: "Apply manure at planting and side dressing.", lg: "Obulemi buli wakati", rn: "Shyiraho ifumbire", sw: "Tumia samadi" },
      weed: { en: "Weed regularly to reduce competition.", lg: "Funa ebyuma buli wiiki", rn: "Kuraho ibimera", sw: "Ondoa magugu mara kwa mara" },
      pest: { en: "Monitor for mosaic disease and pests.", lg: "Laba endwadde", rn: "Reba ibyonnyi", sw: "Angalia magonjwa na wadudu" },
      harvest: { en: "Harvest roots carefully to avoid damage.", lg: "Oduka bwe ziba zinoonyi", rn: "Korera igihe cyose cyera", sw: "Vuna mizizi kwa makini" },
    }
  },
  {
    name: { en: "Banana (Matooke)", lg: "Matooke", rn: "Oruganda", sw: "Ndizi za Kupika" },
    icon: Apple,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop",
    soil: { en: "Deep fertile soil", lg: "Ettaka ly’omuddo", rn: "Oruhanga rw’omuddo", sw: "Udongo wenye rutuba" },
    spacing: "3 × 3 m",
    variety: "Mbwazirume, Kibuzi, FHIA hybrids",
    fertilizer: { en: "10–20 kg manure/mat/year", lg: "10–20 kg obulemi", rn: "10–20 kg obulemi", sw: "Samadi kwa kila shina" },
    harvest: { en: "12–18 months first", lg: "Emyezi 12–18", rn: "Emyezi 12–18", sw: "Miezi 12–18" },
    yield: { poor: 15000, average: 25000, good: 40000 },
    price: { ugx: 55000 },
    risks: {
      pests: { en: "Banana Weevil, BXW", lg: "Weevil, BXW", rn: "Weevil, BXW", sw: "Funza, BXW" },
      prevention: { en: "Clean suckers • Remove male buds", lg: "Emikono emisanyewu", rn: "Emikono emisanyewu", sw: "Vichipukizi safi" },
      image: "https://live.staticflickr.com/65535/52345678901_banana_bxw.jpg"
    },
    details: {
      soilPrep: { en: "Dig large holes and mix with manure.", lg: "Simba emiggo", rn: "Caba ibyumba", sw: "Chimba mashimo na changanya na samadi" },
      seedSow: { en: "Plant healthy suckers from good mother plants.", lg: "Piira emikono emisanyewu", rn: "Shyira emikono emisanyewu", sw: "Panda vichipukizi safi" },
      water: { en: "Mulch heavily to retain moisture.", lg: "Fukira ebyoya", rn: "Fukira ebyoya", sw: "Tumia matandazo mengi" },
      nutrients: { en: "Apply manure regularly.", lg: "Teka obulemi buli mwaka", rn: "Shyiraho ifumbire buri mwaka", sw: "Tumia samadi kila mwaka" },
      weed: { en: "Keep plantation clean.", lg: "Siringa ekitooke", rn: "Kuraho ibimera", sw: "Weka shamba safi" },
      pest: { en: "Remove infected plants immediately.", lg: "Gyawo ebitooke ebirwadde", rn: "Kuraho ibitooke birwadde", sw: "Ondoa mimea iliyoathirika" },
      harvest: { en: "Cut bunch when fingers are full.", lg: "Tema oluganda bwe lujjula", rn: "Tema oluganda bwe lujjula", sw: "Kata tawi wakati matunda yamejaa" },
    }
  },
  {
    name: { en: "Coffee (Robusta)", lg: "Kawa", rn: "Okawa", sw: "Kahawa" },
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1444418185997-114540110986?w=800&auto=format&fit=crop",
    soil: { en: "Volcanic red soil", lg: "Ettaka eriragura", rn: "Oruhanga ruragura", sw: "Udongo mwekundu" },
    spacing: "2.7 × 2.7 m",
    variety: "KR1–KR7 elite clones",
    fertilizer: { en: "NPK 25:5:10 twice/year", lg: "NPK 25:5:10", rn: "NPK 25:5:10", sw: "NPK 25:5:10" },
    harvest: { en: "Oct–Feb peak", lg: "Oct–Feb", rn: "Oct–Feb", sw: "Oktoba–Februari" },
    yield: { poor: 600, average: 1200, good: 2500 },
    price: { ugx: 850000 },
    risks: {
      pests: { en: "Coffee Berry Borer", lg: "Berry Borer", rn: "Berry Borer", sw: "Mdudu wa Kahawa" },
      prevention: { en: "Pruning • Traps", lg: "Okugema", rn: "Okugema", sw: "Kupogoa" },
      image: "https://live.staticflickr.com/65535/52467890123_cbb_damage.jpg"
    },
    details: {
      soilPrep: { en: "Dig 60cm holes and refill with topsoil + manure.", lg: "Simba emiggo 60cm", rn: "Caba ibyumba 60cm", sw: "Chimba mashimo 60cm" },
      seedSow: { en: "Plant grafted seedlings.", lg: "Piira emiti ey’okuzza", rn: "Shyira emiti ey’okuzza", sw: "Panda miche iliyopandikizwa" },
      water: { en: "Mulch and irrigate during dry season.", lg: "Fukira ebyoya", rn: "Fukira ebyoya", sw: "Tumia matandazo" },
      nutrients: { en: "Apply NPK twice per year.", lg: "Teka NPK", rn: "Shyiraho NPK", sw: "Tumia NPK" },
      weed: { en: "Keep coffee garden clean.", lg: "Siringa ekawa", rn: "Kuraho ibimera", sw: "Weka shamba safi" },
      pest: { en: "Regular pruning and sanitation.", lg: "Okugema buli mwaka", rn: "Okugema buri mwaka", sw: "Kupogoa mara kwa mara" },
      harvest: { en: "Pick only red ripe cherries.", lg: "Oduka ebyoya ebitaka", rn: "Korera ebyoya ebitaka", sw: "Vuna matunda mekundu tu" },
    }
  },
  // Add the remaining 19 crops below in the same format...
  // (Due to length, here are just a few more — full file available on request)

  {
    name: { en: "Rice", lg: "Omuceere", rn: "Oryeja", sw: "Mchele" },
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1599745689450-8d69e3a6a9e2?w=800&auto=format&fit=crop",
    soil: { en: "Clay/loam", lg: "Ettaka ly’omuddo", rn: "Oruhanga rw’omuddo", sw: "Udongo wa udongo" },
    spacing: "20 × 20 cm",
    variety: "NERICA 4, WITA 9, Superica",
    fertilizer: { en: "3 bags Urea + DAP", lg: "3 Urea + DAP", rn: "3 Urea + DAP", sw: "Mifuko 3 ya Urea" },
    harvest: { en: "100–130 days", lg: "Obukaba 100–130", rn: "Obukaba 100–130", sw: "Siku 100–130" },
    yield: { poor: 2000, average: 4000, good: 7000 },
    price: { ugx: 420000 },
    risks: {
      pests: { en: "Rice Blast", lg: "Rice Blast", rn: "Rice Blast", sw: "Mnyauko wa Mchele" },
      prevention: { en: "Resistant varieties", lg: "Embibo ez’okulwanyisa", rn: "Eihanga ez’okulwanyisa", sw: "Aina zenye upinzani" },
      image: "https://live.staticflickr.com/65535/52467901234_rice_blast.jpg"
    },
    details: {
      soilPrep: { en: "Level field and puddle soil.", lg: "Tereeza ettaka", rn: "Tereeza ubutaka", sw: "Sawazisha shamba" },
      seedSow: { en: "Transplant 25–30 day seedlings.", lg: "Piira emiti ey’emyezi 1", rn: "Shyira emiti ey’emyezi 1", sw: "Panda miche ya siku 25–30" },
      water: { en: "Keep field flooded 5–10 cm.", lg: "Waala amazi buli kaseera", rn: "Tanga amazi buri gihe", sw: "Weka shamba limejaa maji" },
      nutrients: { en: "Top-dress with Urea at tillering and panicle.", lg: "Teka Urea", rn: "Shyiraho Urea", sw: "Tumia Urea mara mbili" },
      weed: { en: "Hand weed or use herbicides.", lg: "Funa ebyuma", rn: "Kuraho ibimera", sw: "Ondoa magugu kwa mkono" },
      pest: { en: "Scout for blast and stem borers.", lg: "Laba endwadde", rn: "Reba ibyonnyi", sw: "Angalia magonjwa" },
      harvest: { en: "Drain field 2 weeks before harvest.", lg: "Gyawo amazzi", rn: "Kuraho amazi", sw: "Kausha shamba kabla ya kuvuna" },
    }
  },
  //  Irish Potatoes, Sweet Potatoes, Groundnuts, Soybeans, Simsim, Sunflower,
  // Tomatoes, Onions, Cabbage, Millet & Sorghum, Avocado, Pineapple, Mango, Passion Fruit, etc.

  

  // ============================
  // 1. IRISH POTATOES
  // ============================
  {
    name: { en: "Irish Potatoes", lg: "Obumonde", rn: "Obumonde", sw: "Viazi" },
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&auto=format&fit=crop",
    soil: { en: "Loamy soil", lg: "Ettaka ery’omusenyu", rn: "Ettaka ly’omusenyu", sw: "Udongo tifutifu" },
    spacing: "75 × 30 cm",
    variety: "Victoria, Rwangume, Kabale Red",
    fertilizer: { en: "NPK at planting + Urea top-dress", lg: "NPK + Urea", rn: "NPK + Urea", sw: "NPK + Urea" },
    harvest: { en: "90–120 days", lg: "Obukaba 90–120", rn: "Obukaba 90–120", sw: "Siku 90–120" },
    yield: { poor: 5000, average: 8000, good: 12000 },
    price: { ugx: 900000 },
    risks: {
      pests: { en: "Late Blight", lg: "Blight", rn: "Blight", sw: "Blight" },
      prevention: { en: "Fungicides + resistant varieties", lg: "Fungicides", rn: "Fungicides", sw: "Dawa ya kuvu" },
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Blight_potato.jpg"
    },
    details: {
      soilPrep: { en: "Deep till and make ridges.", lg: "Fukula ettaka", rn: "Fukura ubutaka", sw: "Limea shamba" },
      seedSow: { en: "Plant clean tubers.", lg: "Teeka obumonde", rn: "Shyira tubers", sw: "Panda mbegu safi" },
      water: { en: "Irrigate every 7–10 days.", lg: "Wa amazzi", rn: "Tanga amazi", sw: "Mwagilia" },
      nutrients: { en: "Top dress at 4 weeks.", lg: "Teka Urea", rn: "Shyiraho Urea", sw: "Weka Urea" },
      weed: { en: "Weed and earth-up.", lg: "Jjawo ebisagazi", rn: "Kuraho ibimara", sw: "Palilia" },
      pest: { en: "Check blight + aphids.", lg: "Laba endwadde", rn: "Reba ibyonnyi", sw: "Angalia wadudu" },
      harvest: { en: "When leaves dry.", lg: "Nga makanika", rn: "Bimye", sw: "Majani yakauka" }
    }
  },

  // ============================
  // 2. SWEET POTATOES
  // ============================
  {
    name: { en: "Sweet Potatoes", lg: "Lumonde", rn: "Bunganga", sw: "Viazi Vitamu" },
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1603048297175-58f0a90d4d7a?w=800&auto=format&fit=crop",
    soil: { en: "Light soil", lg: "Ettaka eriwulikira", rn: "Butaka bufu", sw: "Udongo mwepesi" },
    spacing: "100 × 30 cm",
    variety: "NASPOT 8, NASPOT 11",
    fertilizer: { en: "Organic manure", lg: "Kasooli", rn: "Manyurwe", sw: "Samadi" },
    harvest: { en: "120–150 days", lg: "Obukaba 120–150", rn: "120–150", sw: "Siku 120–150" },
    yield: { poor: 4000, average: 7000, good: 12000 },
    price: { ugx: 500000 },
    risks: {
      pests: { en: "Weevils", lg: "Obusolo", rn: "Amajumba", sw: "Madoido" },
      prevention: { en: "Use clean vines", lg: "Vunda ebirime", rn: "Hindura imyaka", sw: "Zungusha mazao" },
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sweet_Potato_Weevil_damage.jpg"
    },
    details: {
      soilPrep: { en: "Make ridges.", lg: "Kola emidongo", rn: "Kora imikindo", sw: "Tengeneza matuta" },
      seedSow: { en: "Plant vines.", lg: "Teeka emivule", rn: "Shyira imivule", sw: "Panda mizizi" },
      water: { en: "Water in dry seasons.", lg: "Wa amazzi", rn: "Amazi gahoro", sw: "Mwagilia ukame" },
      nutrients: { en: "Add manure.", lg: "Teka kasooli", rn: "Shyiraho manyurwe", sw: "Weka samadi" },
      weed: { en: "Weed early.", lg: "Jjawo ebisagazi", rn: "Kuraho ibimara", sw: "Palilia" },
      pest: { en: "Check for weevils.", lg: "Laba obusolo", rn: "Reba ibyonnyi", sw: "Angalia wadudu" },
      harvest: { en: "Harvest 4–5 months.", lg: "Mu mezi 4–5", rn: "4–5 months", sw: "Miezi 4–5" }
    }
  },

  // ============================
  // 3. GROUNDNUTS
  // ============================
  {
    name: { en: "Groundnuts", lg: "Ebinjanjaalo", rn: "Ebijanjaalo", sw: "Karatasi" },
    icon: Nut,
    image: "https://images.unsplash.com/photo-1600456899123-a26e75a0a73d?w=800&auto=format&fit=crop",
    soil: { en: "Sandy-loam", lg: "Ettaka erisenseenya", rn: "Butaka bufu", sw: "Udongo mchanganyiko" },
    spacing: "30 × 10 cm",
    variety: "Red Valencia, Serenut 5",
    fertilizer: { en: "DAP at planting", lg: "DAP", rn: "DAP", sw: "DAP" },
    harvest: { en: "90–100 days", lg: "Obukaba 90–100", rn: "90–100", sw: "Siku 90–100" },
    yield: { poor: 800, average: 1500, good: 2500 },
    price: { ugx: 350000 },
    risks: {
      pests: { en: "Aflotoxin, rosette", lg: "Rosette", rn: "Rosette", sw: "Rosette" },
      prevention: { en: "Use resistant varieties", lg: "Embibo nnungi", rn: "Ibiryo birwanya", sw: "Aina sugu" },
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Groundnut_rosette.jpg"
    },
    details: {
      soilPrep: { en: "Light tilling.", lg: "Fukula katono", rn: "Fukura gahoro", sw: "Limea kidogo" },
      seedSow: { en: "Plant 2 seeds per hole.", lg: "Teeka bbiri", rn: "Shyira ebyiri", sw: "Panda mbili" },
      water: { en: "Water if dry.", lg: "Wa amazzi", rn: "Amazi gahoro", sw: "Mwagilia ukame" },
      nutrients: { en: "DAP at planting.", lg: "Teka DAP", rn: "Shyira DAP", sw: "Weka DAP" },
      weed: { en: "Weed twice.", lg: "Jjawo ebisagazi", rn: "Kuraho ibimara", sw: "Palilia" },
      pest: { en: "Check rosette.", lg: "Laba rosette", rn: "Reba rosette", sw: "Angalia rosette" },
      harvest: { en: "When pods dry.", lg: "Nga zi kooye", rn: "Bimaze kuma", sw: "Baada ya kukauka" }
    }
  },

  // ============================
  // 4. SOYBEANS
  // ============================
  {
    name: { en: "Soybeans", lg: "Ebijimuli", rn: "Ebisoya", sw: "Soya" },
    icon: Nut,
    image: "https://images.unsplash.com/photo-1589923188900-6af2d1f98325?w=800&auto=format&fit=crop",
    soil: { en: "Loam", lg: "Ettaka lya loam", rn: "Butaka bwa loam", sw: "Udongo tifutifu" },
    spacing: "45 × 10 cm",
    variety: "Maksoy 1N, Maksoy 4N",
    fertilizer: { en: "Inoculate seeds + NPK", lg: "Inoculation + NPK", rn: "Inoculation + NPK", sw: "Chanjo + NPK" },
    harvest: { en: "110–120 days", lg: "Obukaba 110–120", rn: "110–120", sw: "Siku 110–120" },
    yield: { poor: 800, average: 1500, good: 2500 },
    price: { ugx: 220000 },
    risks: {
      pests: { en: "Rust and leaf spot", lg: "Obuwuka", rn: "Imyanda", sw: "Kutu" },
      prevention: { en: "Spray fungicides", lg: "Fungicides", rn: "Dawa ya kuvu", sw: "Tumia dawa" },
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Soybean_rust.jpg"
    },
    details: {
      soilPrep: { en: "Fine seedbed.", lg: "Tereeza ettaka", rn: "Tereeza ubutaka", sw: "Tandaza udongo" },
      seedSow: { en: "Drill or plant 1 seed/hole.", lg: "Teeka 1", rn: "Shyira 1", sw: "Panda moja" },
      water: { en: "Moderate water.", lg: "Amazi amato", rn: "Amazi gahoro", sw: "Mwagilia kiasi" },
      nutrients: { en: "NPK at planting.", lg: "NPK", rn: "NPK", sw: "NPK" },
      weed: { en: "Weed twice.", lg: "Jjawo ebisagazi", rn: "Kuraho ibimara", sw: "Palilia" },
      pest: { en: "Watch rust.", lg: "Laba kutu", rn: "Reba kutu", sw: "Angalia kutu" },
      harvest: { en: "Pods turn brown.", lg: "Nga zibunye", rn: "Zibuze", sw: "Zikiwa kahawia" }
    }
  },

  // ============================
  // 5. SIMSIM (SESAME)
  // ============================
  {
    name: { en: "Simsim (Sesame)", lg: "Simsim", rn: "Simsim", sw: "Ufuta" },
    icon: Nut,
    image: "https://images.unsplash.com/photo-1607321335498-78d0a73c7bd8?w=800&auto=format&fit=crop",
    soil: { en: "Sandy loam", lg: "Ettaka erisenseenya", rn: "Butaka bufu", sw: "Udongo tifutifu" },
    spacing: "30 × 10 cm",
    variety: "Sesim 1, Sesim 2",
    fertilizer: { en: "Little or no fertilizer needed", lg: "Tewetaaga nnyo", rn: "Nto", sw: "Kidogo tu" },
    harvest: { en: "100–120 days", lg: "100–120", rn: "100–120", sw: "100–120" },
    yield: { poor: 200, average: 350, good: 500 },
    price: { ugx: 300000 },
    risks: {
      pests: { en: "Gall midge", lg: "Obuwuka", rn: "Ibinyarwanda", sw: "Nziwawa" },
      prevention: { en: "Spray insecticides", lg: "Dawa ya buwuka", rn: "Dawa", sw: "Tumia viuatilifu" },
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Sesame_gall_midge.jpg"
    },
    details: {
      soilPrep: { en: "Fine bed.", lg: "Tereeza ettaka", rn: "Tereeza ubutaka", sw: "Tandaza shamba" },
      seedSow: { en: "Broadcast or row plant.", lg: "Saasaanya", rn: "Bihe", sw: "Rusha au panda mistari" },
      water: { en: "Drought tolerant.", lg: "Tekwetaaga nnyo", rn: "Ntago ikenera byinshi", sw: "Inastahimili ukame" },
      nutrients: { en: "No heavy fertilizer.", lg: "Tewetaaga", rn: "Nto", sw: "Kidogo" },
      weed: { en: "Weed once.", lg: "Jjawo obutono", rn: "Kuraho rimwe", sw: "Palilia mara 1" },
      pest: { en: "Check midge.", lg: "Laba midge", rn: "Reba midge", sw: "Angalia wadudu" },
      harvest: { en: "Cut stems when capsules yellow.", lg: "Nga zisanjuse", rn: "Zishye", sw: "Zikiwa njano" }
    }
  },

  // ============================
  // 6. SUNFLOWER
  // ============================
  {
    name: { en: "Sunflower", lg: "Sunflower", rn: "Sunflower", sw: "Alizeti" },
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop",
    soil: { en: "Well-drained soil", lg: "Ettaka erituluguka", rn: "Butaka bworohye", sw: "Udongo tifutifu" },
    spacing: "75 × 30 cm",
    variety: "PAN 7351, Hybrid varieties",
    fertilizer: { en: "NPK at planting", lg: "NPK", rn: "NPK", sw: "NPK" },
    harvest: { en: "110–130 days", lg: "110–130", rn: "110–130", sw: "110–130" },
    yield: { poor: 600, average: 1000, good: 1500 },
    price: { ugx: 180000 },
    risks: {
      pests: { en: "Bird damage, stalk borers", lg: "Ebinyonyi", rn: "Ibyonnyi", sw: "Ndege" },
      prevention: { en: "Scarecrows + spraying", lg: "Vumya ebinyonyi", rn: "Tera inseko", sw: "Tumia wogaaji" },
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sunflower_birds.jpg"
    },
    details: {
      soilPrep: { en: "Till and level.", lg: "Fukula ettaka", rn: "Fukura ubutaka", sw: "Limea shamba" },
      seedSow: { en: "1 seed per hole.", lg: "Teeka 1", rn: "Shyira 1", sw: "Panda moja" },
      water: { en: "Water moderately.", lg: "Amazi amato", rn: "Amazi gahoro", sw: "Mwagilia kiasi" },
      nutrients: { en: "Apply NPK.", lg: "NPK", rn: "NPK", sw: "NPK" },
      weed: { en: "Weed twice.", lg: "Jjawo ebisagazi", rn: "Palilia", sw: "Palilia" },
      pest: { en: "Watch birds", lg: "Laba ebinyonyi", rn: "Reba ibyonnyi", sw: "Angalia ndege" },
      harvest: { en: "Dry heads then cut.", lg: "Nga zuze", rn: "Zuze", sw: "Zikikauka" }
    }
  },
  {
  name: { en: "Cabbage", lg: "Kabagi", rn: "Ikabagi", sw: "Kabeji" },
  icon: Leaf,
  image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop",
  soil: { en: "Loam soil, high organic matter", lg: "Ettaka eririmu ebisalwa", rn: "Ubutaka bufite ifumbire", sw: "Udongo wenye rutuba" },
  spacing: "45 × 45 cm",
  variety: "Gloria F1, Copenhagen Market, Prize Winner",
  fertilizer: { en: "DAP at planting + CAN", lg: "DAP + CAN", rn: "DAP + CAN", sw: "DAP + CAN" },
  harvest: { en: "75–90 days", lg: "Obukaba 75–90", rn: "Iminsi 75–90", sw: "Siku 75–90" },
  yield: { poor: 8000, average: 15000, good: 25000 },
  price: { ugx: 900000 },
  risks: {
    pests: { en: "Diamondback moth", lg: "Ennyenje ya kabagi", rn: "Udukoko twa kabagi", sw: "Vijidudu vya kabichi" },
    prevention: { en: "Use Bt and rotate crops", lg: "Kozesa Bt", rn: "Gukora rotation", sw: "Tumia Bt & rotation" },
    image: "https://upload.wikimedia.org/wikipedia/commons/diamondback_moth.jpg"
  },
  details: {
    soilPrep: { en: "Use well-manured soil.", lg: "Tekamu obusiganjulo", rn: "Shyiraho ifumbire", sw: "Ongeza mboji" },
    seedSow: { en: "Transplant after 4 weeks.", lg: "Piira olusuku", rn: "Tera seedlings", sw: "Panda miche baada ya wiki 4" },
    water: { en: "Irrigate regularly.", lg: "Wa amazi buli lunaku", rn: "Tanga amazi", sw: "Mwagilia mara kwa mara" },
    nutrients: { en: "Apply CAN at 3 weeks.", lg: "Teka CAN", rn: "Shyiraho CAN", sw: "Tumia CAN" },
    weed: { en: "Weed often to reduce pests.", lg: "Gyawo ebisagisi", rn: "Kuraho ibyatsi", sw: "Palilia mara kwa mara" },
    pest: { en: "Monitor for caterpillars.", lg: "Laba ennyenje", rn: "Reba udukoko", sw: "Angalia viwavi" },
    harvest: { en: "Harvest when heads are firm.", lg: "Kwata nga zingumu", rn: "Vuna iyo zikomeye", sw: "Vuna zikiwa ngumu" }
  }
},

{
  name: { en: "Millet & Sorghum", lg: "Oburo n’Emumbwa", rn: "Imyumbati n’amasaka", sw: "Uwele & Mtama" },
  icon: Sprout,
  image: "https://images.unsplash.com/photo-1590606572310-7e3c343f0cc0?w=800&auto=format&fit=crop",
  soil: { en: "Sandy loam, drought tolerant", lg: "Ettaka ereterera amazzi", rn: "Ubutaka bwumisha vuba", sw: "Udongo wa kichanga" },
  spacing: "30 × 10 cm",
  variety: "Sekedo 1, Epuripur, Serena, Seredo",
  fertilizer: { en: "NPK + organic manure", lg: "NPK + ebisigeko", rn: "NPK + ifumbire", sw: "NPK + mboji" },
  harvest: { en: "90–120 days", lg: "Obukaba 90–120", rn: "Iminsi 90–120", sw: "Siku 90–120" },
  yield: { poor: 800, average: 1500, good: 2500 },
  price: { ugx: 180000 },
  risks: {
    pests: { en: "Quelea birds", lg: "Enyonyi ezitta", rn: "Inyoni mbi", sw: "Ndege Quelea" },
    prevention: { en: "Scaring & early planting", lg: "Kubaasa enyonyi", rn: "Gukangara inyoni", sw: "Fukuza ndege" },
    image: "https://upload.wikimedia.org/wikipedia/commons/quelea_birds.jpg"
  },
  details: {
    soilPrep: { en: "Light tilling is enough.", lg: "Lima katono", rn: "Kuhinga byoroheje", sw: "Kulima kidogo" },
    seedSow: { en: "Broadcast or row plant.", lg: "Siga oba teteeka", rn: "Gutura imbuto", sw: "Pandia mistari" },
    water: { en: "Needs little water.", lg: "Tekyeta mazzi mangi", rn: "Ntirkena amazi menshi", sw: "Huhitaji maji mengi" },
    nutrients: { en: "Add compost if possible.", lg: "Tekamu ebisigeko", rn: "Shyiraho ifumbire", sw: "Ongeza mboji" },
    weed: { en: "Early weeding required.", lg: "Gyawo ebisagisi", rn: "Kuraho ibyatsi", sw: "Palilia mapema" },
    pest: { en: "Protect from birds.", lg: "Kebera enyonyi", rn: "Kurinda inyoni", sw: "Linda ndege" },
    harvest: { en: "Cut when panicles harden.", lg: "Soonya nga byakutuka", rn: "Kata iyo zimaze kwuma", sw: "Vuna zikiwa kavu" }
  }
},

{
  name: { en: "Avocado", lg: "Emiyembe gy’obutaawa", rn: "Avoka", sw: "Parachichi" },
  icon: AppleIcon,
  image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&auto=format&fit=crop",
  soil: { en: "Deep loam, well-drained", lg: "Ettaka eririmu omukka", rn: "Ubutaka bunoza amazi", sw: "Udongo wenye mifereji mizuri" },
  spacing: "7 × 7 m",
  variety: "Hass, Fuerte, Puebla",
  fertilizer: { en: "Add manure yearly", lg: "Tekamu ebisigeko buli mwaka", rn: "Shyiraho ifumbire buri mwaka", sw: "Ongeza mboji kila mwaka" },
  harvest: { en: "3–4 years after planting", lg: "Emyaka 3–4", rn: "Imyaka 3–4", sw: "Miaka 3–4" },
  yield: { poor: 2000, average: 5000, good: 12000 },
  price: { ugx: 900 },
  risks: {
    pests: { en: "Fruit fly, anthracnose", lg: "Obuyenje bw’emiyembe", rn: "Udukoko tw’imbuto", sw: "Nzi wa matunda" },
    prevention: { en: "Prune & spray copper", lg: "Sunsula omuti", rn: "Gusukura no gutera", sw: "Punguza na nyunyizia copper" },
    image: "https://upload.wikimedia.org/wikipedia/commons/copper_spray.jpg"
  },
  details: {
    soilPrep: { en: "Dig deep holes with manure.", lg: "Kumba ekisinga", rn: "Kuhinga umwobo munini", sw: "Chimba shimo na mboji" },
    seedSow: { en: "Use grafted seedlings.", lg: "Tereza ekisaalo ekigattiddwa", rn: "Koresha ingeso zikoranye", sw: "Tumia miche iliyopandikizwa" },
    water: { en: "Water young trees weekly.", lg: "Wa amazi buli wiiki", rn: "Tanga amazi buri cyumweru", sw: "Mwagilia kila wiki" },
    nutrients: { en: "Add compost around canopy.", lg: "Tekamu ebisigeko wansi w’ekitemba", rn: "Shyiraho ifumbire munsi y’igiti", sw: "Weka mboji chini ya taji" },
    weed: { en: "Mulch to reduce weeds.", lg: "Teeka ebisasiro", rn: "Gushyira mulch", sw: "Weka matandazo" },
    pest: { en: "Monitor fruit fly.", lg: "Kebera obuyenje", rn: "Reba udukoko", sw: "Angalia nzi" },
    harvest: { en: "Pick mature but firm fruits.", lg: "Kwata nga zikyali zikakamu", rn: "Vuna zitarunguka", sw: "Vuna zikiwa ngumu" }
  }
},
{
  name: { en: "Pineapple", lg: "Ennanansi", rn: "Inanasi", sw: "Nanasi" },
  icon: AppleIcon,
  image: "https://images.unsplash.com/photo-1502741126161-b048400d6d34?w=800&auto=format&fit=crop",
  soil: { en: "Light sandy loam", lg: "Ettaka eritetemeera", rn: "Ubutaka bwumisha vuba", sw: "Udongo wa mchanga" },
  spacing: "90 × 30 cm",
  variety: "Smooth Cayenne, MD2, Victoria",
  fertilizer: { en: "NPK + organic manure", lg: "NPK + ebisigeko", rn: "NPK + ifumbire", sw: "NPK + mboji" },
  harvest: { en: "18–24 months", lg: "Omwaka 1½–2", rn: "Imyaka 1.5–2", sw: "Miezi 18–24" },
  yield: { poor: 15000, average: 30000, good: 50000 },
  price: { ugx: 2000 },
  risks: {
    pests: { en: "Mealybugs", lg: "Obusana", rn: "Udukoko tw’isanasi", sw: "Vidukari" },
    prevention: { en: "Mulching & clean planting", lg: "Teeka ebisasiro", rn: "Gukoresha seedlings nziza", sw: "Tumia miche safi" },
    image: "https://upload.wikimedia.org/wikipedia/commons/mealybug.jpg"
  },
  details: {
    soilPrep: { en: "Deep plough soil.", lg: "Yingiza ettaka ddala", rn: "Kuhinga neza", sw: "Lima vizuri" },
    seedSow: { en: "Plant crowns or suckers.", lg: "Tereza ekitooke", rn: "Tera imitwe y’inanasi", sw: "Panda vichipukizi" },
    water: { en: "Irrigate in dry season.", lg: "Wa amazi mu kiseera eky’ekyeya", rn: "Tanga amazi mu mpeshyi", sw: "Mwagilia wakati wa kiangazi" },
    nutrients: { en: "Apply NPK every 3 months.", lg: "Teka NPK buli myezi 3", rn: "Shyiraho NPK buri mezi 3", sw: "Tumia NPK kila miezi 3" },
    weed: { en: "Mulch heavily.", lg: "Teeka ebisasiro bingi", rn: "Gushyira mulch nyinshi", sw: "Tumia matandazo mengi" },
    pest: { en: "Check for mealybugs.", lg: "Laba obusana", rn: "Reba udukoko tw’inanasi", sw: "Angalia vidukari" },
    harvest: { en: "Pick when golden yellow.", lg: "Kwata nga ya kyenvu", rn: "Vuna iyo yacuze", sw: "Vuna ikiwa njano" }
  }
},
{
  name: { en: "Mango", lg: "Muyembe", rn: "Umvinyu", sw: "Embe" },
  icon: AppleIcon,
  image: "https://images.unsplash.com/photo-1615485737560-8f954965e0fc?w=800&auto=format&fit=crop",
  soil: { en: "Deep loam, well drained", lg: "Ettaka erirungi", rn: "Ubutaka bwiza", sw: "Udongo wenye mifereji" },
  spacing: "8 × 8 m",
  variety: "Apple Mango, Kent, Tommy Atkins",
  fertilizer: { en: "Organic manure yearly", lg: "Tekamu ebisigeko", rn: "Shyiraho ifumbire", sw: "Ongeza mboji" },
  harvest: { en: "3–5 years", lg: "Emyaka 3–5", rn: "Imyaka 3–5", sw: "Miaka 3–5" },
  yield: { poor: 3000, average: 8000, good: 20000 },
  price: { ugx: 700 },
  risks: {
    pests: { en: "Fruit flies", lg: "Obuyenje", rn: "Udukoko tw’imbuto", sw: "Nzi wa matunda" },
    prevention: { en: "Bag fruits & prune", lg: "Goberera emiyembe", rn: "Gupfundikira imbuto", sw: "Funika matunda" },
    image: "https://upload.wikimedia.org/wikipedia/commons/fruit_fly.jpg"
  },
  details: {
    soilPrep: { en: "Dig wide holes.", lg: "Kumba omwobo omuwanvu", rn: "Kuhinga umwobo munini", sw: "Chimba shimo kubwa" },
    seedSow: { en: "Use grafted seedlings.", lg: "Kozesa ebigattiddwa", rn: "Imbuto z’indimo", sw: "Tumia miche iliopandikizwa" },
    water: { en: "Water young trees weekly.", lg: "Wa amazi buli wiiki", rn: "Tanga amazi buri cyumweru", sw: "Mwagilia kila wiki" },
    nutrients: { en: "Manure yearly.", lg: "Tekamu ebisigeko", rn: "Shyiraho ifumbire", sw: "Ongeza mboji" },
    weed: { en: "Mulch ground.", lg: "Teeka ebisasiro", rn: "Gushyira mulch", sw: "Weka matandazo" },
    pest: { en: "Monitor fruit fly.", lg: "Laba obuyenje", rn: "Reba udukoko tw’imbuto", sw: "Angalia nzi" },
    harvest: { en: "Pick mature green fruits.", lg: "Kwata nga zikakamu", rn: "Vuna zitarunguka", sw: "Vuna zikiwa ngumu" }
  }
},
{
  name: { en: "Passion Fruit", lg: "Butunda", rn: "Imyembe y’utunda", sw: "Passion" },
  icon: AppleIcon,
  image: "https://images.unsplash.com/photo-1591778232541-ecaad25e8551?w=800&auto=format&fit=crop",
  soil: { en: "Deep fertile loam", lg: "Ettaka erirungi nyo", rn: "Ubutaka bufumbire", sw: "Udongo wenye rutuba" },
  spacing: "3 × 3 m (trellised)",
  variety: "Purple, Yellow, Kawanda Hybrid",
  fertilizer: { en: "Manure + NPK", lg: "Ebisigeko + NPK", rn: "Ifumbire + NPK", sw: "Mboji + NPK" },
  harvest: { en: "12 months", lg: "Omwaka 1", rn: "Umwaka 1", sw: "Mwaka 1" },
  yield: { poor: 4000, average: 8000, good: 15000 },
  price: { ugx: 2500 },
  risks: {
    pests: { en: "Woodiness virus", lg: "Kalusu ka butunda", rn: "Virus ya butunda", sw: "Virusi ya passion" },
    prevention: { en: "Use clean planting material", lg: "Kozesa ebimera ebirungi", rn: "Seedlings nziza", sw: "Tumia miche safi" },
    image: "https://upload.wikimedia.org/wikipedia/commons/passion_fruit_virus.jpg"
  },
  details: {
    soilPrep: { en: "Add manure before planting.", lg: "Tekamu ebisigeko", rn: "Shyiraho ifumbire", sw: "Ongeza mboji" },
    seedSow: { en: "Use grafted seedlings.", lg: "Tereza ebigattiddwa", rn: "Shyiraho seedlings", sw: "Panda miche iliyopandikizwa" },
    water: { en: "Irrigate twice weekly.", lg: "Wa amazi emirundi ebiri", rn: "Tanga amazi kabiri", sw: "Mwagilia mara 2 kwa wiki" },
    nutrients: { en: "Apply NPK monthly.", lg: "Teka NPK", rn: "Shyiraho NPK", sw: "Tumia NPK kila mwezi" },
    weed: { en: "Keep vines clean.", lg: "Gyawo ebisagisi", rn: "Kuraho ibyatsi", sw: "Palilia mara kwa mara" },
    pest: { en: "Check for aphids & viruses.", lg: "Kebera obuwuka", rn: "Reba virusi", sw: "Angalia wadudu" },
    harvest: { en: "Pick fallen mature fruits.", lg: "Kwata guguwe", rn: "Vuna iyo yagwiriye", sw: "Vuna zilizodondoka" }
  }
},







];