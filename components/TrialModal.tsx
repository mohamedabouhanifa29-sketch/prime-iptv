"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock3, MessageCircle, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/lib/config";
import { trialDeviceOptions, trialSchema, type TrialFormData } from "@/lib/validation";
import { createWhatsAppTrialUrl } from "@/lib/whatsappOrder";

const fields=[["fullName","Full Name","text","Your full name"],["email","Email","email","you@example.com"],["phone","Phone / WhatsApp","tel","+00 000 000 000"],["country","Country","text","Your country"]] as const;

export function TrialModal({open,onClose}:{open:boolean;onClose:()=>void}){
  const [opening,setOpening]=useState(false),[trialError,setTrialError]=useState("");
  const {register,handleSubmit,formState:{errors},reset}=useForm<TrialFormData>({resolver:zodResolver(trialSchema),defaultValues:{fullName:"",email:"",phone:"",country:"",device:"",iptvApp:""}});
  const close=useCallback(()=>{setOpening(false);setTrialError("");reset();onClose()},[onClose,reset]);
  useEffect(()=>{const key=(event:KeyboardEvent)=>event.key==="Escape"&&close();if(open){document.body.style.overflow="hidden";addEventListener("keydown",key)}return()=>{document.body.style.overflow="";removeEventListener("keydown",key)}},[open,close]);
  const submit=(data:TrialFormData)=>{if(opening)return;setTrialError("");const url=createWhatsAppTrialUrl(siteConfig.whatsapp,{name:data.fullName,email:data.email,phone:data.phone,country:data.country,device:data.device,iptvApp:data.iptvApp});if(!url){setTrialError("WhatsApp trial requests are not configured yet. Please contact support.");return}setOpening(true);const popup=window.open(url,"_blank","noopener,noreferrer");if(popup)popup.opener=null;else setTrialError("WhatsApp could not be opened. Please allow pop-ups and try again.");setTimeout(()=>setOpening(false),1200)};
  return <AnimatePresence>{open&&<motion.div className="fixed inset-0 z-[105] grid place-items-center overflow-y-auto bg-black/75 p-3 backdrop-blur-md sm:p-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={event=>event.target===event.currentTarget&&close()}><motion.div role="dialog" aria-modal="true" aria-labelledby="trial-title" initial={{opacity:0,y:24,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12,scale:.98}} className="my-auto max-h-[calc(100dvh-24px)] w-full max-w-xl overflow-y-auto rounded-[28px] border border-gold/20 bg-[#10110e] p-5 shadow-[0_25px_100px_rgba(0,0,0,.7),0_0_45px_rgba(213,175,92,.08)] sm:p-8">
    <div className="flex items-start justify-between gap-5"><div><div className="eyebrow flex items-center gap-2"><Clock3 size={14}/> Free trial</div><h2 id="trial-title" className="mt-3 font-display text-3xl sm:text-4xl">Request Your Free 24H Trial</h2><p className="mt-3 text-sm leading-6 text-white/45">Try Prime IPTV for 24 hours before choosing your plan.</p></div><button onClick={close} className="shrink-0 rounded-full border border-white/10 p-2 text-white/50 hover:text-white" aria-label="Close trial request"><X size={18}/></button></div>
    <form onSubmit={handleSubmit(submit)} className="mt-7 space-y-3" noValidate><div className="grid gap-3 sm:grid-cols-2">{fields.map(([name,label,type,placeholder])=><label key={name} className="text-xs font-semibold text-white/60">{label}<input {...register(name)} type={type} maxLength={name==="email"?120:name==="phone"?30:name==="country"?60:80} placeholder={placeholder} autoComplete={name==="fullName"?"name":name==="phone"?"tel":name} className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-gold/60"/><span className="mt-1 block min-h-4 text-[10px] text-red-300">{errors[name]?.message}</span></label>)}</div>
      <label className="block text-xs font-semibold text-white/60">Device Type<select {...register("device")} className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0c09] px-4 py-3 text-sm text-white outline-none focus:border-gold/60"><option value="">Select your primary device</option>{trialDeviceOptions.map(device=><option key={device}>{device}</option>)}</select><span className="mt-1 block min-h-4 text-[10px] text-red-300">{errors.device?.message}</span></label>
      <label className="block text-xs font-semibold text-white/60">IPTV App <span className="font-normal text-white/25">(optional)</span><input {...register("iptvApp")} maxLength={80} placeholder="e.g. IPTV Smarters, TiviMate, XCIPTV or I don't know" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-gold/60"/><span className="mt-1 block min-h-4 text-[10px] text-red-300">{errors.iptvApp?.message}</span></label>
      <p className="text-[10px] leading-5 text-white/25">This form only prepares a WhatsApp request. Trial activation is handled manually. Your details are not stored by this website.</p>{trialError&&<p role="alert" className="rounded-xl border border-red-300/20 bg-red-300/[.06] px-4 py-3 text-xs text-red-200">{trialError}</p>}
      <button type="submit" disabled={opening} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"><MessageCircle size={17}/>{opening?"Opening WhatsApp…":"Request Trial on WhatsApp"}</button>
    </form>
  </motion.div></motion.div>}</AnimatePresence>;
}
