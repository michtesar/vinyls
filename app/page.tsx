'use client';

import React, { useState } from 'react';
import { SearchBar } from '@/app/components/SearchBar';
import { NavigationLink } from '@/app/components/NavigationLink';
import { FaGift } from 'react-icons/fa';
import { Collection } from '@/app/components/Collection';
import { LoadingSpinner } from '@/app/components/loading-spinner';
import { useVinylCollection } from '@/app/hooks/useVinylCollection';
import { useFilteredCollection } from '@/app/hooks/useFilteredCollection';

export default function Home() {
  const [search, setSearch] = useState('');
  const vinylCollection = useVinylCollection();
  const filteredCollection = useFilteredCollection(vinylCollection, search);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start">
        <header className="flex justify-between items-center w-full">
          <h1 className="text-6xl font-bold my-2">Collection</h1>
          <SearchBar search={search} setSearch={setSearch} />
        </header>
        <NavigationLink label="Wanted" to="/wanted" icon={<FaGift />} />
        {vinylCollection ? (
          <Collection vinyls={filteredCollection} />
        ) : (
          <LoadingSpinner />
        )}
      </main>
    </div>
  );
}
