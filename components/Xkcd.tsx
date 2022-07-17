import Link from 'next/link';

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

interface XkcdPropDef {
  updateRandomXkcd: Function;
}

export default function Xkcd({ updateRandomXkcd }: XkcdPropDef) {
  const [xkcd, setXkcd] = useState<RandomXKCD>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const imageRef = createRef<HTMLImageElement>();

  const getNewXkcd = async () => {
    if (imageLoading) {
      return;
    }
    setXkcd(null);
    setImageLoading(true);
    const data = await requestXkcd();
    setXkcd(data);
    if (updateRandomXkcd) {
      updateRandomXkcd(data);
    }
  };

  const handleImageLoad = () => {
    if (imageRef.current && imageRef.current.complete) {
      setImageLoading(false);
    }
  };

  useEffect(() => {
    setImageLoading(true);
    const loadXkcd = async () => {
      const data = await requestXkcd();
      setXkcd(data);
      if (updateRandomXkcd) {
        updateRandomXkcd(data);
      }
    };
    loadXkcd();
  }, [updateRandomXkcd]); // Fetch first random XKCD

  return (
    <>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="w-full text-center relative p-1 mb-8 mr-auto rounded-xl bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div className="p-4">
              <div className={`${imageLoading ? 'hidden' : ''}`}>
                <div className="p-2 bg-white drop-shadow-md transition-all rounded-lg">
                  <img
                    ref={imageRef}
                    alt={xkcd?.alt}
                    src={xkcd?.img}
                    width="100%"
                    height="auto"
                    onLoad={handleImageLoad}
                  />
                </div>
                <a
                  href={`https://xkcd.com/${xkcd?.num || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block uppercase font-semibold text-gray-600 dark:text-gray-200 mt-4"
                >
                  {xkcd?.title} <span className="font-light">#{xkcd?.num}</span>
                </a>
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
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 max-w-2xl border-gray-200 dark:border-gray-700 mx-auto">
          <a
            className={`${
              imageLoading
                ? 'cursor-not-allowed bg-gray-300 text-black dark:bg-gray-600 dark:text-white'
                : 'cursor-pointer bg-teal-400 dark:bg-teal-300 text-black'
            } p-2 sm:p-4 w-48 font-bold mx-auto text-center rounded-md`}
            onClick={getNewXkcd}
          >
            New XKCD
          </a>
          <Link href="/">
            <a className="p-2 sm:p-4 w-48 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
