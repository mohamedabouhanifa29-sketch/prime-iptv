"use client";
import { useCallback, useState } from "react";
import { plans, type Plan } from "@/lib/pricing";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Features } from "./Features";
import { Devices } from "./Devices";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { OrderModal } from "./OrderModal";
import { Chatbot } from "./Chatbot";
import { TrialModal } from "./TrialModal";
import { TrialCTA } from "./TrialCTA";
export function HomePage(){const [selected,setSelected]=useState<Plan>(plans[3]);const [open,setOpen]=useState(false);const [trialOpen,setTrialOpen]=useState(false);const show=useCallback((p:Plan=plans[3])=>{setSelected(p);setOpen(true)},[]);const close=useCallback(()=>setOpen(false),[]);const showTrial=useCallback(()=>setTrialOpen(true),[]);const closeTrial=useCallback(()=>setTrialOpen(false),[]);return <><Navbar onOrder={()=>show()} onTrial={showTrial}/><main><Hero onOrder={()=>show()} onTrial={showTrial}/><Pricing onOrder={show}/><TrialCTA onTrial={showTrial}/><Features/><Devices/><HowItWorks/><FAQ onTrial={showTrial}/><Contact/></main><Footer/><OrderModal plan={selected} open={open} onClose={close}/><TrialModal open={trialOpen} onClose={closeTrial}/><Chatbot onTrial={showTrial}/></>}
