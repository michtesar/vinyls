import { Vinyl } from '@/app/api';
import Image from 'next/image';
import React from 'react';

export const VinylCard = ({ vinyl }: { vinyl: Vinyl }) => {
  return (
    <div className="w-1/3 flex flex-col items-center p-4 rounded-lg shadow-lg">
      <Image
        src={vinyl.coverUrl}
        alt={vinyl.title}
        className="w-full object-cover rounded-md"
        width="128"
        height="128"
      />
      <div className="w-full mt-4 text-left">
        <p className="text-white text-xs font-semibold truncate">
          {vinyl.title}
        </p>
        <p className="text-gray-400 text-xs truncate">
          {
            vinyl.artists
              .map((artist) => artist.name)
              .join(', ')
              .split('(')[0]
          }
        </p>
      </div>
    </div>
  );
};
