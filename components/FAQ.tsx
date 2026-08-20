"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
const faqs=[
  ["What devices are supported?","Prime IPTV is designed for Smart TV, Android TV, Apple TV, Fire TV, Android, iPhone, iPad, Windows, Mac, MAG Box and TV Box devices."],
  ["How long does activation take?","Activation begins after your order details are reviewed. You will receive confirmation and setup information through the contact details you provide."],
  ["Can I use the service while travelling?","Access may be possible from supported locations and compatible devices. Contact support before travelling if you need guidance for your setup."],
  ["How do I install the service?","After your order is confirmed, you receive setup instructions adapted to the device selected in your order."],
  ["What happens after I place my order?","Our team reviews your information, contacts you to complete the order, and then sends your access and setup details."],
  ["How can I contact support?","Use the WhatsApp or email options in the contact section once the service owner has configured them."],
  ["Can I try Prime IPTV before subscribing?","Yes. You can request a free 24-hour trial to test the service on a compatible device before choosing a subscription plan."],
];
export function FAQ({onTrial}:{onTrial:()=>void}){const [active,setActive]=useState<number|null>(0);return <section id="faq" className="py-28"><div className="container-page grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">Good to know</p><h2 className="section-title mt-4">Questions,<br/><span className="gold-text italic">answered.</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-white/40">Everything you need to know before choosing your plan.</p></Reveal><div>{faqs.map(([q,a],i)=><Reveal key={q} delay={i*.04}><div className="border-b border-white/10"><button onClick={()=>setActive(active===i?null:i)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-sm font-semibold md:text-base" aria-expanded={active===i}>{q}<Plus className={`shrink-0 text-gold transition ${active===i?"rotate-45":""}`} size={20}/></button><AnimatePresence initial={false}>{active===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><p className="max-w-xl pb-3 text-sm leading-7 text-white/45">{a}</p>{i===faqs.length-1&&<button onClick={onTrial} className="btn-trial mb-6">Request Free Trial</button>}</motion.div>}</AnimatePresence></div></Reveal>)}</div></div></section>}
