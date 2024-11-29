import { Vinyl } from '@/app/api';
import { VinylCard } from '@/app/components/VinylCard';
import React from 'react';

interface CollectionProps {
  vinyls: Vinyl[];
}

export const Collection = ({ vinyls }: CollectionProps) => {
  return (
    <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-12">
      {vinyls.map((vinyl) => (
        <div key={vinyl.id} className="flex flex-col items-center mt-2">
          <VinylCard vinyl={vinyl} />
        </div>
      ))}
    </div>
  );
};
