// app/page.tsx
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("https://n8n.veridiastudio.fr/webhook/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numero: phone }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage("✅ Code OTP envoyé sur votre WhatsApp !");
        // Ici tu pourras basculer vers l'étape de saisie du code plus tard
      } else {
        setErrorMessage(data.message || "Numéro non reconnu.");
      }
    } catch (error) {
      setErrorMessage("Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-5">
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
              required
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition"
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-400 text-center font-medium">{errorMessage}</p>
          )}

          {successMessage && (
            <p className="text-sm text-emerald-400 text-center font-medium">{successMessage}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-3 font-semibold text-white transition-colors disabled:opacity-50"
            style={{ backgroundColor: "#ea580c" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#c2410c")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ea580c")
            }
          >
            {loading ? "Vérification en cours..." : "Recevoir le code"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/50">
          Vous recevrez un code par WhatsApp
        </p>
      </div>
    </main>
  );
}
