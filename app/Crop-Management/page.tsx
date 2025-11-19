'use client';

import { useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { useReactToPrint } from 'react-to-print';
import {
    Printer, Users, Bug, Search,
    Sprout, Layers, Scissors, Droplets, Sun, Leaf, Flower2,
} from 'lucide-react';
import { crops } from './data/crops';
import Header from '@/components/Header';

type Lang = 'en' | 'lg' | 'rn' | 'sw';

type TranslationKeys = {
    title: string;
    select: string;
    download: string;
    calculator: string;
    landSize: string;
    acres: string;
    hectares: string;
    currentPrice: string;
    perBag: string;
    goodManagement: string;
    average: string;
    poor: string;
    bags: string;
    risks: string;
    stepsTitle: string;
    searchPlaceholder: string;
};

// translations object
const translations: Record<Lang, TranslationKeys> = {
    en: {
        title: 'Crop Profit and Farming Guide',
        select: 'Select a crop',
        download: 'Download PDF',
        calculator: 'Calculator',
        landSize: 'Land size',
        acres: 'Acres',
        hectares: 'Hectares',
        currentPrice: 'Current price',
        perBag: 'per bag',
        goodManagement: 'Good management',
        average: 'Average',
        poor: 'Poor',
        bags: 'bags',
        risks: 'Risks & Pests',
        stepsTitle: 'Crop Management Steps',
        searchPlaceholder: 'Search crops, e.g. maize, beans...',
    },
    lg: {
        title: 'Crop Profit Guide',
        select: 'Select a crop',
        download: 'Download PDF',
        calculator: 'Calculator',
        landSize: 'Land size',
        acres: 'Acres',
        hectares: 'Hectares',
        currentPrice: 'Current price',
        perBag: 'per bag',
        goodManagement: 'Good management',
        average: 'Average',
        poor: 'Poor',
        bags: 'bags',
        risks: 'Risks & Pests',
        stepsTitle: 'Crop Management Steps',
        searchPlaceholder: 'Search crops, e.g. maize, beans...',
    },
    rn: {
        title: 'Crop Profit Guide',
        select: 'Select a crop',
        download: 'Download PDF',
        calculator: 'Calculator',
        landSize: 'Land size',
        acres: 'Acres',
        hectares: 'Hectares',
        currentPrice: 'Current price',
        perBag: 'per bag',
        goodManagement: 'Good management',
        average: 'Average',
        poor: 'Poor',
        bags: 'bags',
        risks: 'Risks & Pests',
        stepsTitle: 'Crop Management Steps',
        searchPlaceholder: 'Search crops, e.g. maize, beans...',
    },
    sw: {
        title: 'Crop Profit Guide',
        select: 'Select a crop',
        download: 'Download PDF',
        calculator: 'Calculator',
        landSize: 'Enter Land Size',
        acres: 'Acres',
        hectares: 'Hectares',
        currentPrice: 'Current price',
        perBag: 'per bag',
        goodManagement: 'Good management',
        average: 'Average',
        poor: 'Poor',
        bags: 'bags',
        risks: 'Risks & Pests',
        stepsTitle: 'Crop Management Steps',
        searchPlaceholder: 'Search crops, e.g. maize, beans...',
    },
};

export default function CropManagementPage() {
    const [lang, setLang] = useState<Lang>('en');
    const [selected, setSelected] = useState(0);
    const [showRisks, setShowRisks] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [landSize, setLandSize] = useState('1');
    const [unit, setUnit] = useState<'acres' | 'hectares'>('acres');

    const printRef = useRef<HTMLDivElement>(null);
    const t = translations[lang];

    const filteredCrops = useMemo(() => {
        if (!searchQuery) return crops;
        const query = searchQuery.toLowerCase();
        return crops.filter(crop =>
            crop.name.en.toLowerCase().includes(query) ||
            crop.name.lg.toLowerCase().includes(query) ||
            crop.name.rn.toLowerCase().includes(query) ||
            crop.name.sw.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const crop = crops[selected];
    const sizeInAcres = unit === 'hectares' ? parseFloat(landSize || '0') * 2.47 : parseFloat(landSize || '0');
    const yields = {
        poor: sizeInAcres * crop.yield.poor,
        average: sizeInAcres * crop.yield.average,
        good: sizeInAcres * crop.yield.good,
    };
    const revenue = {
        poor: Math.round(yields.poor / 100 * crop.price.ugx),
        average: Math.round(yields.average / 100 * crop.price.ugx),
        good: Math.round(yields.good / 100 * crop.price.ugx),
    };

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: `${crop.name[lang]}_Profit_Guide_${lang.toUpperCase()}`,
    });

    const steps = [
        { icon: Leaf, title: 'Soil Preparation', key: 'soilPrep' },
        { icon: Sprout, title: 'Planting', key: 'seedSow' },
        { icon: Droplets, title: 'Water', key: 'water' },
        { icon: Flower2, title: 'Fertilizer', key: 'nutrients' },
        { icon: Scissors, title: 'Weeding', key: 'weed' },
        { icon: Bug, title: 'Pests', key: 'pest' },
        { icon: Sun, title: 'Harvest', key: 'harvest' },
    ];

    return (
        <>
            {/* Top Bar */}
            <header className="  left-0 right-0 bg-green-900 text-white z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-3 flex-wrap">
                    <div className="flex gap-2">
                        {(['en', 'lg', 'rn', 'sw'] as Lang[]).map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={`px-3 py-1 rounded-md font-semibold text-sm transition ${lang === l ? 'bg-white text-green-900' : 'bg-green-800 hover:bg-green-700'
                                    }`}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-semibold shadow-md text-sm transition"
                    >
                        <Printer className="w-5 h-5" /> {t.download}
                    </button>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-24 bg-gradient-to-br from-green-800 to-emerald-700 text-white text-center py-12">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2">{t.title}</h1>
                <p className="text-lg opacity-90">Know your harvest • Know your money</p>
            </section>

            {/* Search + Crops */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                {/* Search */}
                <div className="relative max-w-2xl mx-auto mb-8">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder={t.searchPlaceholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-green-300 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Crop Grid */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">{t.select}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filteredCrops.map((c, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setSelected(crops.indexOf(c));
                                setShowRisks(false);
                                setSearchQuery('');
                            }}
                            className={`bg-white rounded-xl shadow-md p-3 hover:scale-105 transition-all duration-200 flex flex-col items-center ${selected === crops.indexOf(c) ? 'ring-2 ring-green-500 shadow-lg' : ''
                                }`}
                        >
                            <c.icon className="w-10 h-10 text-green-700 mb-2" />
                            <p className="font-semibold text-sm text-center">{c.name[lang]}</p>
                        </button>
                    ))}
                </div>
                {filteredCrops.length === 0 && (
                    <p className="text-center text-gray-500 mt-10 text-base">No crop found. Try another name!</p>
                )}
            </section>

            {/* Printable Section */}
            <section ref={printRef} className="max-w-6xl mx-auto px-4 py-10 bg-white rounded-2xl shadow-md">
                <Image src={crop.image} alt={crop.name[lang]} width={1200} height={500} className="w-full h-60 md:h-72 object-cover rounded-2xl mb-6" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 text-center mb-6">{crop.name[lang]} → Profit Guide</h2>

                {/* Land + Price */}

                {/*Current Price */}
                <div className="bg-yellow-100 p-3 rounded-lg border-2 border-yellow-300 text-center">
                    <p className="text-sm font-semibold">{t.currentPrice}</p>
                    <p className="text-xl font-bold text-green-700">UGX {crop.price.ugx.toLocaleString()}</p>
                    <span className="text-xs">{t.perBag}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-6 items-end justify-between">
                    <div>
                        <label className="block text-lg font-semibold mb-1">{t.landSize}</label>
                        <input
                            type="number"
                            step="0.1"
                            min="0.1"
                            value={landSize}
                            onChange={(e) => setLandSize(e.target.value)}
                            className="w-full px-3 py-2 border-2 border-green-400 rounded-lg text-center text-base font-semibold"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setUnit('acres')}
                            className={`flex-1 py-2 rounded-lg font-semibold text-base ${unit === 'acres' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                        >
                            {t.acres}
                        </button>
                        <button
                            onClick={() => setUnit('hectares')}
                            className={`flex-1 py-2 rounded-lg font-semibold text-base ${unit === 'hectares' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                        >
                            {t.hectares}
                        </button>
                    </div>

                </div>

                {/* Revenue */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-xl border-2 border-green-300 text-center shadow-sm">
                        <Sprout className="w-12 h-12 mx-auto mb-2 text-green-700" />
                        <p className="text-base font-semibold text-green-900">{t.goodManagement}</p>
                        <p className="text-2xl font-bold text-green-700 mt-2">UGX {revenue.good.toLocaleString()}</p>
                        <p className="text-sm">{(yields.good / 100).toFixed(1)} {t.bags}</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-300 text-center shadow-sm">
                        <Layers className="w-12 h-12 mx-auto mb-2 text-yellow-700" />
                        <p className="text-base font-semibold text-yellow-900">{t.average}</p>
                        <p className="text-2xl font-bold text-yellow-700 mt-2">UGX {revenue.average.toLocaleString()}</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-xl border-2 border-red-300 text-center shadow-sm">
                        <Scissors className="w-12 h-12 mx-auto mb-2 text-red-700" />
                        <p className="text-base font-semibold text-red-900">{t.poor}</p>
                        <p className="text-2xl font-bold text-red-700 mt-2">UGX {revenue.poor.toLocaleString()}</p>
                    </div>
                </div>

                {/* Steps */}
                <h3 className="text-2xl md:text-3xl font-bold text-green-800 text-center mb-4">{t.stepsTitle}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start gap-2">
                            <step.icon className="w-8 h-8 text-green-700" />
                            <h4 className="text-lg font-semibold text-green-800">{step.title}</h4>
                            <p className="text-sm">{crop.details[step.key as keyof typeof crop.details][lang]}</p>
                        </div>
                    ))}
                </div>

                {/* Risks */}
                <button
                    onClick={() => setShowRisks(!showRisks)}
                    className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold mb-2 hover:bg-red-200 transition print:hidden"
                >
                    <Bug className="w-5 h-5" /> {t.risks}
                </button>
                {showRisks && (
                    <div className="bg-red-50 p-4 rounded-xl border-2 border-red-300">
                        <Image src={crop.risks.image} alt="Pest" width={800} height={400} className="w-full rounded-lg mb-2" />
                        <p className="text-sm font-semibold text-red-800 mb-1">Main Threats:</p>
                        <p className="text-sm mb-2">{crop.risks.pests[lang]}</p>
                        <p className="text-sm font-semibold text-green-800">Prevention:</p>
                        <p className="text-sm">{crop.risks.prevention[lang]}</p>
                    </div>
                )}

                {/* NARO Contact */}
                <div className="mt-8 text-center bg-green-50 p-4 rounded-xl border-2 border-green-300">
                    <Users className="w-12 h-12 mx-auto mb-2 text-green-800" />
                    <p className="text-lg font-bold">Call NARO: 0414-320 512</p>
                    <p className="text-sm">Free advice • Available 24/7</p>
                </div>
            </section>
        </>
    );
}
