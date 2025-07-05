'use client';

import { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero';
import WhyCryptoDeven from '../components/sections/WhyCryptoDeven';
import GetStarted from '../components/sections/GetStarted';
import Platforms from '../components/sections/Platforms';
import Resources from '../components/sections/Resources';
import ThoughtLeaders from '../components/sections/ThoughtLeaders';
import Contact from '../components/sections/Contact';
import Quotes from '../components/sections/Quotes';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyCryptoDeven />
      <GetStarted />
      <Platforms />
      <Resources />
      <ThoughtLeaders />
      <Contact />
      <Quotes />
    </div>
  );
}
