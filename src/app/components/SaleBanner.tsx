
"use client"
import Image from 'next/image';
import { useState } from 'react';


export default function SaleBanner() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden justify-center items-center flex">
      <div
        className={`relative group hover:animate-wave`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src="/b1.png"
          alt="banner"
          width={1000}
          height={300} 
          className={`transition-all duration-300 ${
            hovered ? 'filter brightness-125' : ''
          }`}
        />
        <div
          className={`absolute inset-0 bg-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
        ></div>
      </div>
    </section>
  );
}


  
  