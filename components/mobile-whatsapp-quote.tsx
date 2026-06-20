"use client";

import { MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const whatsappNumber = "447397640534";

export function MobileWhatsAppQuote() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [service, setService] = useState("Handyman Services");
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hi Aubries, I would like a quote.",
      name ? `Name: ${name}` : "",
      area ? `Area/Postcode: ${area}` : "",
      service ? `Service: ${service}` : "",
      details ? `Job details: ${details}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="mobile-quote" className="relative isolate overflow-hidden bg-[#100905] px-4 py-7 text-white md:hidden">
      <div className="absolute inset-0 opacity-30 wood-grain" />
      <div className="relative overflow-hidden rounded-lg border border-[#f6a03d]/35 bg-[#1b0f08] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#7a421c] via-[#f97316] to-[#7a421c]" />
        <span className="absolute -right-8 -top-10 size-28 rounded-full bg-[#f97316]/20 blur-2xl" />
        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-lg border border-[#f6a03d]/45 bg-[#0d0805] text-[#f6a03d] shadow-inner">
              <MessageCircle size={26} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f5c88d]">Fast Mobile Quote</p>
              <h2 className="text-2xl font-black leading-tight">Send job details on WhatsApp</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
            <label className="grid gap-1.5 text-sm font-bold text-[#f5c88d]">
              Name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="min-h-12 rounded-lg border border-[#f6a03d]/30 bg-black/35 px-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/25"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-bold text-[#f5c88d]">
              Area or Postcode
              <input
                value={area}
                onChange={(event) => setArea(event.target.value)}
                className="min-h-12 rounded-lg border border-[#f6a03d]/30 bg-black/35 px-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/25"
                placeholder="Upton, Pontefract"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-bold text-[#f5c88d]">
              Job Type
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="min-h-12 rounded-lg border border-[#f6a03d]/30 bg-black/35 px-3 text-base text-white outline-none transition focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/25"
              >
                <option>Handyman Services</option>
                <option>Plumbing Solutions</option>
                <option>Electrician Services</option>
                <option>Home Improvement</option>
                <option>General Repairs</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-bold text-[#f5c88d]">
              Job Details
              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                className="min-h-28 rounded-lg border border-[#f6a03d]/30 bg-black/35 px-3 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/25"
                placeholder="What needs fixing?"
                required
              />
            </label>
            <button
              type="submit"
              className="mt-1 inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[#f97316] px-5 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_28px_rgba(249,115,22,0.28)] ring-1 ring-[#ffd08a]/50 transition active:scale-[0.98]"
            >
              Send on WhatsApp
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
