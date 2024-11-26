'use client';

import React, { useEffect, useState } from 'react';
import { fetchWanted, Vinyl } from '@/app/api';
import { VinylCard } from '@/app/components/vinyl-card';
import { LoadingSpinner } from '@/app/components/loading-spinner';

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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {wanted.map((vinyl) => (
              <VinylCard vinyl={vinyl} key={vinyl.id} />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </main>
    </div>
  );
}
