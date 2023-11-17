"use client";

import Image from 'next/image'
import Clubs from '@/components/Clubs'
import Navbar from '@/components/Navbar'
import Tabs from '@/components/Tabs';

export default function Home() {
  return (
    <main>
      <Tabs />
      <Navbar />
      <Clubs />
    </main>
  )
}
