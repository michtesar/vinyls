'use server';

import axios from 'axios';
import { userName } from '@/app/config';
import { Release } from '@/app/types/release';

export interface Vinyl {
  id: string;
  title: string;
  coverUrl: string;
  year: number;
  rating: number;
  artists: Artist[];
}

export interface Artist {
  id: number;
  name: string;
  resource_url: string;
}

const token = process.env.DISCOGS_TOKEN;

export const fetchCollection = async (
  perPage: number = 10,
): Promise<Vinyl[]> => {
  let page = 1;
  let allCollection: Vinyl[] = [];
  let keepFetching = true;

  try {
    while (keepFetching) {
      const response = await axios.get(
        `https://api.discogs.com/users/${userName}/collection/folders/0/releases?token=${token}&page=${page}&per_page=${perPage}`,
      );
      const collection = response.data.releases.map(
        (item: {
          id: string;
          basic_information: {
            title: string;
            cover_image: string;
            year: number;
            artists: Artist[];
            rating: number;
          };
        }) => ({
          id: item.id,
          title: item.basic_information.title,
          coverUrl: item.basic_information.cover_image,
          year: item.basic_information.year,
          rating: item.basic_information.rating,
          artists: item.basic_information.artists,
        }),
      );

      allCollection = allCollection.concat(collection);

      if (response.data.pagination && response.data.pagination.pages > page) {
        page++;
      } else {
        keepFetching = false;
      }
    }

    return allCollection;
  } catch (error) {
    throw error;
  }
};

export const fetchWanted = async (perPage: number = 10): Promise<Vinyl[]> => {
  let page = 1;
  let allWants: Vinyl[] = [];
  let keepFetching = true;

  try {
    while (keepFetching) {
      const response = await axios.get(
        `https://api.discogs.com/users/${userName}/wants?token=${token}&page=${page}&per_page=${perPage}`,
      );
      const wants = response.data.wants.map(
        (item: {
          id: string;
          basic_information: {
            title: string;
            cover_image: string;
            year: number;
            artists: Artist[];
            rating: number;
          };
        }) => ({
          id: item.id,
          title: item.basic_information.title,
          coverUrl: item.basic_information.cover_image,
          year: item.basic_information.year,
          rating: item.basic_information.rating,
          artists: item.basic_information.artists,
        }),
      );

      allWants = allWants.concat(wants);

      if (response.data.pagination && response.data.pagination.pages > page) {
        page++;
      } else {
        keepFetching = false;
      }
    }

    return allWants;
  } catch (error) {
    throw error;
  }
};

export async function fetchRelease(id: number): Promise<Release | null> {
  try {
    const response = await axios.get(
      `https://api.discogs.com/releases/${id}?token=${token}`,
    );
    return response.data as Release;
  } catch (error) {
    console.log(`Error while fetching release: ${id}: ${error}`);
    return null;
  }
}
