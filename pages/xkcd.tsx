import Link from 'next/link';

import Container from 'components/Container';
import { useState, useCallback } from 'react';
import { RandomXKCD } from 'lib/types';
import Xkcd from 'components/Xkcd';

export default function whatever() {
  
  const [xkcd, setXkcd] = useState<RandomXKCD>(null);

  const handleXkcdUpdate = useCallback((newXkcd: RandomXKCD) => {
    setXkcd(newXkcd);
  }, []);

  return (
    <Container title="Random xkcd.">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-2 mb-4 text-black dark:text-white">
          xkcd
          {xkcd && (
            <span className="font-light"> #{xkcd.num}</span>
          )}
        </h1>
        <Xkcd updateRandomXkcd={handleXkcdUpdate}/>
      </div>
    </Container>
  );
}
