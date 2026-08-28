import Link from "next/link";
import {
  Box,
  Cast,
  Flame,
  Laptop,
  Monitor,
  MonitorSmartphone,
  Package,
  Smartphone,
  TabletSmartphone,
  Tv,
} from "lucide-react";
import { Reveal } from "./Reveal";

const devices = [
  [Tv, "Smart TV"],
  [Cast, "Android TV"],
  [Box, "Apple TV"],
  [Flame, "Fire TV"],
  [Smartphone, "Android"],
  [TabletSmartphone, "iPhone / iPad"],
  [Monitor, "Windows"],
  [Laptop, "Mac"],
  [Package, "MAG Box"],
  [MonitorSmartphone, "TV Box"],
] as const;

export function Devices() {
  return (
    <section id="devices" className="py-28">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="eyebrow">Your screen, your choice</p>

          <h2 className="section-title mx-auto mt-4 max-w-3xl">
            Watch on your
            <br />
            <span className="gold-text italic">favorite devices.</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {devices.map(([Icon, name], i) => {
            const card = (
              <div className="group glass flex aspect-square flex-col items-center justify-center rounded-2xl text-center transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-gold/[.05]">
                <Icon
                  className="mb-4 text-white/35 transition group-hover:scale-110 group-hover:text-gold"
                  size={28}
                />

                <span className="text-xs font-semibold text-white/65">
                  {name}
                </span>

                {name === "Fire TV" && (
                  <span className="mt-2 text-[10px] text-gold">
                    Setup guide →
                  </span>
                )}
              </div>
            );

            return (
              <Reveal key={name} delay={i * 0.035}>
                {name === "Fire TV" ? (
                  <Link
                    href="/iptv-for-firestick"
                    aria-label="IPTV for Firestick setup guide"
                  >
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}