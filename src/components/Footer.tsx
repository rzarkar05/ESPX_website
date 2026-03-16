import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-espx-cyan/10 bg-espx-navy">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/images/ESPXGlobal-logo-245x110.png"
              alt="ESPX Global"
              width={140}
              height={63}
              className="brightness-110 mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              A multi-purpose entity focused on the energy storage sector of the
              power market.
            </p>
          </div>

          <div>
            <h4 className="text-espx-cyan text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-espx-cyan transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/news"
                className="text-sm text-gray-400 hover:text-espx-cyan transition-colors"
              >
                News & Articles
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-espx-cyan transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-espx-cyan text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="font-semibold text-gray-300">ESPX Global Inc.</p>
              <p>1350 Beverly Road,</p>
              <p>Suite 115, PMB293,</p>
              <p>McLean, VA 22101</p>
              <a
                href="mailto:jenny.hou@espxglobal.com"
                className="inline-block mt-2 text-espx-cyan hover:text-espx-cyan-dim transition-colors"
              >
                jenny.hou@espxglobal.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-espx-cyan/10 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ESPX Global Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
