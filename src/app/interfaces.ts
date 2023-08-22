// Ray: TypeScript stuff, define searchData and results types
export interface SearchData {
  count: number;
  next: string;
  previous: string;
  results: Array<SearchDataResults>;
};

export interface SearchDataResults {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: object;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: object;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: object;
  platforms: Array<Platforms>;
};

export interface Platforms {
  platform: {
    id: number,
    slug: string,
    name: string
  }
};