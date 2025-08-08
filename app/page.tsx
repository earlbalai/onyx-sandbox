"use client";

import { useState } from "react";

export default function Home() {
  const [sku, setSku] = useState("smd2470asy");

  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center font-sans px-4">
      <div className="w-full max-w-xl text-center space-y-8">
        <h1 className="text-3xl font-bold">Onyx AI Widget Tester</h1>

        <div className="flex flex-col items-center gap-4">
          <label
            htmlFor="sku-input"
            className="text-sm font-medium text-gray-600"
          >
            Enter SKU
          </label>
          <input
            id="sku-input"
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="text-gray-600">Preview iFrame below</div>

        <div className="w-full min-h-[250px]">
          <iframe
            key={sku} // forces iframe to reload when SKU changes
            src={`https://onyx.ktappliance.com/ai_widget?sku=${encodeURIComponent(sku)}`}
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}
