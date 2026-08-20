"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { getChatbotResponse } from "@/lib/chatbotEngine";
import { initialSuggestions, type ChatAction } from "@/lib/chatbotKnowledge";
import { ChatMessage, type ChatItem } from "./ChatMessage";

const welcome:ChatItem={id:"welcome",role:"support",text:"Hi 👋 Welcome to Prime IPTV!\nHow can I help you today?",time:"Now",actions:initialSuggestions.map(label=>label==="View subscription plans"?{type:"anchor",label,href:"#plans"} as ChatAction:{type:"suggestion",label,message:label} as ChatAction)};
const now=()=>new Intl.DateTimeFormat("en",{hour:"2-digit",minute:"2-digit"}).format(new Date());

export function Chatbot({onTrial}:{onTrial:()=>void}){
  const [open,setOpen]=useState(false),[hint,setHint]=useState(true),[typing,setTyping]=useState(false),[input,setInput]=useState(""),[messages,setMessages]=useState<ChatItem[]>([welcome]);
  const scrollRef=useRef<HTMLDivElement>(null), timeoutRef=useRef<ReturnType<typeof setTimeout>|null>(null);
  const close=useCallback(()=>setOpen(false),[]);

  useEffect(()=>{const timer=setTimeout(()=>setHint(false),5500);return()=>clearTimeout(timer)},[]);
  useEffect(()=>{const key=(event:KeyboardEvent)=>event.key==="Escape"&&close();addEventListener("keydown",key);return()=>removeEventListener("keydown",key)},[close]);
  useEffect(()=>{scrollRef.current?.scrollTo({top:scrollRef.current.scrollHeight,behavior:"smooth"})},[messages,typing]);
  useEffect(()=>()=>{if(timeoutRef.current)clearTimeout(timeoutRef.current)},[]);

  const ask=useCallback(async(value:string)=>{
    const question=value.trim().slice(0,500);if(!question||typing)return;
    setMessages(items=>[...items,{id:`u-${Date.now()}`,role:"user",text:question,time:now()}]);setInput("");setTyping(true);
    const response=await getChatbotResponse(question);
    timeoutRef.current=setTimeout(()=>{setMessages(items=>[...items,{id:`s-${Date.now()}`,role:"support",text:response.answer,time:now(),actions:response.actions}]);setTyping(false)},320);
  },[typing]);
  const submit=(event:FormEvent)=>{event.preventDefault();void ask(input)};
  const clear=()=>{if(timeoutRef.current)clearTimeout(timeoutRef.current);setTyping(false);setInput("");setMessages([welcome])};
  const navigate=()=>setOpen(false);

  return <>
    <AnimatePresence>{hint&&!open&&<motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:5}} className="fixed bottom-[92px] right-5 z-[79] rounded-xl border border-gold/20 bg-[#10120f]/95 px-4 py-2 text-xs font-semibold text-cream shadow-xl backdrop-blur-xl sm:right-7">Need help?</motion.div>}</AnimatePresence>
    <AnimatePresence>{open&&<motion.section role="dialog" aria-modal="false" aria-label="Prime IPTV Support" initial={{opacity:0,y:20,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12,scale:.98}} transition={{duration:.24}} className="fixed bottom-[88px] right-3 z-[80] flex h-[min(650px,calc(100dvh-110px))] w-[calc(100%-24px)] max-w-[390px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0d0b]/95 shadow-[0_28px_100px_rgba(0,0,0,.65),0_0_45px_rgba(213,175,92,.08)] backdrop-blur-2xl sm:right-6">
      <header className="flex items-center justify-between border-b border-white/[.08] bg-gradient-to-r from-gold/[.09] to-transparent px-4 py-4"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl border border-gold/20 bg-gold/10 text-gold"><Bot size={20}/></span><div><h2 className="text-sm font-bold">Prime IPTV Support</h2><p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-white/40"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_#34d399]"/> Online Help</p></div></div><div className="flex gap-1"><button onClick={clear} className="rounded-lg p-2 text-white/35 transition hover:bg-white/5 hover:text-white" aria-label="Clear conversation" title="Clear conversation"><RotateCcw size={16}/></button><button onClick={close} className="rounded-lg p-2 text-white/35 transition hover:bg-white/5 hover:text-white" aria-label="Close support chat"><X size={18}/></button></div></header>
      <div ref={scrollRef} className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4" aria-live="polite">{messages.map(message=><ChatMessage key={message.id} message={message} onSuggestion={ask} onNavigate={navigate} onTrial={()=>{setOpen(false);onTrial()}}/>)}{typing&&<div className="flex justify-start"><div className="flex gap-1 rounded-2xl rounded-tl-md border border-white/[.08] bg-white/[.055] px-4 py-4" aria-label="Support is typing"><i className="chat-dot"/><i className="chat-dot [animation-delay:120ms]"/><i className="chat-dot [animation-delay:240ms]"/></div></div>}</div>
      <form onSubmit={submit} className="border-t border-white/[.08] bg-[#0a0c0a] p-3"><div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[.035] p-2 focus-within:border-gold/40"><label className="sr-only" htmlFor="chat-question">Ask a question</label><textarea id="chat-question" value={input} onChange={e=>setInput(e.target.value.slice(0,500))} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();void ask(input)}}} rows={1} maxLength={500} placeholder="Ask about IPTV, setup or plans…" className="max-h-24 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-[13px] text-white outline-none placeholder:text-white/25"/><button type="submit" disabled={!input.trim()||typing} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold text-ink transition hover:bg-[#e8cc87] disabled:cursor-not-allowed disabled:opacity-35" aria-label="Send question"><Send size={16}/></button></div><p className="mt-2 text-center text-[9px] text-white/20">FAQ assistant · Do not share sensitive information</p></form>
    </motion.section>}</AnimatePresence>
    <motion.button whileHover={{scale:1.04}} whileTap={{scale:.95}} onClick={()=>{setOpen(value=>!value);setHint(false)}} className="fixed bottom-5 right-5 z-[81] grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-[#11130f] text-gold shadow-[0_0_30px_rgba(213,175,92,.2)] sm:right-7" aria-label={open?"Close Prime IPTV support":"Open Prime IPTV support"}>{open?<X size={22}/>:<MessageCircle size={23}/>}</motion.button>
  </>;
}
