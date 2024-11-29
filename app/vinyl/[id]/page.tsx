'use client';

import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import { useRelease } from '@/app/hooks/useRelease';
import Image from 'next/image';
import Link from 'next/link';

const VinylPage = () => {
  const { id } = useParams() as { id: string };
  const searchParams = useSearchParams();
  const backTo = searchParams.get('backTo');
  const release = useRelease(parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vinyl Details</h1>
      {release ? (
        <>
          <p className="text-lg">Title: {release.title}</p>
          <p className="text-lg">
            Artist: {release.artists[0].name.split('(')[0]}
          </p>
          <Link href={backTo!}>Back</Link>
          <Image
            src={release.images[0].resource_url}
            alt={String(release.id)}
            width={512}
            height={512}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VinylPage;
