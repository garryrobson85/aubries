import type { Metadata } from "next";
import { SiteFeedback } from "@/components/site-feedback";
import "./globals.css";

const siteUrl = "https://garryrobson85.github.io/aubries";
const businessName = "Aubries Handyman & Maintenance";
const phone = "+44 7397 640534";
const email = "Aubriestoolandplanthire@gmail.com";
const githubLogo = `${siteUrl}/aubries/aubries-rustic-logo-512.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aubries Handyman & Maintenance | Handyman Services in Pontefract",
    template: "%s | Aubries Handyman & Maintenance"
  },
  description:
    "Affordable, fully insured handyman and maintenance services in Upton, Pontefract. Electrical support, plumbing solutions, home improvement and general repairs with a personal touch.",
  applicationName: businessName,
  keywords: [
    "handyman Pontefract",
    "handyman Upton",
    "Aubries Handyman",
    "property maintenance Pontefract",
    "home repairs Pontefract",
    "plumbing repairs Pontefract",
    "electrician services Pontefract",
    "home improvement Pontefract",
    "affordable handyman West Yorkshire",
    "fully insured handyman"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: businessName,
    title: "Aubries Handyman & Maintenance | Affordable Local Repairs",
    description:
      "Budget-friendly, fully insured handyman, plumbing, electrical and home improvement services based in Upton, Pontefract.",
    images: [
      {
        url: githubLogo,
        width: 512,
        height: 512,
        alt: "Aubries Handyman & Maintenance logo"
      }
    ],
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aubries Handyman & Maintenance",
    description: "Affordable handyman and maintenance services in Upton, Pontefract.",
    images: [githubLogo]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/aubries/aubries/aubries-rustic-logo-512.png",
    apple: "/aubries/aubries/aubries-rustic-logo-512.png"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${siteUrl}/#business`,
      name: businessName,
      url: siteUrl,
      image: githubLogo,
      logo: githubLogo,
      telephone: phone,
      email,
      description:
        "Fully insured, budget-friendly handyman and maintenance services in Upton, Pontefract, including electrical support, plumbing solutions, home improvement and general repairs.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Upton",
        addressRegion: "Pontefract",
        addressCountry: "GB"
      },
      areaServed: [
        { "@type": "Place", name: "Upton" },
        { "@type": "Place", name: "Pontefract" },
        { "@type": "AdministrativeArea", name: "West Yorkshire" }
      ],
      priceRange: "Budget-friendly",
      knowsAbout: [
        "Handyman services",
        "Property maintenance",
        "Electrical handyman services",
        "Plumbing repairs",
        "Home improvement",
        "General repairs",
        "Reused and repurposed materials"
      ],
      makesOffer: [
        "Electrician Services",
        "Plumbing Solutions",
        "Home Improvement",
        "Handyman Services",
        "General Repairs and Maintenance"
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": `${siteUrl}/#business` },
          areaServed: "Upton, Pontefract"
        }
      }))
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: businessName,
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-GB"
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Aubries Handyman & Maintenance based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aubries Handyman & Maintenance is based in Upton, Pontefract and provides local handyman, maintenance, plumbing, electrical and home improvement support."
          }
        },
        {
          "@type": "Question",
          name: "What makes Aubries different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The service is budget-friendly, fully insured and focused on quality repairs with a personal touch. Reused and repurposed materials are used where practical for sustainable home improvement."
          }
        },
        {
          "@type": "Question",
          name: "How do I get a quote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Call 07397 640534 or email ${email} with a short description of the job, your location and any helpful photos.`
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <SiteFeedback />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
