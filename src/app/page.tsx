'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhyCryptoDeven from '@/components/sections/WhyCryptoDeven';
import GetStarted from '@/components/sections/GetStarted';
import FastLane from '@/components/sections/FastLane';
import Resources from '@/components/sections/Resources';
import ThoughtLeaders from '@/components/sections/ThoughtLeaders';
import Subscribe from '@/components/sections/Subscribe';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        <WhyCryptoDeven />
        <GetStarted />
        <FastLane />
        <Resources />
        <ThoughtLeaders />
        <Subscribe />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
