import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans | Prime IPTV",

  description:
    "Explore Prime IPTV subscription plans for live TV, movies, series and sports across compatible Smart TV, Fire TV, Android, Apple and mobile devices.",

  alternates: {
    canonical: "https://www.primeiptvworld.com/iptv-subscription",
  },

  openGraph: {
    title: "IPTV Subscription Plans | Prime IPTV",
    description:
      "Explore flexible IPTV subscription plans and compatible devices with Prime IPTV.",
    url: "https://www.primeiptvworld.com/iptv-subscription",
    type: "website",
  },
};

export default function IPTVSubscriptionPage() {
  return (
    <main className="min-h-screen bg-[#070806] text-white">
      <div className="container-page py-24">

        <p className="eyebrow">Prime IPTV</p>

        <h1 className="section-title mt-4 max-w-4xl">
          IPTV Subscription Plans
          <br />
          <span className="gold-text italic">
            for Your Favorite Devices
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
          Prime IPTV offers flexible subscription options designed for
          compatible TVs, streaming devices, smartphones, tablets and
          computers. Choose the plan that fits your needs and receive setup
          instructions for your selected device after your order is confirmed.
        </p>

        <section className="mt-20">
          <h2 className="text-3xl font-bold">
            What is an IPTV subscription?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/60">
            An IPTV subscription delivers television and streaming content
            through an internet connection instead of a traditional satellite
            or cable connection. A compatible device and a stable internet
            connection are required for the best viewing experience.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Compatible devices
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/60">
            Prime IPTV can be configured on compatible Smart TVs, Android TV,
            Fire TV, Apple TV, Android phones and tablets, iPhone, iPad,
            Windows, Mac, MAG Box and other compatible TV Box devices.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Flexible subscription periods
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/60">
            Different subscription periods are available so you can select
            an option based on how long you want to use the service. Visit
            the plans section on the main page to see the currently available
            options.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Try before choosing a plan
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/60">
            A free 24-hour trial can be requested before choosing a
            subscription. This allows you to test the service on a compatible
            device and check your setup.
          </p>
        </section>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link href="/#plans" className="btn-primary">
            View IPTV Plans
          </Link>

          <Link href="/#faq" className="btn-secondary">
            Read FAQ
          </Link>
        </div>

      </div>
    </main>
  );
}