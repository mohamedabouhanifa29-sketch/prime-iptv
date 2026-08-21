import type { ChatAction } from "@/lib/chatbotKnowledge";
import { siteConfig } from "@/lib/config";
import { createEmailContactUrl, createWhatsAppContactUrl } from "@/lib/contactLinks";

export function ChatSuggestions({ actions, onSuggestion, onNavigate, onTrial }: { actions: ChatAction[]; onSuggestion: (message:string)=>void; onNavigate:()=>void; onTrial:()=>void }) {
  return <div className="mt-3 flex flex-wrap gap-2">{actions.map((action,index)=>{
    if(action.type==="suggestion") return <button key={`${action.label}-${index}`} onClick={()=>onSuggestion(action.message)} className="chat-chip">{action.label}</button>;
    if(action.type==="anchor") return <a key={`${action.label}-${index}`} href={action.href} onClick={onNavigate} className="chat-chip">{action.label}</a>;
    if(action.type==="trial") return <button key={`${action.label}-${index}`} onClick={onTrial} className="chat-chip">{action.label}</button>;
    if(action.type==="whatsapp") { const href=createWhatsAppContactUrl(siteConfig.whatsapp); return href?<a key={`${action.label}-${index}`} href={href} target="_blank" rel="noopener noreferrer" className="chat-chip">{action.label}</a>:<span key={`${action.label}-${index}`} className="chat-chip cursor-not-allowed opacity-45" title="WhatsApp is not configured">{action.label}</span>; }
    const href=createEmailContactUrl(siteConfig.email);
    return href?<a key={`${action.label}-${index}`} href={href} className="chat-chip">{action.label}</a>:<span key={`${action.label}-${index}`} className="chat-chip cursor-not-allowed opacity-45" title="Email is not configured">{action.label}</span>;
  })}</div>;
}
