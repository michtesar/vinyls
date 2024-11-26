'use client';

import React, { useEffect, useState } from 'react';
import { fetchWanted, Vinyl } from '@/app/api';
import { VinylCard } from '@/app/components/vinyl-card';
import { userName } from '@/app/config';
import { LoadingSpinner } from '@/app/components/loading-spinner';

export default function Home() {
  const [collection, setCollection] = useState<Vinyl[] | null>(null);

  useEffect(() => {
    fetchWanted(
      `https://api.discogs.com/users/${userName}/collection/folders/0/releases`,
    ).then(setCollection);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start">
        <h1 className="text-6xl font-bold">Collection</h1>
        {collection ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
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
