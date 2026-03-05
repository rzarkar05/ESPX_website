"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
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
    name: "Peter Jenson",
    image: "/images/PeterJenson.png",
    specialties: [
      "Board or Senior Advisor in Strategic, Operational, Financial, and Trading",
      "Energy Trading",
      "Complex financial instruments",
      "Hedge Funds, Broker Dealers and Financial Services",
    ],
    experience: [
      "Partner, MD, CFO for broker dealers and Global Controller Citadel",
      "CFO of Constellation Commodities Group (former JV partner with Goldman Sachs)",
      "Partner Banking and Capital Markets PwC NY",
      "Founder & Managing Partner of Denison Gate private investment vehicle and consultancy",
    ],
  },
  {
    name: "David Owens",
    image: "/images/DavidOwens.png",
    specialties: [
      "US Energy Industry, Who is Who",
      "Electric Utility Issues, Industry Restructuring, and Transformation",
      "Utility Mergers, Electric Integration Issues, and Utility Financial Disclosure",
      "Grid Modernization & Digital Transformation",
    ],
    experience: [
      "Board Member, Xcel Energy",
      "Vice Chairman, Puerto Rico Energy Restructuring Commission",
      "Retired COO & EVP, Edison Electric Institute",
      "Chief Engineer for Division of Rates and Corporate Regulation, SEC",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="relative py-24 overflow-hidden">
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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-espx-cyan uppercase tracking-[0.2em] mb-4">
              Leadership
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-white">
              Our Team
            </p>
          </motion.div>

          <div className="space-y-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Photo */}
                  <div className="lg:w-64 flex-shrink-0">
                    <div className="relative w-full h-64 lg:h-full">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espx-navy/80 to-transparent lg:bg-gradient-to-r" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {leader.name}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold text-espx-cyan uppercase tracking-wider mb-3">
                          Specialties
                        </h4>
                        <ul className="space-y-2">
                          {leader.specialties.map((s) => (
                            <li
                              key={s}
                              className="text-sm text-gray-400 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-espx-cyan/60 mt-1.5 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-espx-cyan uppercase tracking-wider mb-3">
                          Experience
                        </h4>
                        <ul className="space-y-2">
                          {leader.experience.map((e) => (
                            <li
                              key={e}
                              className="text-sm text-gray-400 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-espx-teal/60 mt-1.5 flex-shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
