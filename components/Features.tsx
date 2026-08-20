import { BadgeCheck, Gauge, Globe2, Headphones, MonitorSmartphone, WandSparkles } from "lucide-react";
import { Reveal } from "./Reveal";
const items = [
  [Gauge,"High Quality Streaming","Smooth and reliable streaming experience."],
  [MonitorSmartphone,"Multiple Devices","Compatible with Smart TVs, phones, tablets, computers and streaming devices."],
  [WandSparkles,"Fast Activation","Quick and simple activation process."],
  [BadgeCheck,"Easy Setup","Simple installation and configuration."],
  [Globe2,"Worldwide Access","Access the service from supported locations and devices."],
  [Headphones,"Customer Support","Assistance available when you need help setting up the service."],
] as const;
export function Features(){return <section id="features" className="border-y border-white/[.06] bg-white/[.015] py-28"><div className="container-page"><Reveal className="max-w-2xl"><p className="eyebrow">Designed around you</p><h2 className="section-title mt-4">Why choose<br/><span className="gold-text italic">Prime IPTV?</span></h2></Reveal><div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{items.map(([Icon,title,desc],i)=><Reveal key={title} delay={i*.05} className="h-full"><article className="group h-full min-h-64 bg-[#0a0b09] p-8 transition hover:bg-[#10110e]"><div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/20 bg-gold/[.06] text-gold transition group-hover:scale-110"><Icon size={22}/></div><span className="mt-10 block text-[10px] font-bold tracking-[.2em] text-white/20">0{i+1}</span><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/40">{desc}</p></article></Reveal>)}</div></div></section>}
