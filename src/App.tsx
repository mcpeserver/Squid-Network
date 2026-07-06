import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServerInfo from './components/ServerInfo';
import Rules from './components/Rules';
import Ranks from './components/Ranks';
import Coins from './components/Coins';
import Community from './components/Community';
import DonationInfo from './components/DonationInfo';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const sections = ['beranda', 'rules', 'rank', 'coins', 'komunitas', 'kontak'];
    
    const handleScroll = () => {
      // 200px offset to make transition occur smoothly as headers clear the viewport
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run an initial check on load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
      {/* Sticky Header and Developer Banner */}
      <Header activeSection={activeSection} />
      
      {/* Main Sections Content */}
      <main>
        {/* Beranda (Hero Banner + Quick Actions) */}
        <Hero />
        
        {/* Server Info (IP / Connections) */}
        <ServerInfo />
        
        {/* Rules (Rules Catalog Cards) */}
        <Rules />
        
        {/* Rank (VIP & Donator Tiers) */}
        <Ranks />
        
        {/* Coins (Top up catalog) */}
        <Coins />
        
        {/* Komunitas (Social Grid Links) */}
        <Community />
        
        {/* Kontak (WhatsApp and Donation Explanation) */}
        <DonationInfo />
      </main>
      
      {/* Dynamic Footer credits */}
      <Footer />
    </div>
  );
}
