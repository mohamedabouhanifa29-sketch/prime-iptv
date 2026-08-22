import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free IPTV Trial | Try Prime IPTV for 24 Hours",
  description:
    "Request a free 24-hour IPTV trial and test Prime IPTV on your compatible Smart TV, Fire TV, Android TV, Apple TV, smartphone, tablet or computer.",
  alternates: {
    canonical: "https://www.primeiptvworld.com/iptv-free-trial",
  },
  openGraph: {
    title: "Free IPTV Trial | Prime IPTV",
    description:
      "Try Prime IPTV with a free 24-hour trial on your compatible device.",
    url: "https://www.primeiptvworld.com/iptv-free-trial",
    type: "website",
  },
};

export default function IPTVFreeTrialPage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <section className="container-page py-28 md:py-36">
        <p className="eyebrow">24-Hour Trial</p>

        <h1 className="section-title mt-4 max-w-4xl">
          Free IPTV Trial
          <br />
          <span className="gold-text italic">
            Test Prime IPTV Before Subscribing
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-white/55">
          Request a free 24-hour IPTV trial and test the service on a
          compatible device before choosing your subscription plan.
        </p>

        <div className="mt-12">
          <a href="/#contact" className="btn-primary">
            Request Free Trial
          </a>
        </div>

        <div className="mt-24 max-w-3xl space-y-16">
          <section>
            <h2 className="text-3xl font-bold">
              What is a free IPTV trial?
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              A free IPTV trial gives you temporary access to test the
              service before purchasing a longer subscription. It allows
              you to check compatibility with your device, internet
              connection and viewing setup.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Which devices can I use?
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Prime IPTV can be tested on compatible Smart TVs, Android
              TV, Fire TV, Apple TV, Android phones and tablets, iPhone,
              iPad, Windows, Mac, MAG Box and compatible TV Box devices.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              How does the 24-hour trial work?
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Request your trial using the contact option on our website.
              After your request is reviewed, you will receive the
              information needed to configure the service on your
              compatible device.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              What happens after the trial?
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              If the service meets your needs, you can choose one of our
              available subscription plans based on the access period you
              prefer.
            </p>

            <Link
              href="/iptv-subscription"
              className="mt-6 inline-block font-semibold text-gold hover:underline"
            >
              View IPTV subscription plans →
            </Link>
          </section>
        </div>

        <div className="mt-24 border-t border-white/10 pt-12">
          <h2 className="text-3xl font-bold">
            Ready to test Prime IPTV?
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-white/50">
            Request your free 24-hour trial and test the service on your
            compatible device.
          </p>

          <a href="/#contact" className="btn-primary mt-8 inline-flex">
            Request Free Trial
          </a>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="text-sm text-white/45 transition hover:text-gold"
          >
            ← Back to Prime IPTV
          </Link>
        </div>
      </section>
    </main>
  );
}