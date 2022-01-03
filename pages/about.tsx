import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Mukur Panchani">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I'm Mukur. I work as a Platform Engineer at{' '}
            <a
              href="https://quantiphi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quantiphi Analytics
            </a>{' '}
            since July 2020. I have a keen interest in software development and
            cloud solutions.
          </p>
          <p>
            I truly believe that cloud computing has lowered the
            barrier-to-entry for any developer worldwide to ship their software
            at any scale and budget. To gain more exposure to how the cloud
            works, I have done certifications on major cloud providers Amazon
            Web Services and Google Cloud Platform. I also like to contribute to
            open source projects on{' '}
            <a
              href="https://github.com/3sne/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{' '}
            in my free time.
          </p>
          <p>
            I was born and brought up in the diamond city of Surat, India. I
            moved to Manipal in 2016 to pursue a Bachelor's degree in Computer
            Science where I met some wonderful friends. I graduated in 2020 and
            have been working as a Platform Engineer since. I love working out,
            running and listening to Trap music.{' '}
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
