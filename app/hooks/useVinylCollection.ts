import { useEffect, useState } from 'react';
import { fetchCollection, Vinyl } from '@/app/api';

export function useVinylCollection(): Vinyl[] | null {
  const [collection, setCollection] = useState<Vinyl[] | null>(null);

  useEffect(() => {
    fetchCollection().then(setCollection);
  }, []);

  return collection;
}
