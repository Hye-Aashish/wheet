"use client";

import React, { useEffect, useRef, useState } from "react";
import { storeLocations } from "../data/storeLocations";
import { FaMapMarkerAlt, FaSearch, FaDirections, FaCopy, FaCheck, FaPhoneAlt, FaClock, FaStoreAlt, FaCompressArrowsAlt } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import "leaflet/dist/leaflet.css";

export default function StoreLocator() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});

  const [activeLocationId, setActiveLocationId] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [isMapReady, setIsMapReady] = useState(false);

  // Region filter tabs
  const regions = [
    { label: "All Locations", value: "All", count: storeLocations.length },
    { label: "Calgary & Airdrie, AB", value: "Calgary & Airdrie", count: storeLocations.filter(s => s.region === "Calgary & Airdrie").length },
    { label: "Surrey, BC", value: "Surrey", count: storeLocations.filter(s => s.region === "Surrey").length },
    { label: "Langley, BC", value: "Langley", count: storeLocations.filter(s => s.region === "Langley").length },
    { label: "Abbotsford, BC", value: "Abbotsford", count: storeLocations.filter(s => s.region === "Abbotsford").length },
  ];

  // Filtered stores
  const filteredLocations = storeLocations.filter((loc) => {
    const matchesRegion = selectedRegion === "All" || loc.region === selectedRegion;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      loc.name.toLowerCase().includes(query) ||
      loc.address.toLowerCase().includes(query) ||
      loc.city.toLowerCase().includes(query) ||
      loc.postalCode.toLowerCase().includes(query);

    return matchesRegion && matchesSearch;
  });

  // Initialize Leaflet Map
  useEffect(() => {
    let map = null;

    async function initMap() {
      if (typeof window === "undefined" || !mapContainerRef.current) return;

      const L = await import("leaflet");

      // Prevent re-initialization if already initialized
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Default center covering both AB and BC
      map = L.map(mapContainerRef.current, {
        center: [50.5, -118.0],
        zoom: 6,
        scrollWheelZoom: false,
      });

      // 100% Free Tile Providers (Zero API Key, Zero Watermarks)
      const streetLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: '&copy; Esri, OpenStreetMap',
        maxZoom: 19,
      });

      const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      });

      const satelliteLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        attribution: '&copy; Esri World Imagery',
        maxZoom: 19,
      });

      // Default active base layer
      streetLayer.addTo(map);

      // Layer control switcher in top-right
      L.control.layers({
        "🗺️ Street Map": streetLayer,
        "🌍 OpenStreetMap": osmLayer,
        "🛰️ Satellite View": satelliteLayer,
      }, null, { position: "topright" }).addTo(map);

      mapInstanceRef.current = map;
      setIsMapReady(true);

      // Create Custom SVG Marker Icon Generator
      const createCustomIcon = (id, isActive = false) => {
        const bgColor = isActive ? "#d97706" : "#023c68";
        const ringColor = isActive ? "#fbbf24" : "#ffffff";
        const size = isActive ? 44 : 36;

        return L.divIcon({
          className: "custom-leaflet-marker",
          html: `
            <div style="position: relative; width: ${size}px; height: ${size}px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s ease;">
              <div style="
                width: ${size}px;
                height: ${size}px;
                background: ${bgColor};
                border: 3px solid ${ringColor};
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                box-shadow: 0 4px 12px rgba(0,0,0,0.35);
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <span style="
                  transform: rotate(45deg);
                  color: white;
                  font-weight: 800;
                  font-size: ${isActive ? "13px" : "11px"};
                  font-family: sans-serif;
                ">${id}</span>
              </div>
            </div>
          `,
          iconSize: [size, size],
          iconAnchor: [size / 2, size],
          popupAnchor: [0, -size],
        });
      };

      // Add all markers
      const bounds = L.latLngBounds();
      markersRef.current = {};

      storeLocations.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng], {
          icon: createCustomIcon(loc.id, false),
          title: loc.name,
        }).addTo(map);

        bounds.extend([loc.lat, loc.lng]);

        const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`;

        const popupContent = `
          <div style="font-family: inherit; min-width: 230px; max-width: 280px; padding: 4px;">
            <div style="display: inline-block; background: #e0f2fe; color: #0369a1; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 9999px; text-transform: uppercase; margin-bottom: 6px;">
              📍 #${loc.id} • ${loc.badge}
            </div>
            <h4 style="margin: 0 0 6px 0; font-size: 14px; font-weight: 800; color: #0f172a; line-height: 1.3;">
              ${loc.name}
            </h4>
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #475569; line-height: 1.4;">
              ${loc.address}
            </p>
            <div style="font-size: 11px; color: #166534; font-weight: 600; margin-bottom: 10px;">
              ✓ Available: BAAZ Atta Range
            </div>
            <a href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" style="
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              background: #023c68;
              color: #ffffff;
              font-size: 11px;
              font-weight: 700;
              padding: 7px 12px;
              border-radius: 8px;
              text-decoration: none;
              transition: background 0.2s;
            ">
              <span>Directions on Google Maps</span> ↗
            </a>
          </div>
        `;

        marker.bindPopup(popupContent, {
          closeButton: true,
          offset: [0, -10],
        });

        marker.on("click", () => {
          setActiveLocationId(loc.id);
        });

        markersRef.current[loc.id] = marker;
      });

      if (storeLocations.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
      }
    }

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Pan to selected store when user clicks a card
  const handleSelectLocation = (loc) => {
    setActiveLocationId(loc.id);
    const map = mapInstanceRef.current;
    if (!map) return;

    map.flyTo([loc.lat, loc.lng], 15, {
      duration: 1.2,
      easeLinearity: 0.25,
    });

    const marker = markersRef.current[loc.id];
    if (marker) {
      marker.openPopup();
    }
  };

  // Reset to full view of all locations
  const handleResetView = () => {
    setActiveLocationId(null);
    setSelectedRegion("All");
    setSearchQuery("");
    const map = mapInstanceRef.current;
    if (!map) return;

    const L = window.L;
    if (!L) return;

    const bounds = L.latLngBounds(storeLocations.map((l) => [l.lat, l.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
  };

  // Zoom specifically to Alberta cluster
  const handleFocusAlberta = () => {
    const map = mapInstanceRef.current;
    if (!map) return;
    setSelectedRegion("Calgary & Airdrie");
    map.flyTo([51.15, -114.02], 11, { duration: 1 });
  };

  // Zoom specifically to BC cluster
  const handleFocusBC = () => {
    const map = mapInstanceRef.current;
    if (!map) return;
    setSelectedRegion("Surrey");
    map.flyTo([49.13, -122.75], 11, { duration: 1 });
  };

  // Copy address helper
  const handleCopyAddress = (id, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="store-locator" className="relative py-14 lg:py-24 bg-[#FAF9F5] border-y border-stone-200/80 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#023c68]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-14 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#023c68]/10 text-[#023c68] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase">
            <FaMapMarkerAlt className="text-amber-600 animate-bounce" />
            <span>12 Verified Retail Locations Across Canada</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-tight">
            Find BAAZ Atta In Stores Near You
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Our 100% pure Canadian Durum Wheat, Multigrain, Corn, Besan, and Jawar flours are proudly stocked at top retail grocery stores and wholesale markets across <strong>Alberta</strong> and <strong>British Columbia</strong>.
          </p>

          {/* Quick Cluster Shortcuts */}
          <div className="pt-2 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={handleFocusAlberta}
              className="px-4 py-1.5 bg-white hover:bg-stone-100 text-xs md:text-sm font-semibold text-gray-800 rounded-lg border border-stone-200 shadow-2xs transition cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Zoom to Calgary & Airdrie (5)</span>
            </button>
            <button
              onClick={handleFocusBC}
              className="px-4 py-1.5 bg-white hover:bg-stone-100 text-xs md:text-sm font-semibold text-gray-800 rounded-lg border border-stone-200 shadow-2xs transition cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Zoom to Greater Vancouver / Surrey (7)</span>
            </button>
            <button
              onClick={handleResetView}
              className="px-4 py-1.5 bg-[#023c68] hover:bg-[#03518c] text-xs md:text-sm font-semibold text-white rounded-lg shadow-2xs transition cursor-pointer flex items-center gap-1.5"
            >
              <FaCompressArrowsAlt className="text-xs" />
              <span>View All 12 Locations</span>
            </button>
          </div>
        </div>

        {/* ================= CONTROLS: FILTER TABS & SEARCH ================= */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-stone-200/80 mb-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full lg:w-auto">
            {regions.map((reg) => {
              const isActive = selectedRegion === reg.value;
              return (
                <button
                  key={reg.value}
                  onClick={() => setSelectedRegion(reg.value)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#023c68] text-white shadow-md"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  <span>{reg.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-stone-200 text-stone-600"
                  }`}>
                    {reg.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search by store, address, or postal code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#023c68] focus:border-transparent transition"
            />
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-xs" />
          </div>
        </div>

        {/* ================= MAIN CONTENT: MAP + SIDE DIRECTORY ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: MAP BOX (Col 7) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden shadow-lg border border-stone-300 bg-stone-100">
              
              {/* Map Container */}
              <div ref={mapContainerRef} className="w-full h-full z-10" />

              {/* Map Legend Overlay */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-stone-200 text-xs text-stone-700 hidden sm:flex items-center gap-4 pointer-events-auto">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#023c68] inline-block border-2 border-white shadow-xs" />
                  <span className="font-semibold text-stone-800">BAAZ Store Pin</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-500 inline-block border-2 border-white shadow-xs" />
                  <span className="font-semibold text-stone-800">Selected Pin</span>
                </div>
              </div>

              {/* Map Notice */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xs border border-stone-200 text-[11px] text-stone-600 hidden sm:block pointer-events-none">
                💡 Click any pin to view store details
              </div>
            </div>
          </div>

          {/* RIGHT: STORE DIRECTORY CARDS (Col 5) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <div className="bg-white rounded-2xl shadow-md border border-stone-200 flex flex-col h-[450px] sm:h-[520px] lg:h-[620px]">
              
              {/* Directory Header */}
              <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between shrink-0 bg-stone-50/60 rounded-t-2xl">
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center gap-2">
                    <FaStoreAlt className="text-[#023c68]" />
                    <span>Store Directory</span>
                  </h3>
                  <p className="text-xs text-stone-500">
                    Showing {filteredLocations.length} of {storeLocations.length} locations
                  </p>
                </div>

                {activeLocationId && (
                  <button
                    onClick={() => setActiveLocationId(null)}
                    className="text-xs text-[#023c68] hover:underline font-semibold cursor-pointer"
                  >
                    Clear Selection
                  </button>
                )}
              </div>

              {/* Scrollable Store Cards List */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-3 sm:p-4 space-y-3.5 divide-y divide-stone-100">
                {filteredLocations.length === 0 ? (
                  <div className="py-12 text-center text-stone-500 text-sm">
                    No store locations found matching your search.
                    <br />
                    <button
                      onClick={handleResetView}
                      className="mt-3 text-xs font-bold text-[#023c68] hover:underline cursor-pointer"
                    >
                      Reset filters to see all 12 locations
                    </button>
                  </div>
                ) : (
                  filteredLocations.map((loc) => {
                    const isSelected = activeLocationId === loc.id;
                    const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`;

                    return (
                      <div
                        key={loc.id}
                        onClick={() => handleSelectLocation(loc)}
                        className={`pt-3 first:pt-0 p-3.5 rounded-xl transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-amber-50/60 border-amber-400 shadow-md ring-2 ring-amber-300/40"
                            : "bg-white hover:bg-stone-50/80 border-stone-200/80 hover:border-stone-300"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              isSelected ? "bg-amber-600 text-white" : "bg-[#023c68] text-white"
                            }`}>
                              {loc.id}
                            </span>
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                              {loc.name}
                            </h4>
                          </div>

                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 shrink-0">
                            {loc.provinceCode}
                          </span>
                        </div>

                        {/* Address */}
                        <p className="text-xs text-stone-600 leading-relaxed mb-2.5 pl-8">
                          {loc.address}
                        </p>

                        {/* Hours & Availability */}
                        <div className="pl-8 text-[11px] text-stone-500 flex flex-col gap-1 mb-3">
                          <span className="flex items-center gap-1.5 text-stone-600">
                            <FaClock className="text-amber-600 text-[10px]" />
                            <span>{loc.hours}</span>
                          </span>
                          <span className="text-emerald-700 font-semibold">
                            ✓ In Stock: {loc.products}
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="pl-8 flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectLocation(loc);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#023c68] hover:bg-[#03518c] text-white transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
                          >
                            <MdMyLocation className="text-xs" />
                            <span>Show on Map</span>
                          </button>

                          <a
                            href={gmapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-800 transition flex items-center gap-1.5 border border-stone-200"
                          >
                            <FaDirections className="text-xs text-[#023c68]" />
                            <span>Directions</span>
                          </a>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyAddress(loc.id, loc.address);
                            }}
                            className="p-2 rounded-lg text-xs text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition cursor-pointer ml-auto"
                            title="Copy Address"
                          >
                            {copiedId === loc.id ? (
                              <FaCheck className="text-emerald-600 text-xs" />
                            ) : (
                              <FaCopy className="text-xs" />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Directory Footer CTA */}
              <div className="p-3.5 bg-stone-50 border-t border-stone-100 rounded-b-2xl text-center text-xs text-stone-600 shrink-0">
                Are you a retailer wanting to stock BAAZ Atta?{" "}
                <a href="/contact-us" className="text-[#023c68] font-bold hover:underline">
                  Contact Wholesale Team →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
