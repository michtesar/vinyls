'use client';

import React, { useEffect, useState } from 'react';
import { fetchCollection, Vinyl } from '@/app/api';
import { VinylCard } from '@/app/components/vinyl-card';
import { LoadingSpinner } from '@/app/components/loading-spinner';

export default function Home() {
  const [collection, setCollection] = useState<Vinyl[] | null>(null);

  useEffect(() => {
    fetchCollection().then(setCollection);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start">
        <h1 className="text-6xl font-bold">Collection</h1>
        {collection ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8">
            {collection.map((vinyl) => (
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
