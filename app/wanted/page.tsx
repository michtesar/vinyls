'use client';

import React, { useEffect, useState } from 'react';
import { fetchWanted, Vinyl } from '@/app/api';
import { VinylCard } from '@/app/components/VinylCard';
import { Loader } from '@/app/components/Loader';

export default function Home() {
  const [wanted, setWanted] = useState<Vinyl[] | null>(null);

  useEffect(() => {
    fetchWanted().then(setWanted);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start">
        <h1 className="text-6xl font-bold">Wanted</h1>
        {wanted ? (
          <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-12">
            {wanted.map((vinyl) => (
              <div key={vinyl.id} className="flex flex-col items-center mt-2">
                <VinylCard vinyl={vinyl} />
              </div>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
}
