import React from 'react';
import Image from 'next/image';
import { SearchDataResults } from '../interfaces';

export default function GameCard({ result }: { result: SearchDataResults }) {

  // console.log(result.platforms)

  if (result.rating !== 0) {
    return (
      <article
        className="w-full lg:w-2/3 px-5 py-10 grid grid-rows-6 bg-gray-900 rounded-md transition-colors hover:bg-gray-800 ease-in"
        data-id={result.id}
      >
        {/* Ray: can turn into component... */}
        {result.background_image ? (
          <figure
            style={{
              backgroundImage: `url(${result.background_image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
            }}
            className="row-span-4"
          ></figure>
        ) : (
          <></>
        )}
        <div className="text-center py-5 row-span-2">
          <h3 className="text-xl">{result.name}</h3>
          <small>{result.released}</small>
          <h4 className="text-lg flex justify-center">
            {result.rating} / 5
            <Image src="./star.svg" height={20} width={20} alt="star outline" />
          </h4>
          <p>
            {result.platforms.map((item) => {
              const { platform } = item
              return (
              <small key={platform.id}>
                {platform.name}{' '}
              </small>
            );})}
          </p>
        </div>
      </article>
    );
  }
}
