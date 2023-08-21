'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';

// Ray: TypeScript stuff, define searchData and results types
import { SearchData } from './interfaces';

export default function Home() {
  // Ray: useState hook to set and update formatted search query from searchbar component in navbar component
  const [searchQuery, setSearchQuery] = useState('');

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
        <div className="grid grid-cols-3">
          {/* Ray: searchData.results is an array of objects, map over each item in array */}
          {searchData.results.map((result) => (
            <article key={result.id.toString()}>
              {/* Ray: can turn into component... */}
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
