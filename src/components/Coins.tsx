import React from 'react';
import { Coins as CoinsIcon, Gem, TrendingUp } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Coins() {
  return (
    <section id="coins" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-yellow-400 uppercase mb-2">
            Server Currency
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
            PAKET TOP UP COINS
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Gunakan Coins untuk bertransaksi di dalam game dan membeli berbagai item kosmetik seru!
          </p>
        </div>

        {/* Coins Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {siteConfig.coins.map((coin, index) => {
            const isLargest = index === siteConfig.coins.length - 1;
            
            return (
              <div 
                key={coin.amount}
                className={`glass-panel rounded-2xl p-5 border relative overflow-hidden group hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between ${
                  isLargest 
                    ? 'border-yellow-500/30 shadow-[0_4px_20px_-3px_rgba(234,179,8,0.1)] bg-slate-950/80' 
                    : 'border-slate-800/40 hover:border-slate-700/60'
                }`}
              >
                {/* Decorative background pulse for top package */}
                {isLargest && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/5 rounded-full blur-2xl animate-pulse" />
                )}

                <div>
                  {/* Coin Icon or Gem */}
                  <div className="flex justify-between items-center mb-5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isLargest 
                        ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400' 
                        : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
                    }`}>
                      {isLargest ? <Gem className="w-5 h-5" /> : <CoinsIcon className="w-5 h-5" />}
                    </div>
                    
                    {coin.bonus && (
                      <span className="text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-2 rounded-full flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" />
                        {coin.bonus}
                      </span>
                    )}
                  </div>

                  {/* Coin Info */}
                  <h4 className={`font-display font-bold text-lg mb-1 ${isLargest ? 'text-yellow-400' : 'text-slate-100'}`}>
                    {coin.amount}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">Koin SQUID NETWORK</p>
                </div>

                {/* Coin Price */}
                <div className="mt-8 pt-4 border-t border-slate-800/40">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                    Harga Top-Up
                  </span>
                  <span className="text-xl font-display font-extrabold text-white">
                    {coin.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
