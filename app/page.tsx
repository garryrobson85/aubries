import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Drill,
  Hammer,
  Mail,
  MapPin,
  Phone,
  PlugZap,
  Recycle,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Wrench
} from "lucide-react";
import { AubriesLogo } from "@/components/aubries-logo";

/* eslint-disable @next/next/no-img-element */

const phoneDisplay = "07397 640534";
const phoneHref = "tel:+447397640534";
const email = "Aubriestoolandplanthire@gmail.com";
const assetPath = "/aubries/aubries";

const services = [
  {
    title: "Electrician Services",
    description: "Always ready to handle your electrical needs, from small fittings and fault checks to practical home improvements.",
    icon: PlugZap,
    terms: "electrical handyman support, sockets, lighting, fixtures, safe minor electrical jobs"
  },
  {
    title: "Plumbing Solutions",
    description: "Efficient plumbing services to keep your home running smoothly, including small repairs, replacements and maintenance.",
    icon: ShowerHead,
    terms: "plumbing repairs, taps, leaks, pipework, bathroom maintenance"
  },
  {
    title: "Home Improvement",
    description: "Enhancing your living space with quality renovations, repairs, upgrades and practical improvements around the home.",
    icon: Drill,
    terms: "home repairs, renovations, joinery, decorating, household upgrades"
  },
  {
    title: "Handyman Services",
    description: "General repairs and maintenance tailored to your requirements, with a personal touch and tidy workmanship.",
    icon: Wrench,
    terms: "general handyman, property maintenance, flat packs, fixtures, odd jobs"
  }
];

const gallery = [
  { src: `${assetPath}/site-image-1.webp`, alt: "Aubries handyman work van and maintenance service image", tall: true },
  { src: `${assetPath}/site-image-2.webp`, alt: "Aubries handyman tools and home improvement work" },
  { src: `${assetPath}/site-image-3.webp`, alt: "Aubries property repair and maintenance project" },
  { src: `${assetPath}/site-image-4.webp`, alt: "Aubries electrical and household repair work" },
  { src: `${assetPath}/site-image-5.webp`, alt: "Aubries plumbing and practical home maintenance work" }
];

const faqs = [
  {
    question: "Where is Aubries Handyman & Maintenance based?",
    answer: "Aubries Handyman & Maintenance is based in Upton, Pontefract and provides local handyman, maintenance, plumbing, electrical and home improvement support."
  },
  {
    question: "What makes Aubries different?",
    answer: "The service is budget-friendly, fully insured and focused on quality repairs with a personal touch. Reused and repurposed materials are used where practical for sustainable home improvement."
  },
  {
    question: "How do I get a quote?",
    answer: `Call ${phoneDisplay} or email ${email} with a short description of the job, your location and any helpful photos.`
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#1c120b] text-[#21160f]">
      <header className="sticky top-0 z-40 border-b border-[#b86822]/50 bg-[#090705]/96 shadow-[0_10px_30px_rgba(0,0,0,0.38)] backdrop-blur">
        <div className="absolute inset-0 opacity-25 wood-grain" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:gap-4 sm:px-8 sm:py-2.5">
          <Link href="#top" className="flex min-w-0 items-center gap-3" aria-label="Aubries Handyman and Maintenance home">
            <img
              src={`${assetPath}/aubries-rustic-logo-header-120.webp`}
              alt="Aubries Handyman and Maintenance"
              width={120}
              height={117}
              className="h-14 w-auto object-contain drop-shadow-[0_0_16px_rgba(217,119,6,0.34)] sm:h-16"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block text-lg font-black uppercase tracking-wide text-[#f6a03d]">Aubries</span>
              <span className="block text-xs font-bold uppercase tracking-[0.24em] text-[#e8d8c0]">Handyman & Maintenance</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-2 text-sm font-bold text-white md:flex">
            <Link href="#services" className="rounded-full border border-transparent px-4 py-2 text-white/90 transition hover:border-[#b86822]/60 hover:bg-[#6b3414]/45 hover:text-[#f6a03d]">Services</Link>
            <Link href="#work" className="rounded-full border border-transparent px-4 py-2 text-white/90 transition hover:border-[#b86822]/60 hover:bg-[#6b3414]/45 hover:text-[#f6a03d]">Work</Link>
            <Link href="#about" className="rounded-full border border-transparent px-4 py-2 text-white/90 transition hover:border-[#b86822]/60 hover:bg-[#6b3414]/45 hover:text-[#f6a03d]">About</Link>
            <Link href="#contact" className="rounded-full border border-transparent px-4 py-2 text-white/90 transition hover:border-[#b86822]/60 hover:bg-[#6b3414]/45 hover:text-[#f6a03d]">Contact</Link>
          </nav>
          <Link
            href={phoneHref}
            className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-[#21130b] px-3 text-sm font-bold text-white shadow-lg shadow-[#b86822]/25 ring-1 ring-[#b86822]/45 transition hover:bg-[#9a4b18] sm:min-h-11 sm:px-4"
          >
            <Phone size={17} aria-hidden="true" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </Link>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden bg-[#120b06] text-white">
        <div className="absolute inset-0 opacity-22">
          <img src={`${assetPath}/site-image-1.webp`} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(184,104,34,0.34),transparent_34%),linear-gradient(90deg,rgba(13,7,3,0.98),rgba(22,12,6,0.88),rgba(12,8,5,0.68))]" />
        <div className="absolute inset-0 opacity-35 wood-grain" />
        <div className="relative mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl items-center gap-4 px-6 py-6 sm:px-8 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:px-10 lg:py-12">
          <div className="order-2 max-w-3xl lg:order-1">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9843a]/45 bg-[#2b180d]/80 px-4 py-2 text-xs font-bold text-[#f5c88d] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:mb-5 sm:text-sm">
              <ShieldCheck size={17} aria-hidden="true" />
              Fully insured handyman services in Upton, Pontefract
            </p>
            <h1 className="max-w-[12ch] text-4xl font-black leading-[1.02] tracking-normal text-[#fff8ef] sm:text-6xl lg:text-7xl">
              Affordable Handyman & Maintenance Services
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-8">
              Aubries Handyman & Maintenance provides professional, budget-friendly repairs, plumbing solutions, electrician services and home improvement work with quality service and a personal touch.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Link
                href={phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d97706] px-6 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-[#d97706]/25 ring-1 ring-[#f6c27a]/45 transition hover:-translate-y-0.5 hover:bg-[#f97316]"
              >
                <Phone size={18} aria-hidden="true" />
                Get a Quote
              </Link>
              <Link
                href={`mailto:${email}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c9843a]/45 bg-[#2b180d]/75 px-6 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#43230f]"
              >
                <Mail size={18} aria-hidden="true" />
                Email Aubries
              </Link>
            </div>
            <dl className="mt-8 grid gap-3 text-sm text-white/85 sm:mt-10 sm:grid-cols-3">
              {["Electrician Services", "Plumbing Solutions", "Home Improvement"].map((item) => (
                <div key={item} className="rounded-lg border border-[#c9843a]/25 bg-[#1c1008]/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <dt className="font-bold text-white">{item}</dt>
                  <dd className="mt-1">Reliable, local, affordable.</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="order-1 self-start pt-1 sm:pt-2 lg:order-2 lg:self-center lg:pt-0">
            <AubriesLogo />
          </div>
        </div>
      </section>

      <section id="services" className="relative border-y border-[#6b3414]/40 bg-[#ead7bd] py-16 sm:py-20">
        <div className="absolute inset-0 opacity-40 wood-grain-light" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9a4b18]">Our Services and Highlights</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Reliable home repairs without the inflated price tag.</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-black/68">
              Explore our range of services designed to meet your home improvement needs. We pride ourselves on quality, affordability and sustainability, including reused and repurposed materials where they are suitable for the job.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="service-card rounded-lg border border-[#7a421c]/25 bg-[#fff7ea]/88 p-6 shadow-[0_16px_36px_rgba(55,31,16,0.12)] transition hover:-translate-y-1 hover:border-[#b86822]/60 hover:shadow-xl">
                <service.icon className="mb-5 size-10 text-[#9a4b18]" aria-hidden="true" />
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-black/68">{service.description}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-black/45">{service.terms}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#21130b] py-16 text-[#fff8ef] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6a03d]">Current Site Imagery</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Practical work, tidy finishes, useful repairs.</h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                From general maintenance to plumbing, electrical support and home improvement, Aubries focuses on straightforward service, fair pricing and dependable results around Pontefract.
              </p>
              <div className="mt-8 grid gap-3 text-sm font-bold text-white/76 sm:grid-cols-2">
                {["Quality services with a personal touch", "Budget-friendly maintenance", "Reused and repurposed materials", "Fully insured local service"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-[#f6a03d]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {gallery.map((image, index) => (
                <div key={image.src} className={image.tall ? "relative min-h-[29rem] overflow-hidden rounded-lg border border-[#b86822]/35 bg-black shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:row-span-2" : "relative min-h-56 overflow-hidden rounded-lg border border-[#b86822]/35 bg-black shadow-[0_18px_40px_rgba(0,0,0,0.35)]"}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#130b06] py-16 text-white sm:py-20">
        <div className="absolute inset-0 opacity-30 wood-grain" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff8b4a]">Reliable & Affordable Services</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">A local handyman for repairs that actually need doing.</h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              Providing professional handyman services that are budget-friendly. Aubries specialises in reused and repurposed materials for home improvement, helping customers make sensible repairs while keeping costs under control.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { icon: Hammer, title: "General repairs", text: "Fixings, fittings, maintenance jobs and practical household repairs." },
              { icon: Recycle, title: "Sustainable approach", text: "Repurposed materials used where appropriate for value and reduced waste." },
              { icon: Sparkles, title: "Personal touch", text: "Friendly, direct communication and attention to the little details." }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-[#b86822]/30 bg-[#2b180d]/78 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <item.icon className="mb-4 size-8 text-[#ff8b4a]" aria-hidden="true" />
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ead7bd] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9a4b18]">Search-Friendly Answers</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Handyman FAQs</h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-lg border border-[#7a421c]/25 bg-[#fff7ea] p-5 shadow-sm">
                  <summary className="cursor-pointer text-lg font-black">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-black/68">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-[#9a4b18] py-14 text-white">
        <div className="absolute inset-0 opacity-25 wood-grain" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-black sm:text-5xl">Contact us for a quote.</h2>
            <div className="mt-5 grid gap-3 text-lg font-bold">
              <Link href={phoneHref} className="flex items-center gap-3 hover:underline">
                <Phone size={22} aria-hidden="true" />
                Telephone: {phoneDisplay}
              </Link>
              <Link href={`mailto:${email}`} className="flex items-center gap-3 break-all hover:underline">
                <Mail size={22} aria-hidden="true" />
                E-mail: {email}
              </Link>
              <p className="flex items-center gap-3">
                <MapPin size={22} aria-hidden="true" />
                Address: Upton, Pontefract
              </p>
            </div>
          </div>
          <Link
            href={phoneHref}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-black uppercase tracking-wide text-[#171717] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#171717] hover:text-white"
          >
            Call Aubries Now
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
