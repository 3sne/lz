import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import VideoCard from '../components/VideoCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Mukur Panchani
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Platform Engineer at{' '}
              <span className="font-semibold">
                <a
                  href="https://quantiphi.com/"
                  aria-label="Quantiphi"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  Quantiphi
                </a>
              </span>
              <span className="font-light ">, and an avid car enthusiast.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Leveraging expertise in development and cloud technology to
              deliver great solutions! Love all things tech ❤️
            </p>
          </div>
          <div className="w-[128px] sm:w-[256px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Mukur Panchani"
              height={200}
              width={200}
              src="/avatar.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        {/* TODO: Implement when I have atleast a few interesting blog posts :)
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Rust Is The Future of JavaScript Infrastructure"
            slug="rust"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Past, Present, and Future of React State Management"
            slug="react-state-management"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link> */}
      </div>
    </Container>
  );
}
