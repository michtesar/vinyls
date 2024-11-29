'use client';

import React, { useEffect, useState } from 'react';
import { fetchCollection, Vinyl } from '@/app/api';
import { VinylCard } from '@/app/components/vinyl-card';
import { LoadingSpinner } from '@/app/components/loading-spinner';
import { SearchBar } from '@/app/components/SearchBar';
import { NavigationLink } from '@/app/components/NavigationLink';
import { FaGift } from 'react-icons/fa';

export default function Home() {
  const [collection, setCollection] = useState<Vinyl[] | null>(null);
  const [filteredCollection, setFilteredCollection] = useState<Vinyl[]>([]);
  const [search, setSearch] = useState('');

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
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <NavigationLink label="Wanted" to="/wanted" icon={<FaGift />} />
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
