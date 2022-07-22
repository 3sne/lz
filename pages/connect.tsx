import Image from 'next/image';
import Container from 'components/Container';
import { FaMedium, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-0 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <div className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
      {children}
    </div>
  </a>
);

export default function Connect() {
  return (
    <Container title="Connect – Mukur Panchani" description="Reach out to me!">
      <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-16">
        <div className="p-8 text-center bg-white dark:bg-gray-700 text-black dark:text-white drop-shadow-md transition-all rounded-2xl">
          <div className="w-[128px] sm:w-[256px] relative sm:mb-0 mx-auto">
            <Image
              alt="Mukur Panchani"
              height={200}
              width={200}
              src="/avatar.jpg"
              className="rounded-full"
            />
          </div>
          <h1 className="font-bold pt-8 text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Mukur Panchani
          </h1>
          <h2 className="pb-4 text-gray-700 dark:text-gray-200">
            Cloud Platform Engineer at{' '}
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
          <hr className="pb-4" />
          <div className="pb-4">
            <p >
              Outside of work, I also like to engage in interesting side-projects. I am available if you want to collaborate or hire me :)
              If you find anything here interesting and would like to chat, feel
              free to reach out!
            </p>
          </div>
          <div className="flex gap-4 flex-row justify-center">
            <ExternalLink href="mailto:panchanimukur@gmail.com">
              <FaEnvelope size={24} />
            </ExternalLink>
            <ExternalLink href="https://in.linkedin.com/in/mukur-panchani-295803183">
              <FaLinkedin size={24} />
            </ExternalLink>
            <ExternalLink href="https://medium.com/@panchanimukur">
              <FaMedium size={24} />
            </ExternalLink>
            <ExternalLink href="https://github.com/3sne">
              <FaGithub size={24} />
            </ExternalLink>
          </div>
        </div>
      </div>
    </Container>
  );
}
