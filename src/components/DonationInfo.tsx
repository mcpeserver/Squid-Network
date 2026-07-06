import React from 'react';
import { MessageSquare, ShieldCheck, CheckCircle2, Heart, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function DonationInfo() {
  return (
    <section id="kontak" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-2">
            Panduan Pembelian
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
            INFORMASI PEMBELIAN & DONASI
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Ikuti petunjuk di bawah ini untuk mengklaim Rank, Coins, atau berdonasi secara resmi dan aman.
          </p>
        </div>

        {/* Purchase Info & Explanations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left Block: WhatsApp Contact & Action */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/40 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient visual background glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h4 className="font-display font-black text-2xl text-white uppercase mb-3">
                HUBUNGI VIA WHATSAPP
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans font-medium mb-6">
                Seluruh proses pembelian Rank, Coins, dan donasi server dilayani langsung secara personal oleh Admin resmi melalui kontak WhatsApp kami untuk menjamin keamanan penuh.
              </p>

              {/* Number Showcase Card */}
              <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4 mb-6">
                <span className="text-[10px] font-mono text-slate-400 block font-semibold mb-1 uppercase tracking-wider">
                  Nomor WhatsApp Resmi
                </span>
                <span className="font-mono text-xl sm:text-2xl font-black text-yellow-300 select-all tracking-wider">
                  {siteConfig.store.phone}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Call Button */}
            <a 
              href={siteConfig.store.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-display font-bold py-4 rounded-xl shadow-[0_4px_15px_-3px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_25px_-3px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 select-none"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Hubungi WhatsApp</span>
            </a>
          </div>

          {/* Right Block: Explanations of Donation usage */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/40 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-100 uppercase">
                    PENGGUNAAN DANA DONASI
                  </h4>
                  <p className="text-xs text-slate-400">Kemana dana dukungan Anda disalurkan?</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans font-medium mb-6">
                SQUID NETWORK dikelola secara independen oleh tim developer kami. Seluruh hasil dari pembelian Rank dan Top-up Coins 100% dialokasikan kembali untuk kepentingan berikut:
              </p>

              {/* Bullet Explanations */}
              <div className="space-y-4">
                {siteConfig.store.donationExplanations.map((text, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-3 rounded-xl bg-slate-900/40 border border-slate-800/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 font-sans font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro assurance note */}
            <div className="mt-6 pt-5 border-t border-slate-800/40 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sistem server terjamin aman, adil, transparan, dan terpercaya. Terima kasih atas dukungan Anda!</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
