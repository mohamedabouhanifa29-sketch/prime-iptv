import type { ChatAction } from "@/lib/chatbotKnowledge";
import { ChatSuggestions } from "./ChatSuggestions";

export type ChatItem = { id:string; role:"user"|"support"; text:string; time:string; actions?:ChatAction[] };

export function ChatMessage({ message, onSuggestion, onNavigate, onTrial }: { message:ChatItem; onSuggestion:(message:string)=>void; onNavigate:()=>void; onTrial:()=>void }) {
  const support=message.role==="support";
  return <div className={`flex ${support?"justify-start":"justify-end"}`}><div className={`max-w-[88%] ${support?"":"text-right"}`}><div className={`rounded-2xl px-4 py-3 text-left text-[13px] leading-6 shadow-sm ${support?"rounded-tl-md border border-white/[.08] bg-white/[.055] text-white/70":"rounded-tr-md bg-gold text-[#11120f]"}`}><p className="whitespace-pre-line">{message.text}</p>{message.actions&&<ChatSuggestions actions={message.actions} onSuggestion={onSuggestion} onNavigate={onNavigate} onTrial={onTrial}/>}</div><time className="mt-1 block px-1 text-[9px] text-white/25">{message.time}</time></div></div>;
}
