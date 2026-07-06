import React from 'react';
import { ShieldCheck, MessageSquare, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-12 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Footer section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-800/40">
          
          {/* Logo and Server Info */}
          <a href="#beranda" onClick={(e) => handleNavClick(e, "#beranda")} className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Logo SQUID NETWORK" 
              className="w-10 h-10 object-contain rounded-xl transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-lg font-display font-black tracking-wider text-white">
                SQUID <span className="text-sky-400">NETWORK</span>
              </span>
            </div>
          </a>

          {/* Quick links footer */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-display font-semibold text-slate-400">
            <a href="#beranda" onClick={(e) => handleNavClick(e, "#beranda")} className="hover:text-white transition-colors">Beranda</a>
            <a href="#rules" onClick={(e) => handleNavClick(e, "#rules")} className="hover:text-white transition-colors">Aturan</a>
            <a href="#rank" onClick={(e) => handleNavClick(e, "#rank")} className="hover:text-white transition-colors">Rank</a>
            <a href="#coins" onClick={(e) => handleNavClick(e, "#coins")} className="hover:text-white transition-colors">Coins</a>
            <a href="#komunitas" onClick={(e) => handleNavClick(e, "#komunitas")} className="hover:text-white transition-colors">Komunitas</a>
            <a href="#kontak" onClick={(e) => handleNavClick(e, "#kontak")} className="hover:text-white transition-colors">Kontak</a>
          </div>

        </div>

        {/* Lower Footer section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-slate-400">
          
          {/* Copyright info */}
          <div className="text-center md:text-left">
            <p className="font-sans font-medium">{siteConfig.copyright}</p>
            <p className="text-[10px] text-slate-500 mt-1">Kami tidak berafiliasi dengan Mojang Studios atau Microsoft.</p>
          </div>

          {/* Developer Credits Info */}
          <div className="flex flex-col items-center md:items-end gap-1.5 text-center md:text-right">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
              <span>Website dikembangkan oleh <span className="font-bold text-sky-400">RAN DEV</span></span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <a 
                href={siteConfig.developer.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                title="Hubungi WhatsApp Developer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp RAN DEV</span>
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href={siteConfig.developer.otherSitesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sky-400 transition-colors"
              >
                <span>Website Lainnya</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
