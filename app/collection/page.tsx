'use client';

import React, { useEffect, useState } from 'react';
import { fetchCollection, Vinyl } from '@/app/api';
import { VinylCard } from '@/app/components/vinyl-card';
import { LoadingSpinner } from '@/app/components/loading-spinner';
import { FaGift } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [collection, setCollection] = useState<Vinyl[] | null>(null);
  const [filteredCollection, setFilteredCollection] = useState<Vinyl[]>([]);
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchCollection().then(setCollection);
  }, []);

  useEffect(() => {
    setFilteredCollection(collection || []);
  }, [collection]);

  useEffect(() => {
    filterCollection(search);
  }, [search]);

  function filterCollection(search: string) {
    if (search) {
      setFilteredCollection(
        collection?.filter((vinyl) =>
          vinyl.title.toLowerCase().includes(search.toLowerCase()),
        ) || [],
      );
    } else {
      setFilteredCollection(collection || []);
    }
  }

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-6xl font-bold my-2">Collection</h1>
          <input
            type="text"
            placeholder="Search..."
            className={`p-2 border rounded-md w-1/4 ${
              window.matchMedia &&
              window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'bg-gray-800 text-white border-gray-700'
                : 'bg-white text-black border-gray-300'
            }`}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setSearch('');
              }
            }}
            value={search}
            autoFocus
          />
        </div>
        <div
          className="flex flex-row w-auto space-x-3.5 justify-end mb-3 p-2 rounded-md bg-red-500 hover:bg-red-600 cursor-pointer"
          onClick={() => {
            router.push('/wanted');
          }}
        >
          <FaGift />
          <p className="text-white text-xs font-semibold">Wanted</p>
        </div>
        {collection ? (
          <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-12">
            {filteredCollection.map((vinyl) => (
              <div key={vinyl.id} className="flex flex-col items-center mt-2">
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
