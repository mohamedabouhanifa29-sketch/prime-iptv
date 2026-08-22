import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  ["Home", "home"],
  ["Plans", "plans"],
  ["Features", "features"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          <div>
            <Logo variant="footer" />
            <p className="mt-4 max-w-xs text-xs leading-6 text-white/35">
              A premium streaming experience across the devices you love.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 text-xs">
            
            <div>
              <p className="mb-4 font-bold uppercase tracking-widest text-white/25">
                Navigation
              </p>

              <div className="space-y-3">
                {nav.map(([l, id]) => (
                  <a
                    className="block text-white/55 hover:text-gold"
                    key={id}
                    href={`/#${id}`}
                  >
                    {l}
                  </a>
                ))}

                <Link
                  className="block text-white/55 hover:text-gold"
                  href="/iptv-subscription"
                >
                  IPTV Subscription
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-4 font-bold uppercase tracking-widest text-white/25">
                Legal
              </p>

              <div className="space-y-3">
                <Link
                  className="block text-white/55 hover:text-gold"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>

                <Link
                  className="block text-white/55 hover:text-gold"
                  href="/terms"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-12 border-t border-white/[.07] pt-6 text-[11px] text-white/25">
          © 2026 PRIME IPTV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}