"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, Clock3, Headphones, MonitorSmartphone, Play, Zap } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

const benefits = [
  [CircleCheck, "Flexible Plans", "1 to 24 months"],
  [MonitorSmartphone, "Multi-Device", "Watch anywhere"],
  [Zap, "Fast Activation", "Quick setup"],
  [Headphones, "Customer Support", "Here to help"],
] as const;

export function Hero({ onOrder, onTrial }: { onOrder: () => void; onTrial: () => void }) {
  return <section id="home" className="relative min-h-[calc(100vh-72px)] overflow-hidden pt-20">
    <div className="hero-grid absolute inset-0"/><div className="absolute right-[-8%] top-[8%] h-[680px] w-[680px] rounded-full bg-gold/[.07] blur-[120px]"/><div className="noise pointer-events-none absolute inset-0 opacity-[.03]"/>
    <div className="container-page relative z-10 flex min-h-[calc(100vh-72px)] flex-col justify-center py-10 lg:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[.96fr_1.04fr] xl:gap-12">
        <motion.div initial="hidden" animate="show" variants={{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.11}}}} className="relative z-20 max-w-[690px]">
          <motion.div variants={{hidden:{opacity:0,y:14},show:{opacity:1,y:0}}} className="eyebrow mb-5 flex items-center gap-3"><span className="h-px w-8 bg-gold"/> Premium streaming experience</motion.div>
<motion.h1
  variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}}
  className="section-title text-[clamp(2.9rem,5.7vw,6.15rem)] leading-[.96]"
>
  Premium IPTV Streaming.<br/>
  <span className="gold-text italic">Anytime. Anywhere.</span>
</motion.h1>
<motion.p
  variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0}}}
  className="mt-6 max-w-xl text-[15px] leading-7 text-white/55 md:text-lg md:leading-8"
>
  Enjoy premium IPTV streaming with live TV, movies, series and multi-device support across your favorite devices.
</motion.p>
          <motion.div variants={{hidden:{opacity:0,y:14},show:{opacity:1,y:0}}} className="mt-8 flex flex-wrap gap-3"><motion.button whileTap={{scale:.97}} onClick={onOrder} className="btn-primary">Get Started <ArrowRight size={16}/></motion.button><motion.button whileTap={{scale:.97}} onClick={onTrial} className="btn-trial"><Clock3 size={16}/> Free 24H Trial <span className="rounded-full bg-gold/15 px-2 py-1 text-[8px] tracking-wider">24H FREE</span></motion.button><motion.a whileTap={{scale:.97}} href="#plans" className="btn-secondary"><Play size={15} fill="currentColor"/> View Plans</motion.a></motion.div>
        </motion.div>
        <HeroVisual/>
      </div>
      <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.75,duration:.7}} className="mt-7 grid grid-cols-2 gap-y-5 border-t border-white/10 pt-6 lg:mt-5 lg:grid-cols-4">
        {benefits.map(([Icon,title,text],i)=><div key={title} className={`flex items-center gap-3 px-1 lg:px-5 ${i>0?"lg:border-l lg:border-white/10":""} ${i===0?"lg:pl-0":""}`}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold/[.08] text-gold"><Icon size={17}/></span><div><p className="text-[11px] font-bold text-white/80 sm:text-xs">{title}</p><p className="mt-1 text-[10px] text-white/35 sm:text-[11px]">{text}</p></div></div>)}
      </motion.div>
    </div>
  </section>;
}
