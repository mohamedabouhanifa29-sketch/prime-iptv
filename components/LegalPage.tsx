import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { createEmailContactUrl, createWhatsAppContactUrl } from "@/lib/contactLinks";
import { Logo } from "./Logo";
import { Footer } from "./Footer";

export type LegalSection = { id:string; label:string };

export function LegalContact(){
  const whatsapp=createWhatsAppContactUrl(siteConfig.whatsapp),email=createEmailContactUrl(siteConfig.email);
  return <div className="mt-5 flex flex-wrap gap-3">{email&&<a className="btn-secondary" href={email}><Mail size={15}/>{siteConfig.email}<ArrowUpRight size={13}/></a>}{whatsapp&&<a className="btn-secondary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={15}/>WhatsApp Support<ArrowUpRight size={13}/></a>}</div>;
}

export function LegalPage({title,updated,description,sections,children}:{title:string;updated:string;description:string;sections:LegalSection[];children:React.ReactNode}){
  return <><header className="border-b border-white/[.08] bg-[#060706]/90 py-3 backdrop-blur-xl"><div className="container-page flex items-center justify-between"><Logo/><Link href="/" className="btn-secondary px-4 py-2.5"><ArrowLeft size={15}/>Back to Home</Link></div></header>
    <main className="relative overflow-hidden"><div className="hero-grid absolute inset-x-0 top-0 h-[520px] opacity-60"/><div className="absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-gold/[.06] blur-[110px]"/>
      <div className="container-page relative py-16 md:py-24"><div className="max-w-4xl"><p className="eyebrow">Legal information</p><h1 className="section-title mt-4">{title}</h1><p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 md:text-base">{description}</p><p className="mt-5 inline-flex rounded-full border border-gold/15 bg-gold/[.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gold">Last Updated: {updated}</p></div>
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[260px_minmax(0,760px)] xl:gap-20"><aside className="glass rounded-2xl p-5 lg:sticky lg:top-24"><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-gold">On this page</p><nav className="mt-4 space-y-1" aria-label={`${title} contents`}>{sections.map((section,index)=><a key={section.id} href={`#${section.id}`} className="flex gap-3 rounded-lg px-2 py-2 text-xs leading-5 text-white/40 transition hover:bg-white/[.035] hover:text-white"><span className="text-gold/55">{String(index+1).padStart(2,"0")}</span>{section.label}</a>)}</nav></aside>
          <article className="legal-copy min-w-0">{children}</article>
        </div>
      </div>
    </main><Footer/></>;
}
