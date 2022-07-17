import Container from 'components/Container';
import { useState, useCallback } from 'react';
import { RandomXKCD } from 'lib/types';
import Xkcd from 'components/Xkcd';

export default function Whatever() {
  return (
    <Container title="Random xkcd.">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-2 mb-4 text-black dark:text-white">
          Random xkcd.
        </h1>
        <Xkcd />
      </div>
    </Container>
  );
}
