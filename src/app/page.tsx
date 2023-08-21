'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';

type SearchData = {
  count: number;
  next: string;
  previous: string;
  results: Array<SearchDataResults>;
};

type SearchDataResults = {
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
  platforms: Array<object>;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState<SearchData | null>(null);

  if (searchQuery) {
    setSearchData(null);
    const searchApiCall = async () => {
      const res = await fetch(`/api/search`, {
        method: 'POST',
        body: JSON.stringify({ query: searchQuery }),
      });
      const data = await res.json();

      console.log(data);
      setSearchData(data);
    };
    searchApiCall();
    setSearchQuery('');
  }

  return (
    <main>
      <Navbar setSearchQuery={setSearchQuery} />
      {searchData?.results ? (
        <div className="grid grid-cols-3">
          {searchData.results.map((result) => (
            <article key={result.id.toString()}>
              <h1>{result.name}</h1>
              {result.background_image ? (
                <Image
                  src={result.background_image}
                  alt={result.name + 'background image'}
                  width="100"
                  height="100"
                />
              ) : (
                <></>
              )}
            </article>
          ))}
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}
