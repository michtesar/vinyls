'use server';

import axios from 'axios';

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

export const fetchWanted = async (
  url: string,
  perPage: number = 10,
): Promise<Vinyl[]> => {
  let page = 1;
  let allWants: Vinyl[] = [];
  let keepFetching = true;

  try {
    while (keepFetching) {
      const response = await axios.get(
        `${url}?token=${token}&page=${page}&per_page=${perPage}`,
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
