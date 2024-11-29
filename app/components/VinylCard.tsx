import { Vinyl } from '@/app/api';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export const VinylCard = ({ vinyl }: { vinyl: Vinyl }) => {
  const router = useRouter();

  return (
    <div
      className="w-2/3 flex flex-col items-center rounded-lg"
      onClick={() => {
        router.push(`/vinyl/${vinyl.id}`);
      }}
    >
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
