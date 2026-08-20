import { chatbotKnowledge, type ChatAction } from "./chatbotKnowledge";
import { plans } from "./pricing";

export type ChatbotResponse = { answer: string; actions?: ChatAction[]; kind: "answer" | "fallback" | "scope" | "security" };

const synonyms: Record<string,string[]> = {
  cost:["price","prices","pricing","how much"], buffering:["buffer","lag","lagging","freezing","stuttering"],
  phone:["iphone","android","mobile"], television:["tv","smart tv"], subscription:["plan","plans","package","membership"],
};
const sensitive = /\b(cvv|otp|one.?time (?:password|code)|card number|credit card|bank password|banking password|pin code)\b/i;
const domainTerms = ["iptv","m3u","epg","xtream","xc","vod","ppv","isp","vpn","stb","mag","apk","hd","fhd","uhd","4k","stream","channel","device","tv","firestick","iphone","android","subscription","plan","price","cost","activation","renew","playlist","login","portal","buffer","lag","install","setup","payment","trial","demo","test account"];

export function normalizeChatText(input:string) {
  return input.toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim();
}

function expandedTokens(text:string) {
  const set=new Set(text.split(" "));
  for(const [canonical,words] of Object.entries(synonyms)) if(words.some(word=>text.includes(word))) { set.add(canonical); words.forEach(word=>word.split(" ").forEach(token=>set.add(token))); }
  return set;
}

const supportActions:ChatAction[]=[{type:"whatsapp",label:"WhatsApp Support"},{type:"email",label:"Email Support"}];

export async function getChatbotResponse(message:string):Promise<ChatbotResponse> {
  const raw=message.slice(0,500);
  if(sensitive.test(raw)) return {kind:"security",answer:"For your security, please do not share passwords, card details, verification codes or other sensitive information in this chat."};
  const text=normalizeChatText(raw), tokens=expandedTokens(text);
  const pricingTerms=["price","prices","pricing","subscription","plan","plans","how much","cost","package","membership"];
  if(pricingTerms.some(term=>text.includes(term))) return {kind:"answer",answer:`Prime IPTV offers these subscription plans:\n\n${plans.map(plan=>`${plan.name} — €${plan.price}${plan.badge?` — ${plan.badge}`:""}`).join("\n")}`,actions:[{type:"anchor",label:"View Plans",href:"#plans"}]};

  let bestScore=0;
  let bestIndex=-1;
  chatbotKnowledge.forEach((entry,index)=>{
    let score=0;
    for(const alias of entry.aliases){const normalized=normalizeChatText(alias);if(text===normalized)score+=14;else if(text.includes(normalized)||normalized.includes(text))score+=8;}
    for(const keyword of entry.keywords){const normalized=normalizeChatText(keyword);if(text.includes(normalized))score+=normalized.includes(" ")?5:3;else if(tokens.has(normalized))score+=2;}
    if(score>bestScore){bestScore=score;bestIndex=index;}
  });
  if(bestScore>=3&&bestIndex>=0){const entry=chatbotKnowledge[bestIndex];return {kind:"answer",answer:entry.answer,actions:entry.actions};}
  const inScope=domainTerms.some(term=>text.includes(term));
  return inScope
    ? {kind:"fallback",answer:"I'm not completely sure about that. Please contact Prime IPTV Support and we'll help you.",actions:supportActions}
    : {kind:"scope",answer:"I'm here to help with Prime IPTV, subscriptions, setup, compatible devices and common IPTV questions."};
}
