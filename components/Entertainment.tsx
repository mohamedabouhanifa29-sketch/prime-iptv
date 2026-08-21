"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { catalog, catalogCategories, type CatalogItem } from "@/lib/catalog";
import { Reveal } from "./Reveal";

function Poster({item,index}:{item:CatalogItem;index:number}){
  const [failed,setFailed]=useState(false);
  return <motion.article initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-40px"}} transition={{duration:.5,delay:Math.min(index*.045,.22)}} className="group relative aspect-[2/3] snap-start overflow-hidden rounded-2xl border border-white/[.08] bg-[#10120f] shadow-[0_18px_50px_rgba(0,0,0,.3)] transition duration-300 hover:-translate-y-1 hover:border-gold/35">
    <Image src={failed?"/images/catalog/fallback-poster.svg":item.image} alt={`${item.title} poster`} fill sizes="(max-width: 640px) 43vw, (max-width: 1024px) 28vw, 15vw" className="object-cover transition duration-700 group-hover:scale-[1.06]" loading="lazy" onError={()=>setFailed(true)}/>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 transition group-hover:opacity-95"/>
    <div className="absolute inset-x-0 bottom-0 translate-y-0 p-4 transition duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"><span className="rounded-full border border-gold/30 bg-black/55 px-2 py-1 text-[8px] font-extrabold uppercase tracking-wider text-gold backdrop-blur-md">{item.type}</span><h3 className="mt-2 text-sm font-bold leading-tight text-cream">{item.title}</h3>{item.year&&<p className="mt-1 text-[10px] text-white/45">{item.year}</p>}</div>
  </motion.article>;
}

export function Entertainment(){
  return <section className="relative overflow-hidden border-t border-white/[.06] bg-[#060706] py-24"><div className="absolute left-[-15%] top-0 h-[620px] w-[620px] rounded-full bg-gold/[.045] blur-[120px]"/><div className="container-page relative"><Reveal><div><p className="eyebrow">Entertainment for everyone</p><h2 className="section-title mt-4 max-w-4xl">Movies, Series <span className="gold-text italic">&amp; More.</span></h2><p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 md:text-base">Discover a constantly evolving selection of entertainment available with Prime IPTV.</p></div></Reveal>
    <div className="mt-16 space-y-12">{catalogCategories.map(category=>{const items=catalog.filter(item=>item.category===category.id);return <div key={category.id}><Reveal><div className="mb-5 flex items-center gap-4"><h3 className="text-base font-bold text-cream md:text-lg">{category.label}</h3><span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"/></div></Reveal><div className="catalog-row -mx-3 grid snap-x snap-mandatory grid-flow-col gap-3 overflow-x-auto px-3 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{items.map((item,index)=><Poster key={item.id} item={item} index={index}/>)}</div></div>})}</div>
    <p className="mt-4 max-w-3xl text-[10px] leading-5 text-white/25">Catalogue imagery and availability may change. Third-party titles and artwork remain the property of their respective owners and do not imply an official partnership.</p>
  </div></section>;
}
