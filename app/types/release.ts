export interface Release {
  id: number;
  status: string;
  year: number;
  resource_url: string;
  uri: string;
  artists: Artist[];
  artists_sort: string;
  labels: Label[];
  companies: Company[];
  formats: Format[];
  data_quality: string;
  community: Community;
  format_quantity: number;
  date_added: string;
  date_changed: string;
  num_for_sale: number;
  lowest_price: number;
  master_id: number;
  master_url: string;
  title: string;
  country: string;
  released: string;
  notes: string;
  released_formatted: string;
  identifiers: Identifier[];
  genres: string[];
  styles: string[];
  tracklist: Track[];
  extraartists: ExtraArtist[];
  images: Image[];
  thumb: string;
}

interface Artist {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
  thumbnail_url: string;
}

interface Label {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  resource_url: string;
  thumbnail_url?: string;
}

interface Company extends Label {
  catno: string;
  entity_type: string;
  entity_type_name: string;
}

interface Format {
  name: string;
  qty: string;
  descriptions: string[];
}

interface Community {
  have: number;
  want: number;
  rating: Rating;
  submitter: User;
  contributors: User[];
  data_quality: string;
  status: string;
}

interface Rating {
  count: number;
  average: number;
}

interface User {
  username: string;
  resource_url: string;
}

interface Identifier {
  type: string;
  value: string;
  description?: string;
}

interface Track {
  position: string;
  type_: string;
  title: string;
  extraartists: ExtraArtist[];
  duration: string;
}

interface ExtraArtist {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
}

interface Image {
  type: string;
  uri: string;
  resource_url: string;
  uri150: string;
  width: number;
  height: number;
}
