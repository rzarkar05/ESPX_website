"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PUFArticlePage() {
  return (
    <div className="pt-48">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-espx-teal-dark/20 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-espx-cyan hover:text-espx-cyan-dim transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to News
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-espx-cyan/10 text-espx-cyan border border-espx-cyan/20">
                Energy Storage
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-espx-teal/20 text-espx-teal-light border border-espx-teal/30">
                ESPX
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Featured
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              A Tech Based Solution to the Tech Based Growth Challenge
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Public Utilities Fortnightly</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>May 2026</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Load Growth &amp; System Planning</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Intro */}
            <div className="glass-card rounded-2xl p-8 mb-10 border-l-4 border-espx-cyan">
              <p className="text-gray-300 leading-relaxed text-lg italic m-0">
                As the economy continues to shift to a digital based economy,
                the surge in computing capability for data to support the
                internet of things and artificial intelligence has driven the
                electric power industry to develop new technology and methods to
                manage grid operations, planning, and infrastructure security.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              As the economy continues to shift to a digital based economy that
              can be traced back to the birth of the internet and personal
              computers, the surge in the need for computing capability for data
              to support the internet of things and artificial intelligence has
              also driven the electric power industry to develop new technology
              and methods to manage grid operations, planning and infrastructure
              security. New techniques are being employed like probabilistic
              planning that seeks to account for more variability and uncertainty
              in growth, generation, weather and other factors that for a
              capacity rich grid would not have been as crucial. In addition, the
              large investments needed to rapidly build out the grid makes it no
              surprise that affordability of electricity has come to the
              forefront of public interest.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              The cheapest and fastest to gain resource adequacy solutions are
              Energy Storage Resources (ESR). ESR capacity is expected to jump
              from an already tremendous 28 GW in the U.S. to 65 GW by the end
              of 2027 per the EIA. But ESRs inherently have great uncertainty in
              how much capacity and when they can contribute because of the
              variable nature of the energy stored making the State-of-Charge
              (SoC) difficult to determine and predict. A new tech-based
              methodology to manage this uncertainty is available and can provide
              much needed information for improving reliability and opening up
              new opportunities for ESR energy markets.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 my-10">
              <div className="glass-card rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-espx-cyan font-mono mb-1">
                  28 GW
                </p>
                <p className="text-sm text-gray-500">
                  Current U.S. ESR Capacity
                </p>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-espx-cyan font-mono mb-1">
                  65 GW
                </p>
                <p className="text-sm text-gray-500">
                  Projected by End of 2027
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              System planners today rely on discount factors which are a blend of
              historical data and economics to rate ESR capability to be used in
              planning models. System operators are also limited by SoC estimates
              to schedule ESR energy making it a reliability risk. These factors
              result in how much ESRs can contribute to the operations and
              planning of the grid.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              ESRs today are faced with the same uncertainty system planners were
              confronted with when they had to artificially limit wind generator
              capacity because of lack of certainty in wind performance. It took
              years of experience and forecasting improvements before wind
              resource capacity ratings became more reflective of their true
              output capabilities. This is where ESRs are today with SoC
              uncertainty. But the industry does not have the luxury of waiting
              for planners and operators to gain experience with ESRs to fully
              rate their capacity capabilities. New technology is available today
              to quickly increase ESR capacity ratings for planners and for grid
              operators. By utilizing predictable and reliable SoC values, this
              will avoid taking years of trial and error to increase ESR
              deployment and develop higher ESR capacity ratings.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              These changes need to be implemented in haste as affordability is
              at risk if cheaper resource alternatives are not fully exploited. A
              case study is the recent Court Order for the FERC PJM Energy
              Efficient Resource (EER) Capacity Payments. In PJM&apos;s FERC
              filing, they offered a solution that balanced the need to have
              sufficient capacity to meet reliability needs with the PJM
              investment for capacity. Both FERC and the District Court found the
              PJM solution reasonable as it ensured reliability and increased
              affordability. But the change inadvertently placed future EER
              investments at risk. Immediate changes in ESR operating and
              planning rules are needed to offset any perceived disincentives by
              investors.
            </p>

            {/* Section: PJM Court Order */}
            <h2 className="text-2xl font-bold text-white mt-14 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-espx-cyan" />
              PJM Court Order: A Case for Adopting SoC Certainty and
              Predictability
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              The Court Order main finding affirms FERC&apos;s Ruling in the PJM
              Docket to cease EER participation in the annual capacity auctions.
              This marks protestors&apos; final recourse to have PJM rescind its
              changes to the capacity market. However, there are several
              affirmations in the Court Order that hints at possible improvements
              which PJM can consider through its stakeholder process. There are
              three areas where new SoC technology can improve ESR modeling and
              accreditation.
            </p>

            {/* Area 1 */}
            <h3 className="text-xl font-semibold text-espx-cyan mt-10 mb-4">
              1. Accuracy of Forecasts and Gaps in EIA Data Can be Addressed
              with SoC Certainty
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Protestors challenged PJM&apos;s forecast accuracy based on EIA
              data for ESRs. This data was PJM&apos;s evidence that EER load
              reductions are reflected in annual forecasts and do not require a
              four-year time frame for the planning process to fully reflect the
              benefits. The Court Order recognized these discrepancies.
            </p>

            <div className="glass-card rounded-xl p-6 mb-6 space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-espx-cyan font-medium">Key Finding:</span>{" "}
                PJM&apos;s forecast does not perfectly capture the EERs&apos;
                effects on demand. FERC acknowledged that there would
                &ldquo;inevitably&rdquo; be some daylight between PJM&apos;s
                load forecast and the actual effects of EERs on electrical
                consumption.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-espx-cyan font-medium">
                  EIA Limitations:
                </span>{" "}
                EIA fails to account for certain kinds of EERs, overestimates
                energy consumption, and warned against using its analyses as a
                forecast.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              With EERs no longer eligible to receive capacity payments over four
              years, ESPX Global can provide solutions that will increase EER
              benefit impacts on load forecasts with ESR capability not captured
              in EIA data, chiefly SoC certainty and predictability. This can
              close the gap between load forecast inaccuracies and actual
              contributions of EER technologies, ESR.
            </p>

            {/* Area 2 */}
            <h3 className="text-xl font-semibold text-espx-cyan mt-10 mb-4">
              2. Capacity Revenue Impacts on EER Investments Are Still Subject to
              Debate
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              In the PJM Order, FERC rejected the PJM position that there is no
              correlation between capacity payments and EER investments and for
              PJM planners to capture EER benefits on the demand side. PJM&apos;s
              filing argued that &ldquo;the proliferation of energy efficiency
              projects in the PJM Region is entirely unrelated to capacity
              payments.&rdquo; The Court agreed with FERC&apos;s determination
              that its decision did &ldquo;not depend on [PJM&apos;s] assertions
              [about] the link between capacity market payments and [EER]
              investments.&rdquo;
            </p>

            <div className="glass-card rounded-xl p-6 mb-6 space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-espx-cyan font-medium">Court Note:</span>{" "}
                FERC failed to consider the benefits of EER participation. EER
                providers use the revenue they receive from capacity auctions to
                further incentivize the production and sale of EERs.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-espx-cyan font-medium">
                  FERC Position:
                </span>{" "}
                FERC acknowledged that its decision could reduce the incentives
                to invest in EER projects but determined that &ldquo;the
                trade-off was worth it.&rdquo;
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              With ESPX Global technology for SoC, these issues can be revisited
              and the revenue impacts can be better analyzed. ESPX Global
              technology should be incorporated into the PJM planning process to
              provide higher ESR capacity ratings to more expeditiously and
              accurately capture EER benefits without the time lag of relying on
              historical operational experience.
            </p>

            {/* Area 3 */}
            <h3 className="text-xl font-semibold text-espx-cyan mt-10 mb-4">
              3. Loss of the Four-Year Capacity Auction Can Be Offset with SoC
              Certainty in Markets and Higher Capacity Ratings
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              The EER&apos;s capacity payments would have ended after four years
              or when the PJM load forecast captured the EER benefits to load
              reductions. EERs would have needed additional revenue streams
              whether the Court ruled in favor of FERC/PJM or not. This Order
              accelerates the value of the ESPX Global solutions.
            </p>

            <div className="glass-card rounded-xl p-6 mb-6 space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-espx-cyan font-medium">
                  FERC Acknowledgment:
                </span>{" "}
                FERC acknowledged that its decision might undermine existing
                reliance interests, noting that providers might have expected
                that their EERs would be eligible for four years when deciding to
                invest.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-espx-cyan font-medium">Opportunity:</span>{" "}
                EERs will benefit from adopting SoC in planning studies and in
                operations. PJM should support these changes to the benefit of
                grid reliability and a shift of market costs from EER capacity
                payments to more opportunities in energy markets.
              </p>
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-white mt-14 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-espx-cyan" />
              Fighting Technology Growth Challenges with Technology Solutions
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              To move towards new methodologies to open up more capacity and
              energy from ESRs requires relatively little capital investment
              &ndash; but requires a great desire to move away from today&apos;s
              acceptance of SoC limitations towards changing how ESRs are
              deployed in operations and how they are modeled in planning
              studies. FERC Order No. 841 resulted in a patchwork of rules and
              practices that were approved in individual tariffs to implement ESR
              participation in energy markets.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Changes to these tariffs not only require technical and reliability
              basis and demonstration of market benefits, but also the
              collaboration between regulators, like FERC, NERC and investors,
              like utilities, and operators/planners like ISO/RTOs. ESPX Global
              offers a tech-based solution to connect these parties together
              towards a common goal.
            </p>

            {/* CTA */}
            <div className="glass-card rounded-2xl p-8 mt-12 text-center border border-espx-cyan/20">
              <p className="text-white font-semibold text-lg mb-2">
                Interested in ESPX Global&apos;s SoC technology?
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Connect with our team to learn how we&apos;re transforming
                energy storage markets.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-espx-teal text-white rounded-lg hover:bg-espx-teal-light transition-all duration-300 font-medium tracking-wide"
              >
                Get In Touch
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}
