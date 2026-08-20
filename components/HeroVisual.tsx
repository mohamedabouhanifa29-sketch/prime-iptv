"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Gauge, MonitorSmartphone, Zap } from "lucide-react";

const badges = [
  { label: "4K Quality", icon: Gauge, className: "left-0 top-[13%]" },
  { label: "Multi Device", icon: MonitorSmartphone, className: "right-0 top-[5%]" },
  { label: "Fast Activation", icon: Zap, className: "bottom-[15%] left-[2%]" },
  { label: "Premium Support", icon: BadgeCheck, className: "bottom-[4%] right-[3%]" },
] as const;

export function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto aspect-[1.08/1] w-full max-w-[650px]"
      initial={{ opacity: 0, scale: .96, x: 28 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, delay: .18, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Prime IPTV on multiple devices"
    >
      <div className="absolute inset-[9%] rounded-full bg-gold/15 blur-[90px]" />
      <div className="absolute left-[10%] right-[7%] top-[13%] h-[62%] rounded-[5%] border border-white/15 bg-gradient-to-br from-[#20231f] via-[#0b0c0a] to-black p-[1.4%] shadow-[0_35px_100px_rgba(0,0,0,.65),0_0_60px_rgba(213,175,92,.1)]">
        <div className="relative h-full overflow-hidden rounded-[4%] border border-white/[.07] bg-[#030403]">
          <div className="hero-screen-grid absolute inset-0" />
          <div className="absolute inset-x-[8%] top-[9%] flex items-center justify-between">
            <span className="text-[7px] font-bold uppercase tracking-[.3em] text-gold/80 sm:text-[9px]">Prime interface</span>
            <div className="flex gap-1"><i className="h-1 w-1 rounded-full bg-gold"/><i className="h-1 w-1 rounded-full bg-white/25"/><i className="h-1 w-1 rounded-full bg-white/25"/></div>
          </div>
          <div className="absolute inset-x-[8%] top-[22%] grid grid-cols-[1.35fr_.65fr] gap-[3%]">
            <div className="relative aspect-[1.7] overflow-hidden rounded-lg border border-gold/15 bg-gradient-to-br from-gold/20 via-[#12150f] to-black">
              <div className="absolute -right-[10%] -top-[30%] h-[150%] w-[70%] rounded-full border border-gold/20"/>
              <div className="absolute bottom-[14%] left-[8%] h-[7%] w-[45%] rounded-full bg-cream/60"/>
              <div className="absolute bottom-[27%] left-[8%] h-[5%] w-[25%] rounded-full bg-gold/70"/>
            </div>
            <div className="grid gap-[7%]"><div className="rounded-lg border border-white/[.06] bg-white/[.05]"/><div className="rounded-lg border border-white/[.06] bg-gold/[.07]"/></div>
          </div>
          <div className="absolute inset-x-[8%] bottom-[8%] grid grid-cols-4 gap-[3%]">{[0,1,2,3].map(i=><div key={i} className={`aspect-[1.5] rounded-md border border-white/[.06] ${i===1?"bg-gold/10":"bg-white/[.04]"}`}/>)}</div>
        </div>
        <div className="absolute left-1/2 top-full h-[8%] w-[18%] -translate-x-1/2 bg-gradient-to-b from-[#34372f] to-[#10110f] [clip-path:polygon(28%_0,72%_0,100%_100%,0_100%)]"/>
        <div className="absolute left-1/2 top-[107%] h-[2.5%] w-[31%] -translate-x-1/2 rounded-full bg-[#272a25]"/>
      </div>

      <motion.div className="absolute left-[25%] top-[26%] z-10 w-[52%]" animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <Image src="/images/prime-iptv-logo.png" alt="Prime IPTV" width={1536} height={1024} priority sizes="(max-width: 768px) 45vw, 330px" className="h-auto w-full rounded-[14%] object-contain mix-blend-screen drop-shadow-[0_0_22px_rgba(213,175,92,.28)]" />
      </motion.div>

      <div className="absolute bottom-[3%] left-[13%] z-20 h-[39%] w-[22%] rotate-[-5deg] rounded-[13%] border border-white/20 bg-gradient-to-br from-[#252821] to-[#060706] p-[2%] shadow-2xl">
        <div className="hero-screen-grid h-full overflow-hidden rounded-[10%] border border-white/[.07] bg-[#080a07]"><div className="mx-auto mt-[18%] h-[5%] w-[48%] rounded-full bg-gold/60"/><div className="mx-auto mt-[15%] aspect-square w-[62%] rounded-xl bg-gradient-to-br from-gold/20 to-white/[.03]"/></div>
      </div>
      <div className="absolute bottom-[7%] right-[8%] z-20 h-[31%] w-[37%] rotate-[3deg] rounded-[7%] border border-white/20 bg-gradient-to-br from-[#292c26] to-[#080908] p-[1.6%] shadow-2xl">
        <div className="h-full rounded-[5%] border border-white/[.06] bg-gradient-to-br from-gold/[.08] to-black"><div className="ml-[10%] mt-[12%] h-[5%] w-[45%] rounded-full bg-cream/50"/><div className="ml-[10%] mt-[8%] h-[32%] w-[80%] rounded-lg bg-white/[.045]"/></div>
      </div>

      {badges.map(({label,icon:Icon,className},i)=><motion.div key={label} className={`absolute z-30 flex items-center gap-2 rounded-xl border border-white/10 bg-[#10120f]/90 px-3 py-2 text-[9px] font-bold text-cream shadow-xl backdrop-blur-xl sm:px-4 sm:py-2.5 sm:text-[10px] ${className}`} animate={{ y: [0, i%2 ? 6 : -6, 0] }} transition={{ duration: 4.5+i*.4, repeat: Infinity, ease: "easeInOut" }}><span className="grid h-6 w-6 place-items-center rounded-lg bg-gold/10 text-gold"><Icon size={13}/></span>{label}</motion.div>)}
    </motion.div>
  );
}
