import { useEffect, useState } from 'react';
import { Vinyl } from '@/app/api';

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
