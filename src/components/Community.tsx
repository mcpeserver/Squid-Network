import React from 'react';
import { Smartphone, Laptop, Instagram, Share2, Users, Star, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Community() {
  const socialItems = [
    {
      name: "Discord Server",
      desc: "Gabung ke server Discord resmi kami untuk mengobrol bersama seluruh pemain dan tim staff.",
      icon: MessageSquare,
      url: siteConfig.links.discord,
      btnText: "Join Discord",
      colorClass: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:border-blue-500/40",
      btnColor: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      name: "Grup WhatsApp",
      desc: "Dapatkan info event terbaru, gosip server, dan jalin pertemanan langsung di grup chat WhatsApp.",
      icon: Users,
      url: siteConfig.links.whatsappGroup,
      btnText: "Join Grup WA",
      colorClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/40",
      btnColor: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      name: "Vote Server",
      desc: "Dukung server kami setiap hari di list server Minecraft terpopuler dan bantu kami berkembang lebih jauh.",
      icon: Star,
      url: siteConfig.links.vote,
      btnText: "Vote Sekarang",
      colorClass: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400 group-hover:border-yellow-500/40",
      btnColor: "bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    },
    {
      name: "Instagram",
      desc: "Follow Instagram kami untuk melihat konten sinematik, meme Minecraft, serta dokumentasi server.",
      icon: Instagram,
      url: siteConfig.links.instagram,
      btnText: "Follow Instagram",
      colorClass: "bg-pink-500/10 border-pink-500/20 text-pink-400 group-hover:border-pink-500/40",
      btnColor: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border-pink-500/30",
    },
    {
      name: "TikTok",
      desc: "Lihat video tutorial pendek, cuplikan gameplay seru, dan konten viral dari SQUID NETWORK.",
      icon: Share2, // Styled beautifully
      url: siteConfig.links.tiktok,
      btnText: "Follow TikTok",
      colorClass: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:border-cyan-500/40",
      btnColor: "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      name: "Tutorial Bedrock",
      desc: "Hubungi admin untuk panduan instan cara menghubungkan Minecraft Pocket Edition Anda ke server.",
      icon: Smartphone,
      url: siteConfig.links.tutorialBedrock,
      btnText: "Tanya Cara Gabung",
      colorClass: "bg-sky-500/10 border-sky-500/20 text-sky-400 group-hover:border-sky-500/40",
      btnColor: "bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border-sky-500/30",
    },
    {
      name: "Tutorial Java Edition",
      desc: "Hubungi admin untuk mendapatkan tutorial lengkap cara memasukkan IP server melalui komputer.",
      icon: Laptop,
      url: siteConfig.links.tutorialJava,
      btnText: "Tanya Cara Gabung",
      colorClass: "bg-teal-500/10 border-teal-500/20 text-teal-400 group-hover:border-teal-500/40",
      btnColor: "bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border-teal-500/30",
    }
  ];

  return (
    <section id="komunitas" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-2">
            Social Media
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
            GABUNG KOMUNITAS RESMI
          </h3>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Ikuti media sosial resmi SQUID NETWORK untuk mendapatkan info ter-update dan berteman dengan sesama member.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.name}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/40 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${item.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-100 group-hover:text-white mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-medium mb-6">
                    {item.desc}
                  </p>
                </div>

                <a 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-2 px-4 rounded-xl text-xs font-display font-bold border transition-all duration-200 select-none block ${item.btnColor}`}
                >
                  {item.btnText}
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
