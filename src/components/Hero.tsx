import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, BookOpen, Download, HelpCircle, Activity } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyIP = () => {
    navigator.clipboard.writeText(siteConfig.java.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="beranda" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Image with Dark Gradient Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 scale-105"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90" />

      {/* Floating particles background effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-emerald-500/15 blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-2/3 w-36 h-36 rounded-full bg-yellow-500/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Floating Logo */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mb-6 drop-shadow-[0_15px_30px_rgba(14,165,233,0.3)] select-none"
        >
          <img 
            src="/logo.png" 
            alt="Logo SQUID NETWORK" 
            className="w-full h-full object-contain rounded-2xl border-4 border-yellow-400/20 bg-yellow-400/5 backdrop-blur-[2px] p-2"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-950 text-[10px] md:text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-md border border-yellow-300">
            SQUID ARMY
          </div>
        </motion.div>

        {/* Server Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/50 text-xs font-mono font-semibold text-white mb-6 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{siteConfig.serverStatus.message}</span>
        </div>

        {/* Server Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight mb-2 uppercase drop-shadow-md select-none">
          SQUID <span className="text-sky-400">NETWORK</span>
        </h1>

        {/* Sub Title */}
        <h2 className="text-md sm:text-xl md:text-2xl font-display font-bold text-yellow-300 tracking-wider mb-6">
          Server Minecraft Bedrock & Java Edition Indonesia
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-10 text-center drop-shadow-sm font-sans font-medium">
          {siteConfig.description} Selamat datang di komunitas petualangan terbaik! Jelajahi dunia kastil, pulau fantasi, dan temukan teman-teman baru dalam petualangan Minecraft tak terlupakan.
        </p>

        {/* CTA Buttons */}
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            onClick={(e) => handleScrollToSection(e, '#server-info')}
            className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-display font-bold py-3.5 px-4 rounded-xl shadow-[0_4px_20px_-3px_rgba(14,165,233,0.35)] transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2"
          >
            <Activity className="w-4.5 h-4.5" />
            <span>Gabung Server</span>
          </button>

          <button
            onClick={handleCopyIP}
            className={`w-full font-display font-bold py-3.5 px-4 rounded-xl border transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2 ${
              copied 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-[0_4px_20px_-3px_rgba(16,185,129,0.2)]' 
                : 'bg-slate-900/70 hover:bg-slate-900 border-slate-700/60 hover:border-slate-600 text-white'
            }`}
          >
            {copied ? <Check className="w-4.5 h-4.5" /> : <Copy className="w-4.5 h-4.5 text-slate-400" />}
            <span className="truncate">{copied ? 'IP Disalin!' : 'Salin IP'}</span>
          </button>

          <a
            href={siteConfig.links.tutorialBedrock}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-900/70 hover:bg-slate-900 text-white font-display font-bold py-3.5 px-4 rounded-xl border border-slate-700/60 hover:border-slate-600 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2"
          >
            <Download className="w-4.5 h-4.5 text-yellow-400" />
            <span>Tutorial Bedrock</span>
          </a>

          <a
            href={siteConfig.links.tutorialJava}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-900/70 hover:bg-slate-900 text-white font-display font-bold py-3.5 px-4 rounded-xl border border-slate-700/60 hover:border-slate-600 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4.5 h-4.5 text-sky-400" />
            <span>Tutorial Java</span>
          </a>
        </div>
      </div>
    </section>
  );
}
