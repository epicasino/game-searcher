import Searchbar from './Searchbar';
import Image from 'next/image';

export default async function Navbar() {
  return (
    <nav className="bg-stone-950 p-5 grid grid-cols-3">
      <h1>Game Searcher</h1>
      <Searchbar />
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
