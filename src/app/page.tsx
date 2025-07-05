'use client';

import { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero';
import WhyCryptoDeven from '../components/sections/WhyCryptoDeven';
import GetStarted from '../components/sections/GetStarted';
import Resources from '../components/sections/Resources';
import ThoughtLeaders from '../components/sections/ThoughtLeaders';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyCryptoDeven />
      <GetStarted />
      <Resources />
      <ThoughtLeaders />
      <Contact />
    </div>
  );
}
