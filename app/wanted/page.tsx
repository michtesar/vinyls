'use client';

import React, { useState } from 'react';
import { Loader } from '@/app/components/Loader';
import { useWantedCollection } from '@/app/hooks/useWantedCollection';
import { useFilteredCollection } from '@/app/hooks/useFilteredCollection';
import { SearchBar } from '@/app/components/SearchBar';
import { NavigationLink } from '@/app/components/NavigationLink';
import { FaRecordVinyl } from 'react-icons/fa';
import { Collection } from '@/app/components/Collection';

export default function Home() {
  const [search, setSearch] = useState('');
  const vinylCollection = useWantedCollection();
  const filteredCollection = useFilteredCollection(vinylCollection, search);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start">
        <header className="flex justify-between items-center w-full">
          <h1 className="text-6xl font-bold my-2">Collection</h1>
          <SearchBar search={search} setSearch={setSearch} />
        </header>
        <NavigationLink label="Collection" to="/" icon={<FaRecordVinyl />} />
        {vinylCollection ? (
          <Collection vinyls={filteredCollection} />
        ) : (
          <Loader />
        )}
      </main>
    </div>
  );
}
