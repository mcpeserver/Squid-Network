import React from 'react';
import { Crown, Sparkles, Star } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Ranks() {
  return (
    <section id="rank" className="py-20 bg-slate-950 relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-2">
            Server Store
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
            DAFTAR RANK DONATUR
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Dukung pengembangan server dengan menjadi Donatur VIP. Dapatkan gelar eksklusif di dalam server!
          </p>
        </div>

        {/* Ranks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {siteConfig.ranks.map((rank) => {
            const isKing = rank.name === "KING";
            const isLord = rank.name === "LORD";
            
            return (
              <div 
                key={rank.name}
                className={`glass-panel rounded-2xl p-6 border ${rank.borderColor} relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Decorative background element for premium ranks */}
                {(isKing || isLord) && (
                  <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20 transition-opacity group-hover:opacity-40 ${
                    isKing ? 'bg-yellow-400' : 'bg-rose-500'
                  }`} />
                )}

                <div>
                  {/* Rank Header */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-mono uppercase font-black px-2.5 py-1 rounded-md tracking-wider ${rank.badgeColor}`}>
                      {rank.name}
                    </span>
                    {isKing ? (
                      <Crown className="w-5 h-5 text-yellow-400 animate-bounce" />
                    ) : isLord ? (
                      <Sparkles className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Star className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                    )}
                  </div>

                  {/* Rank Name */}
                  <h4 className="font-display font-bold text-2xl text-slate-100 mb-1 group-hover:text-white">
                    RANK {rank.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">Paket Donasi Server</p>
                </div>

                {/* Pricing Block */}
                <div className="mt-8 pt-4 border-t border-slate-800/40">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold mb-1">
                    Biaya Donasi
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                      {rank.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ Selamanya</span>
                  </div>
                </div>

                {/* Subtle highlight ring for King */}
                {isKing && (
                  <div className="absolute inset-0 border border-yellow-400/20 rounded-2xl pointer-events-none group-hover:border-yellow-400/40 transition-colors" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
