// TODO
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

export default function Home() {
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
    };
    loadXkcd();
  }, []); // Fetch first random XKCD

  return (
    <Container title="Coming Soon...">
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mt-2 mb-8 text-black dark:text-white">
          mukur.dev is under construction 🏗️
        </h1>
        {/* <p className="text-gray-700 dark:text-gray-200 mb-4">
          <span className="font-bold">
            {'<'}Insert a generic 404 apology here{'>'}
          </span>
        </p> */}
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This website is intended to be my little corner on the web. I am
          working on customizing a static Next.js (and learning along the way)
          site based on{' '}
          <a
            href={`https://leerob.io/`}
            target={'_blank'}
            rel="noopener noreferrer"
            className="underline"
          >
            Lee Robinson's
          </a>{' '}
          portfolio website as the codebase (Thanks Lee!). You can check the
          current progress on the GitHub{' '}
          <a
            href={`https://github.com/3sne/lz`}
            target={'_blank'}
            rel="noopener noreferrer"
            className="underline"
          >
            repo
          </a>
          .
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Meanwhile, enjoy this{' '}
          <a
            href={`https://xkcd.com/${xkcd?.num || ''}`}
            target={'_blank'}
            rel="noopener noreferrer"
            className="underline"
          >
            random XKCD
          </a>{' '}
          instead :)
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">- Mukur</p>
        <div className="w-full text-center relative mb-4 mr-auto rounded-xl">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div className="p-4">
              <div className={`${imageLoading ? 'hidden' : ''}`}>
                <a
                  href={`https://xkcd.com/${xkcd?.num || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block uppercase font-semibold text-gray-600 dark:text-gray-200 mb-2"
                >
                  {xkcd?.title} <span className="font-light">#{xkcd?.num}</span>
                </a>
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
              </div>
              {imageLoading && (
                <div className="w-full self-center">
                  <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                    <div className="w-full flex flex-col items-center space-y-3">
                      {/* <div className="w-32 bg-gray-300 h-6 rounded-md "></div> */}
                      <div className="w-full bg-gray-300 h-60 rounded-md "></div>
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
              imageLoading ? 'cursor-not-allowed' : 'cursor-pointer'
            } p-2 sm:p-4 w-48 font-bold mx-auto text-center rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white`}
            onClick={getNewXkcd}
          >
            New XKCD
          </a>
        </div>
      </div>
    </Container>
  );
}
