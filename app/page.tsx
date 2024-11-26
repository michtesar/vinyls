'use client';

import React, { useEffect, useState } from 'react';
import { fetchWanted, Vinyl } from '@/app/api';
import { VinylCard } from '@/app/components/vinyl-card';

export default function Home() {
  const [wanted, setWanted] = useState<Vinyl[] | null>(null);

  useEffect(() => {
    fetchWanted().then(setWanted);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:items-start">
        <h1 className="text-6xl font-bold">Wanted</h1>
        {wanted ? (
          <div className="grid">
            {wanted.map((vinyl) => (
              <VinylCard vinyl={vinyl} key={vinyl.id} />
            ))}
          </div>
        ) : (
          <div>Loading..</div>
        )}
      </main>
    </div>
  );
}
