"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/lib/config";
import type { Plan } from "@/lib/pricing";
import { orderDeviceOptions, orderSchema, type OrderFormData } from "@/lib/validation";
import { createWhatsAppOrderUrl } from "@/lib/whatsappOrder";

const fields = [
  ["fullName","Full Name","text","Your full name"],
  ["email","Email","email","you@example.com"],
  ["phone","Phone / WhatsApp","tel","+00 000 000 000"],
  ["country","Country","text","Your country"],
] as const;

export function OrderModal({ plan, open, onClose }: { plan: Plan; open: boolean; onClose: () => void }) {
  const [opening,setOpening]=useState(false);
  const [orderError,setOrderError]=useState("");
  const {register,handleSubmit,formState:{errors},reset}=useForm<OrderFormData>({resolver:zodResolver(orderSchema),defaultValues:{fullName:"",email:"",phone:"",device:"",country:""}});

  const close=useCallback(()=>{
    setOpening(false);setOrderError("");reset();onClose();
  },[onClose,reset]);

  useEffect(()=>{
    const key=(event:KeyboardEvent)=>event.key==="Escape"&&close();
    if(open){document.body.style.overflow="hidden";addEventListener("keydown",key)}
    return()=>{document.body.style.overflow="";removeEventListener("keydown",key)};
  },[open,close]);

  const submit=(data:OrderFormData)=>{
    if(opening)return;
    setOrderError("");
    const whatsappUrl=createWhatsAppOrderUrl(siteConfig.whatsapp,{
      plan:plan.name,price:plan.price,name:data.fullName,email:data.email,
      phone:data.phone,country:data.country,device:data.device,
    });
    if(!whatsappUrl){setOrderError("WhatsApp ordering is not configured yet. Please contact support.");return;}
    setOpening(true);
    const popup=window.open(whatsappUrl,"_blank","noopener,noreferrer");
    if(popup)popup.opener=null;
    else setOrderError("WhatsApp could not be opened. Please allow pop-ups and try again.");
    setTimeout(()=>setOpening(false),1200);
  };

  return <AnimatePresence>{open&&<motion.div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={event=>event.target===event.currentTarget&&close()}><motion.div role="dialog" aria-modal="true" aria-labelledby="order-title" initial={{opacity:0,y:24,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12,scale:.98}} className="my-auto w-full max-w-xl rounded-[28px] border border-white/10 bg-[#10110e] p-6 shadow-2xl md:p-8">
    <div className="flex items-start justify-between"><div><p className="eyebrow">Selected plan</p><h2 id="order-title" className="mt-2 font-display text-3xl">{plan.name} <span className="text-gold">— {plan.price} €</span></h2></div><button onClick={close} className="rounded-full border border-white/10 p-2 text-white/50 hover:text-white" aria-label="Close"><X size={18}/></button></div>
    <form onSubmit={handleSubmit(submit)} className="mt-8 space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">{fields.map(([name,label,type,placeholder])=><label key={name} className="text-xs font-semibold text-white/60">{label}<input {...register(name)} type={type} maxLength={name==="email"?120:name==="phone"?30:name==="country"?60:80} placeholder={placeholder} autoComplete={name==="fullName"?"name":name==="phone"?"tel":name} className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-gold/60"/><span className="mt-1 block min-h-4 text-[10px] text-red-300">{errors[name]?.message}</span></label>)}</div>
      <label className="block text-xs font-semibold text-white/60">Device Type<select {...register("device")} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0c09] px-4 py-3.5 text-sm text-white outline-none focus:border-gold/60"><option value="">Select your primary device</option>{orderDeviceOptions.map(device=><option key={device}>{device}</option>)}</select><span className="mt-1 block min-h-4 text-[10px] text-red-300">{errors.device?.message}</span></label>
      <p className="text-[10px] leading-5 text-white/25">Your details are used only to prepare your WhatsApp message. They are not stored or sent to another service by this website. Never share card details, verification codes or passwords.</p>
      {orderError&&<p role="alert" className="rounded-xl border border-red-300/20 bg-red-300/[.06] px-4 py-3 text-xs text-red-200">{orderError}</p>}
      <button className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={opening}><MessageCircle size={17}/>{opening?"Opening WhatsApp…":"Continue on WhatsApp"}</button>
    </form>
  </motion.div></motion.div>}</AnimatePresence>;
}
