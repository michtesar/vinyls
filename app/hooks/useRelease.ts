import { useEffect, useState } from 'react';
import { fetchRelease } from '@/app/api';
import { Release } from '@/app/types/release';

export function useRelease(id: number): Release | null {
  const [data, setData] = useState<Release | null>(null);

  useEffect(() => {
    fetchRelease(id).then(setData);
  }, [id]);

  return data;
}
