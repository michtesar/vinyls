import { useEffect, useState } from 'react';
import { fetchCollection, Vinyl } from '@/app/api';

/**
 * Custom hook to manage a vinyl record collection.
 * It fetches and returns the collection of vinyl records.
 *
 * @return {Vinyl[] | null} The current state of the vinyl collection, which is an array of Vinyl objects or null if the collection has not been fetched yet.
 */
export function useVinylCollection(): Vinyl[] | null {
  const [collection, setCollection] = useState<Vinyl[] | null>(null);

  useEffect(() => {
    fetchCollection().then(setCollection);
  }, []);

  return collection;
}
