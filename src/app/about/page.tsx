"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Leader = {
  name: string;
  image: string;
  bio?: string;
  specialties: string[];
  experience: string[];
};

const leaders: Leader[] = [
  {
    name: "Jenny Hou",
    image: "/images/JennyHou.png",
    specialties: [
      "Structured Finance Valuation & Due Diligence",
      "Pricing Models and Mortgage & Energy Asset Risk Analytics",
      "Credit Exposure & Cash Reserve Calc",
      "Transmission Investment Model TransRisk Pricing (published by NatGas & Electricity Journal)",
    ],
    experience: [
      "Power Market Design PHB Hagler Bailly",
      "Capital Market Asset Risk Analytics, PwC",
      "Enron Bankruptcy SPE unwinding, valuation, Settlement with Investors",
      "Sr. Advisor for USDOE Loan Guarantee Program (Tesla, A123, AES/NYISO Storage Loan Application Risk Review)",
    ],
  },
  {
    name: "Jeanette Pablo",
    image: "/images/Jeane.jpeg",
    specialties: [
      "Analytics of Climate Change Policy & Clean Energy Technology",
      "Climate Equity and the Clean Energy Transition",
      "U.S. and International Energy and Environmental Policy",
      "Energy and Environment Attorney",
    ],
    experience: [
      "OECD + IEA Climate Change Expert Group",
      "Climate Equity Research Fellow, Clean Air Task Force",
      "General Counsel, Energy Future Initiatives (Founded by former Secretary of Energy Ernest Moniz)",
      "Acting Deputy Director for Energy Systems and Senior Advisor, DOE",
      "Director of Federal Affairs & Senior Climate Advisor, PNM Resources",
    ],
  },
  {
    name: "Fred Cohen",
    image: "/images/fredCohen.png",
    specialties: [
      "Treasury and Cash Risk Management (Foreign Currency, Interest Rates)",
      "Treasury and Trading Systems",
      "Financial Controls, Reporting and Disclosure",
      "Energy & Commodity Risk Management",
    ],
    experience: [
      "Advisory Leader for All Sectors EXCLUDING Financial Services, PwC",
      "Partner leader for Expansion of Finance, Operations, Risk and Compliance Practices, PwC",
      "Founder, Energy & Commodity Risk Management Practice, Capital Markets Group, PwC",
      "Board Member, REVAL (FINTECH Venture)",
      "Acting Treasurer, News Corp (FOX & 21st Century)",
    ],
  },
  {
    name: "Robert W. Gee",
    image: "/images/Gee-Headshot_tight2-scaled.jpg",
    specialties: [
      "Energy Industry Veteran of 40+ years",
      "Expert in Global & Domestic U.S. Energy Policy and Regulation",
      "Advisor on Regulatory and Political Risk for Utility Asset Acquisitions",
      "Thought Leader for Private Sector and Government Agencies",
    ],
    experience: [
      "Consultant to Global and U.S. Energy Investors",
      "Assistant Secretary, U.S. Department of Energy (Policy & International Affairs, Fossil Energy)",
      "Chairman, Public Utility Commission of Texas",
      "Vice President, EPRI",
      "Trial Attorney in Private Practice and at FERC",
    ],
  },
  {
    name: "David Owens",
    image: "/images/DavidOwensPhoto.jpg",
    bio: "After 36 years of service, Owens retired in mid-2017 as executive vice president of the Edison Electric Institute (EEI). He was the first African-American to hold an officer title with the organization. The Institute represents all US investor-owned electric companies. He spearheaded efforts to invest in the nation's electric infrastructure with new technology enhancing energy efficiency with smart buildings, smart meters and smart grids. Instrumental behind the founding of the American Association of Blacks in Energy, he has mentored generations of young men and women pursuing careers in energy.",
    specialties: [
      "US Energy Industry, Who is Who",
      "Electric Utility Issues, Industry Restructuring, and Transformation",
      "Utility Mergers, Electric Integration Issues, and Utility Financial Disclosure",
      "Grid Modernization & Digital Transformation",
    ],
    experience: [
      "Former Board Member, Xcel Energy",
      "Former Vice Chairman, Puerto Rico Electric Power Authority",
      "Retired COO & EVP, Edison Electric Institute",
      "Chief Engineer for Division of Rates and Corporate Regulation, Security Exchange Commission",
    ],
  },
  {
    name: "Charles Yeung",
    image: "/images/CharlesYeung2026.jpg",
    specialties: [
      "Electric utility engineer and power markets advocate",
      "Registered Professional Engineer and MBA",
      "Expertise in Inverter-Based Resources, wind solar and battery energy storage",
    ],
    experience: [
      "Experience at utilities, power marketers and the Southwest Power Pool RTO",
      "Forming NERC electric reliability standards for grid reliability, security and market growth",
      "Held numerous leadership positions on NERC committees and the ISO/RTO Council",
      "Collaborated with all sectors and players of the wholesale electric industry",
    ],
  },
  {
    name: "Todd Strauss",
    image: "/images/ToddStrausss.jpg",
    bio: "Todd has more than 30 years of experience in the electricity industry. With his unique blend of quantitative expertise, strong communication skills, and sharp business acumen, Todd has led analytic teams at utilities, consulting, and academia. Todd has deep hands-on knowledge and experience at the intersection of public policy and commercial activity. Todd held various leadership roles at Pacific Gas and Electric Company, culminating as Senior Director of Analytics, Innovation, and Strategy. Todd earned his PhD in Industrial Engineering and Operations Research at the University of California at Berkeley, and SB majoring in mathematics at the Massachusetts Institute of Technology.",
    specialties: [
      "Analytics for energy and finance",
      "Electricity policy and regulation",
      "Strategic planning",
      "Stakeholder negotiations",
    ],
    experience: [
      "Adjunct Professor, University of California at Berkeley",
      "Senior Director, Analytics, Innovation, and Strategy, PG&E",
      "Principal, PHB Hagler Bailly",
      "Assistant Professor, Yale School of Management",
      "Gilbert White Fellow, Resources for the Future",
      "Regulatory Fellow, California Public Utilities Commission",
    ],
  },
];

function LeaderCard({
  leader,
  index,
}: {
  leader: Leader;
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="flip-card-perspective"
      style={{ height: 360 }}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-front bg-espx-navy-light border border-white/[0.06] flex flex-col">
          <div className="relative w-full flex-1 bg-espx-navy">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain object-bottom"
            />
          </div>

          <div className="px-4 py-3 flex items-center justify-between flex-shrink-0 bg-espx-navy-light/80">
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                {leader.name}
              </h3>
              <p className="text-xs text-espx-cyan/70 mt-0.5">ESPX Global</p>
            </div>

            <button
                onClick={() => setIsFlipped(true)}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-espx-cyan transition-colors group"
                aria-label={`View bio for ${leader.name}`}
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
                Bio
              </button>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-espx-navy-light border border-white/[0.06] flex flex-col">
          <div className="p-5 flex-1 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
            <h3 className="text-lg font-bold text-white mb-4">
              {leader.name}
            </h3>

            {leader.bio && (
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                {leader.bio}
              </p>
            )}

            <div className="mb-4">
              <h4 className="text-xs font-semibold text-espx-cyan uppercase tracking-wider mb-2">
                Specialties
              </h4>
              <ul className="space-y-1.5">
                {leader.specialties.map((s) => (
                  <li
                    key={s}
                    className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-espx-cyan/60 mt-1.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-espx-cyan uppercase tracking-wider mb-2">
                Experience
              </h4>
              <ul className="space-y-1.5">
                {leader.experience.map((e) => (
                  <li
                    key={e}
                    className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-espx-teal/60 mt-1.5 flex-shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-5 py-4 border-t border-white/[0.06] flex items-center justify-end flex-shrink-0">
            <button
              onClick={() => setIsFlipped(false)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-espx-cyan transition-colors group"
              aria-label={`Close bio for ${leader.name}`}
            >
              <svg
                className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
              Close
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-48">
      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-espx-teal-dark/20 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-espx-cyan">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Our vision is to elevate energy markets from the traditional
            marketplace to an energy blockchain providing increased security,
            reliability and technology driven innovation.
          </motion.p>
        </div>
      </section>

      {/* Leadership */}
      <section className="pt-14 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ESPX <span className="text-espx-cyan">Leadership Team</span>
            </h2>
            {/* Keeping the subtitle in case it is still desired, but styled as a subtitle */}
            <p className="text-xl text-gray-300">
              Strength in Experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
