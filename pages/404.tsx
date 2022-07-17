import Link from 'next/link';

import Container from 'components/Container';
import { useState, useEffect, createRef } from 'react';
import { RandomXKCD } from 'lib/types';
import Xkcd from 'components/Xkcd';

const requestXkcd = async (): Promise<RandomXKCD> => {
  const res = await fetch('/api/random-xkcd', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
  return await res.json();
};

export default function NotFound() {
  const [xkcd, setXkcd] = useState<RandomXKCD>(null);

  const handleXkcdUpdate = (newXkcd: RandomXKCD) => {
    setXkcd(newXkcd);
  };

  return (
    <Container title="404 – Mukur Panchani">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-2 mb-2 text-black dark:text-white">
          404 😵
        </h1>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          <span className="font-bold">
            {'<'}Insert a generic 404 apology here{'>'}
          </span>
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          You seem to be lost. You could go back... OR enjoy this{' '}
          <a
            href={`https://xkcd.com/${xkcd?.num || ''}`}
            target={'_blank'}
            rel="noopener noreferrer"
            className="underline"
          >
            random xkcd
          </a>
          .
        </p>
        <Xkcd updateRandomXkcd={handleXkcdUpdate} />
      </div>
    </Container>
  );
}
