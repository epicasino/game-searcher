'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';

export default function Searchbar({
  setSearchQuery,
}: {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userQuery = query.split(' ').join('%20');
    setSearchQuery(userQuery);
  };

  const [query, setQuery] = useState('');

  return (
    <form
      className="searchBar flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for Games"
        className="text-black w-full px-3"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className=" bg-white">
        <Image
          src="/magnify_glass.svg"
          width="24"
          height="24"
          alt="magnifying glass"
        />
      </button>
    </form>
  );
}
