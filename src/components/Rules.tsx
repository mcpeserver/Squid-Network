import React from 'react';
import { MessageSquareWarning, ShieldAlert, Flame, Megaphone, Bug, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../config/site';

// Map icon strings to actual Lucide component definitions for 100% compile safety.
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquareWarning,
  ShieldAlert,
  Flame,
  Megaphone,
  Bug,
  HeartHandshake
};

export default function Rules() {
  return (
    <section id="rules" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-2">
            Panduan Komunitas
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
            ATURAN RESMI SERVER
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Untuk menjaga keseruan dan kenyamanan bersama, harap baca dan patuhi seluruh aturan bermain di bawah ini.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.rules.map((rule) => {
            const IconComponent = iconMap[rule.iconName] || MessageSquareWarning;
            return (
              <div 
                key={rule.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800/40 relative overflow-hidden group"
              >
                {/* Visual Accent Corner Ribbon */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-sky-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-4 mb-4 pl-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-500 font-bold block mb-0.5">Aturan #0{rule.id}</span>
                    <h4 className="font-display font-bold text-base text-slate-100 group-hover:text-white transition-colors">
                      {rule.title}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed font-sans font-medium pl-2">
                  {rule.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
