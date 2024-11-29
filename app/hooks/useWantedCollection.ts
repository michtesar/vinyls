import { useEffect, useState } from 'react';
import { fetchWanted, Vinyl } from '@/app/api';

export function useWantedCollection(): Vinyl[] | null {
  const [collection, setCollection] = useState<Vinyl[] | null>(null);

  useEffect(() => {
    fetchWanted().then(setCollection);
  }, []);

  return collection;
}
