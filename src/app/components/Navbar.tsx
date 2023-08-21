import { Dispatch, SetStateAction } from 'react';
import Searchbar from './Searchbar';
import Image from 'next/image';

export default function Navbar({
  setSearchQuery,
}: {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
  return (
    <nav className="bg-stone-950 p-5 grid grid-cols-3">
      <h1>Game Searcher</h1>
      <Searchbar setSearchQuery={setSearchQuery} />
      <div className="userIcon flex justify-end">
        <Image
          src="/profile_pic.svg"
          width="24"
          height="24"
          alt="profile picture icon"
        />
      </div>
    </nav>
  );
}
