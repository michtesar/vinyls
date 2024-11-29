import { useEffect, useState } from 'react';
import { Vinyl } from '@/app/api';

/**
 * Filters the provided collection of Vinyl records based on the search string.
 *
 * @param {Vinyl[] | null} collection - The collection of Vinyl records to be filtered.
 * @param {string} search - The search string used to filter the Vinyl collection. The filter is case-insensitive.
 * @return {Vinyl[]} The filtered array of Vinyl records matching the search criteria. If no search string is provided, returns the original collection.
 */
export function useFilteredCollection(
  collection: Vinyl[] | null,
  search: string,
): Vinyl[] {
  const [filteredCollection, setFilteredCollection] = useState<Vinyl[]>([]);

  useEffect(() => {
    if (collection) {
      const filtered = search
        ? collection.filter((vinyl) =>
            vinyl.title.toLowerCase().includes(search.toLowerCase()),
          )
        : collection;
      setFilteredCollection(filtered);
    }
  }, [collection, search]);

  return filteredCollection;
}
