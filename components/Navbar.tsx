"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock3, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [["Home","home"],["Plans","plans"],["Features","features"],["Devices","devices"],["FAQ","faq"],["Contact","contact"]] as const;

export function Navbar({ onOrder, onTrial }: { onOrder: () => void; onTrial: () => void }) {
  const [open,setOpen]=useState(false), [scrolled,setScrolled]=useState(false), [active,setActive]=useState("home");

  useEffect(()=>{
    const run=()=>setScrolled(scrollY>16);
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&setActive(entry.target.id)),{rootMargin:"-30% 0px -62%",threshold:0});
    links.forEach(([,id])=>{const section=document.getElementById(id);if(section)observer.observe(section)});
    run();addEventListener("scroll",run,{passive:true});
    return()=>{removeEventListener("scroll",run);observer.disconnect()};
  },[]);

  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled?"border-white/10 bg-[#060706]/90 py-2 shadow-2xl backdrop-blur-xl":"border-white/[.06] bg-[#060706]/55 py-2.5 backdrop-blur-md"}`}>
    <div className="container-page flex min-h-14 items-center justify-between gap-5"><Logo/><nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">{links.map(([label,id])=><a key={id} href={`/#${id}`} className={`relative py-3 text-[11px] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:bg-gold after:transition-transform ${active===id?"text-gold after:scale-x-100":"text-white/50 after:scale-x-0 hover:text-white hover:after:scale-x-100"}`}>{label}</a>)}</nav><div className="hidden items-center gap-2 md:flex"><button onClick={onTrial} className="btn-trial hidden px-4 py-2.5 xl:inline-flex"><Clock3 size={14}/> Free Trial</button><button onClick={onOrder} className="btn-primary px-5 py-2.5">Get Started</button></div><button className="rounded-full border border-white/10 p-2.5 lg:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open?<X size={19}/>:<Menu size={19}/>}</button></div>
    <AnimatePresence>{open&&<motion.nav initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="container-page overflow-hidden lg:hidden"><div className="mb-3 mt-2 flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#10110e]/95 p-3 shadow-2xl backdrop-blur-xl">{links.map(([label,id])=><a key={id} href={`/#${id}`} onClick={()=>setOpen(false)} className={`rounded-xl px-4 py-3 text-sm ${active===id?"bg-gold/[.08] text-gold":"text-white/70 hover:bg-white/5"}`}>{label}</a>)}<button onClick={()=>{setOpen(false);onTrial()}} className="btn-trial mt-2"><Clock3 size={15}/> Free 24H Trial</button><button onClick={()=>{setOpen(false);onOrder()}} className="btn-primary mt-1">Get Started</button></div></motion.nav>}</AnimatePresence>
  </header>;
}
