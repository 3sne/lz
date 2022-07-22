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
            Hey 👋 I'm Mukur. I work as a Cloud Platform Engineer at{' '}
            <a
              href="https://quantiphi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quantiphi Analytics
            </a>{' '}
            . I have a keen interest in software engineering and cloud
            solutions.
          </p>
          <p>
            I truly believe that cloud computing has lowered the
            barrier-to-entry for any developer worldwide to ship their software
            at any scale and budget. I have 2+ years of experience working on
            Amazon Web Services and Google Cloud Platform; designing and
            managing production cloud deployments for a varied list of
            customers, where I have performed DevOps automations, written
            scalable & maintainable IaC, worked with popular tools like Docker,
            Kubernetes, Terraform, etc and witnessed the power of cloud
            first-hand.
          </p>
          <p>
            I enjoy learning and figuring things out by tinkering with them. I
            am a certified AWS Solutions Architect Associate, GCP Associate
            Cloud Engineer and Hashicorp Certified: Terraform Associate. I am
            currently working on becoming a Certified Kubernetes Application
            Developer to solidify my Kubernetes foundation.
          </p>
          <p>
            I was born in the diamond city of Surat and grew up in the
            industrial town of Vapi. I achieved my Bachelor's degree in Computer
            Science from Manipal Institute of Technology, Manipal where I met
            some wonderful people and lifelong friends. I graduated in 2020 (a
            couple months into COVID lockdowns; it was a unique experience to
            say the least). I love working out, running, listening to music, and
            going on unplanned road-trips.{' '}
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
