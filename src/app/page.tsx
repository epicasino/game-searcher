'use client';

import { useState } from 'react';

import Navbar from './components/Navbar';
import GameCard from './components/GameCard';

// Ray: TypeScript stuff, define searchData and results types
import { SearchData } from './interfaces';

export default function Home() {
  // Ray: useState hook to set and update formatted search query from searchbar component in navbar component
  const [searchQuery, setSearchQuery] = useState('');
  const [userSearch, setUserSearch] = useState('');

  // Ray: useState hook to set and update search data from api call
  const [searchData, setSearchData] = useState<SearchData | null>(null);

  // Ray: If searchQuery isnt empty, run api call function
  if (searchQuery) {
    // Ray: Reset searchData state to remove past search results
    setSearchData(null);

    // Ray: Runs post fetch request from api/search
    const searchApiCall = async () => {
      const res = await fetch(`/api/search`, {
        method: 'POST',
        body: JSON.stringify({ query: searchQuery }),
      });
      const data = await res.json();

      // console.log(data);
      // Ray: If all goes well, set searchData state to api result data
      setSearchData(data);
    };
    setUserSearch(searchQuery.split('%20').join(' '));
    searchApiCall();

    // Ray: Reset searchQuery state to avoid infinite loop
    setSearchQuery('');
  }

  return (
    <main>
      {/* Ray: Pass down setSearchQuery state to Navbar component */}
      <Navbar setSearchQuery={setSearchQuery} />

      {/* Ray: User's search results, conditional rendering */}
      {searchData?.results ? (
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-5 h-screen justify-items-center">
          <h1 className="col-span-full text-4xl">
            Search Result For: {userSearch}
          </h1>
          {/* Ray: searchData.results is an array of objects, map over each item in array */}
          {searchData.results.map((result) => (
            <GameCard key={result.id} result={result} />
          ))}
        </section>
      ) : (
        <></>
      )}
    </main>
  );
}
