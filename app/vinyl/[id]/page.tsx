'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const VinylPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vinyl Details</h1>
      {id ? <p className="text-lg">Vinyl ID: {id}</p> : <p>Loading...</p>}
    </div>
  );
};

export default VinylPage;
