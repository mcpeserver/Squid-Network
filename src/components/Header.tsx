import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Shield, Users, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';
import logoImg from '../assets/images/logo.png';
import { useDeveloperConfig } from '../lib/developerApi';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { config: devConfig } = useDeveloperConfig();

  const getWaUrl = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    if (digits.startsWith('0')) {
      return `https://wa.me/62${digits.substring(1)}`;
    }
    return `https://wa.me/${digits}`;
  };

  const waLink = getWaUrl(devConfig.contact.whatsapp);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Aturan", href: "#rules" },
    { label: "Rank", href: "#rank" },
    { label: "Coins", href: "#coins" },
    { label: "Komunitas", href: "#komunitas" },
    { label: "Kontak", href: "#kontak" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300">
      {/* Developer Banner */}
      <div className="w-full bg-slate-950/95 text-slate-300 py-2 px-4 border-b border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs backdrop-blur-md">
        <div className="flex items-center gap-2 font-mono truncate w-full sm:w-auto justify-center sm:justify-start">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block shrink-0"></span>
          <span className="text-[11px] sm:text-xs">
            Developed by <span className="font-semibold text-white">{devConfig.name}</span> • WA:{" "}
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:underline hover:text-emerald-300 transition-colors font-semibold"
            >
              {devConfig.contact.whatsapp}
            </a>
          </span>
        </div>
        
        {/* Dynamic Developer & Community Links */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end shrink-0 select-none">
          {/* Community Site */}
          <a 
            href={devConfig.community.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white py-1 px-2 rounded border border-slate-800 hover:border-slate-700 transition-all text-[10px] sm:text-xs"
            title={`Kunjungi ${devConfig.community.name}`}
          >
            <Users className="w-3 h-3 text-sky-400" />
            <span>{devConfig.community.name}</span>
          </a>
          
          {/* Community Discord */}
          <a 
            href={devConfig.community.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 py-1 px-2 rounded border border-indigo-500/20 hover:border-indigo-500/40 transition-all text-[10px] sm:text-xs"
            title="Gabung Discord Developer"
          >
            <MessageSquare className="w-3 h-3 text-indigo-400" />
            <span>Discord Dev</span>
          </a>

          {/* Portfolio (Website Lainnya) */}
          <a 
            href={devConfig.website.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-medium py-1 px-2.5 rounded border border-sky-500/20 hover:border-sky-500/40 transition-all text-[10px] sm:text-xs"
            title="Lihat Website / Jasa Lainnya"
          >
            <span>Website Lainnya</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg py-3 sm:py-3.5' 
          : 'bg-slate-900/60 backdrop-blur-md border-b border-slate-800/30 py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Server Name */}
          <a href="#beranda" onClick={(e) => handleNavClick(e, "#beranda")} className="flex items-center gap-2.5 group">
            <img 
              src={logoImg} 
              alt="Logo SQUID NETWORK" 
              className="w-8 h-8 sm:w-10 h-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-display font-black tracking-wider text-white">
                {siteConfig.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center gap-1.5 font-display text-sm font-semibold">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 select-none ${
                    isActive 
                      ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Call to Action Button in Desktop Navbar */}
          <div className="hidden md:block">
            <a 
              href="#kontak"
              onClick={(e) => handleNavClick(e, "#kontak")}
              className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-display font-bold text-sm py-2 px-4 rounded-xl shadow-[0_4px_12px_-3px_rgba(14,165,233,0.3)] hover:shadow-[0_6px_20px_-3px_rgba(14,165,233,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
            >
              <Shield className="w-4 h-4" />
              <span>Gabung Server</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-slate-800/30 border border-slate-700/25 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed inset-0 top-[90px] bg-slate-950/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-out border-t border-slate-800/50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col p-6 gap-4 font-display font-semibold">
          {menuItems.map((item, idx) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                  isActive 
                    ? 'bg-sky-500/10 border-sky-500/30 text-sky-400' 
                    : 'bg-slate-900/30 border-slate-800/40 text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span>{item.label}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-sky-400 animate-pulse' : 'bg-transparent'}`}></span>
              </a>
            );
          })}
          <div className="mt-4 pt-4 border-t border-slate-800/50">
            <a 
              href="#kontak"
              onClick={(e) => handleNavClick(e, "#kontak")}
              className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-display font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_12px_-3px_rgba(14,165,233,0.3)] transition-all"
            >
              <Shield className="w-5 h-5" />
              <span>Gabung Server</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
