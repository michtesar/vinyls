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
        <div className="flex justify-between items-center w-full">
          <h1 className="text-6xl font-bold my-5">Collection</h1>
          <input
            type="text"
            placeholder="Search..."
            className={`p-2 border rounded-md w-1/4 ${
              window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'bg-gray-800 text-white border-gray-700'
                : 'bg-white text-black border-gray-300'
            }`}
          />
        </div>
        {collection ? (
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-12">
            {collection.map((vinyl) => (
              <div key={vinyl.id} className="flex flex-col items-center">
                <VinylCard vinyl={vinyl} />
              </div>
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </main>
    </div>
  );
}
