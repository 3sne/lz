import Link from 'next/link';
import useSWRImmutable from 'swr/immutable';

import Container from 'components/Container';
import LoadingSpinner from 'components/LoadingSpinner';
import { RandomXKCD } from 'lib/types';
import fetcher from 'lib/fetcher';

export default function NotFound() {
  const { data } = useSWRImmutable<RandomXKCD>(`/api/random-xkcd`, fetcher);

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
          You seem to be lost. You could go back... or enjoy a random{' '}
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
        {data?.img ? (
          <div className="w-full text-center relative mb-8 mr-auto">
            <img alt={data?.alt} src={data?.img} width="100%" height="auto" />
            <p className="font-semibold text-gray-600 dark:text-gray-400 mt-4">
              {data?.title}
            </p>
          </div>
        ) : (
          <div className="self-center mb-8">
            <LoadingSpinner />
          </div>
        )}
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
