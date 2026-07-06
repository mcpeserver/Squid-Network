import React, { useState } from 'react';
import { Smartphone, Laptop, Copy, Check, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function ServerInfo() {
  const [copiedBedrock, setCopiedBedrock] = useState(false);
  const [copiedJava, setCopiedJava] = useState(false);

  const handleCopyBedrock = () => {
    navigator.clipboard.writeText(siteConfig.bedrock.ip);
    setCopiedBedrock(true);
    setTimeout(() => setCopiedBedrock(false), 2000);
  };

  const handleCopyJava = () => {
    navigator.clipboard.writeText(siteConfig.java.ip);
    setCopiedJava(true);
    setTimeout(() => setCopiedJava(false), 2000);
  };

  return (
    <section id="server-info" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase mb-2">
            Cara Bergabung
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
            INFORMASI KONEKSI SERVER
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Pilih platform bermain Anda dan sambungkan sekarang juga ke dalam permainan kami.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* Bedrock Edition Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group border border-slate-800/40 hover:border-slate-700/60 transition-all duration-300">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 text-sky-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white">Bedrock Edition</h4>
                  <p className="text-xs text-slate-400 font-medium">MCPE / HP / Konsol</p>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wide">
                Bedrock
              </span>
            </div>

            {/* IP Details */}
            <div className="space-y-4">
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/50 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold mb-0.5">Alamat Server / IP</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-100 select-all">{siteConfig.bedrock.ip}</span>
                </div>
                <button
                  onClick={handleCopyBedrock}
                  className={`p-2.5 rounded-lg border transition-all duration-200 shrink-0 ml-2 ${
                    copiedBedrock 
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400' 
                      : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 hover:border-slate-600 text-slate-300 hover:text-white'
                  }`}
                  title="Salin IP Bedrock"
                >
                  {copiedBedrock ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/30">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold mb-0.5">Port</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-200">{siteConfig.bedrock.port}</span>
                </div>
                <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/30">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold mb-0.5">Versi Dukungan</span>
                  <span className="font-sans text-xs sm:text-sm font-bold text-slate-200 truncate block">Terbaru</span>
                </div>
              </div>
            </div>

            {/* Extra guide note */}
            <div className="mt-5 flex gap-2.5 items-start bg-slate-900/30 p-3.5 rounded-xl border border-slate-800/30">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
                Pemain di HP (Minecraft PE) dapat menambahkan server secara manual di tab "Servers" dengan memasukkan IP & Port di atas.
              </p>
            </div>
          </div>

          {/* Java Edition Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group border border-slate-800/40 hover:border-slate-700/60 transition-all duration-300">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-teal-500/5 rounded-full blur-3xl" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white">Java Edition</h4>
                  <p className="text-xs text-slate-400 font-medium">PC / Laptop / TLauncher</p>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wide">
                Java PC
              </span>
            </div>

            {/* IP Details */}
            <div className="space-y-4">
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/50 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold mb-0.5">Alamat Server / IP</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-100 select-all">{siteConfig.java.ip}</span>
                </div>
                <button
                  onClick={handleCopyJava}
                  className={`p-2.5 rounded-lg border transition-all duration-200 shrink-0 ml-2 ${
                    copiedJava 
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400' 
                      : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 hover:border-slate-600 text-slate-300 hover:text-white'
                  }`}
                  title="Salin IP Java"
                >
                  {copiedJava ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/30">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold mb-0.5">Port Default</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-200">{siteConfig.java.port}</span>
                </div>
                <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/30">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold mb-0.5">Versi Minecraft</span>
                  <span className="font-sans text-xs sm:text-sm font-bold text-slate-200 truncate block">{siteConfig.java.version}</span>
                </div>
              </div>
            </div>

            {/* Extra guide note */}
            <div className="mt-5 flex gap-2.5 items-start bg-slate-900/30 p-3.5 rounded-xl border border-slate-800/30">
              <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
                Pemain di PC dapat langsung menambahkan alamat server di "Multiplayer" lalu "Add Server" menggunakan IP default di atas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
