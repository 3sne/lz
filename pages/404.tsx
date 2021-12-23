import Link from 'next/link';

import Container from 'components/Container';
import { useState, useEffect, createRef } from 'react';
import { RandomXKCD } from 'lib/types';

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
  const [xkcd, setXkcd] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const imageRef = createRef<HTMLImageElement>();

  const getNewXkcd = async () => {
    setXkcd(null);
    setImageLoading(true);
    const data = await requestXkcd();
    setXkcd(data);
  };

  const handleImageLoad = () => {
    console.log('called?');
    console.log(imageLoading);
    if (imageRef.current && imageRef.current.complete) {
      setImageLoading(false);
    }
  };

  useEffect(() => {
    setImageLoading(true);
    const loadXkcd = async () => {
      const data = await requestXkcd();
      setXkcd(data);
    };
    loadXkcd();
  }, []); // Fetch first random XKCD

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
          You seem to be lost. You could go back... or enjoy this random{' '}
          <a
            href="https://xkcd.com/"
            target={'_blank'}
            rel="noopener noreferrer"
            className="underline"
          >
            xkcd
          </a>
          .
        </p>
        <div className="w-full text-center relative mb-8 mr-auto border-dashed border-2 p-4 border-gray-700 dark:border-gray-200">
          <div className={`${imageLoading ? 'hidden' : ''}`}>
            <img
              ref={imageRef}
              alt={xkcd?.alt}
              src={xkcd?.img}
              width="100%"
              height="auto"
              onLoad={handleImageLoad}
            />
            <p className="font-semibold text-gray-600 dark:text-gray-200 mt-4">
              {xkcd?.title}
            </p>
          </div>
          {imageLoading && (
            <div className="w-full self-center">
              <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                <div className="w-full flex flex-col items-center space-y-3">
                  <div className="w-full bg-gray-300 h-60 rounded-md "></div>
                  <div className="w-32 bg-gray-300 h-6 rounded-md "></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl border-gray-200 dark:border-gray-700 mx-auto">
          <a
            className="p-2 sm:p-4 w-48 cursor-pointer font-bold mx-auto bg-teal-300 dark:bg-teal-800 text-center rounded-md text-black dark:text-white"
            onClick={getNewXkcd}
          >
            New XKCD
          </a>
          <Link href="/">
            <a className="p-1 sm:p-4 w-48 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
