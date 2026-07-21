// app/page.tsx
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-white">Veridia</span>
            <span style={{ color: "#ea580c" }}>Studio</span>
          </h1>
        </div>

        {/* Formulaire */}
        <form className="space-y-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Numéro de téléphone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="06 12 34 56 78"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg py-3 font-semibold text-white transition-colors"
            style={{ backgroundColor: "#ea580c" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#c2410c")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ea580c")
            }
          >
            Recevoir le code
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/50">
          Vous recevrez un code par WhatsApp
        </p>
      </div>
    </main>
  );
}