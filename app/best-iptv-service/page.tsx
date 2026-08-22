import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best IPTV Service | What to Look For in an IPTV Provider",
  description:
    "Learn what makes a reliable IPTV service: device compatibility, streaming quality, activation speed, support and flexible subscription options.",
  alternates: {
    canonical: "https://www.primeiptvworld.com/best-iptv-service",
  },
  openGraph: {
    title: "Best IPTV Service | Prime IPTV",
    description:
      "Discover the main features to consider when choosing an IPTV service.",
    url: "https://www.primeiptvworld.com/best-iptv-service",
    type: "website",
  },
};

export default function BestIPTVServicePage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <section className="container-page py-28 md:py-36">
        <p className="eyebrow">IPTV Guide</p>

        <h1 className="section-title mt-4 max-w-4xl">
          Best IPTV Service
          <br />
          <span className="gold-text italic">
            What Should You Look For?
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/55">
          Choosing an IPTV service is not only about price. Device
          compatibility, streaming stability, support, activation speed and
          flexible subscription options can all affect your experience.
        </p>

        <div className="mt-24 max-w-3xl space-y-16">
          <section>
            <h2 className="text-3xl font-bold">
              Device compatibility
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              A useful IPTV service should support the devices you already use.
              This may include Smart TV, Android TV, Fire TV, Apple TV, Android,
              iPhone, iPad, Windows, Mac, MAG Box and compatible TV Box devices.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Streaming quality and stability
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Streaming quality depends on both the service and your internet
              connection. A stable connection and a compatible device are
              important for smooth playback, especially for HD and higher
              quality streams.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Fast activation
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Clear activation instructions help reduce setup problems.
              After your order is confirmed, you should receive the information
              needed to configure the service on your selected device.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Flexible IPTV subscription plans
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Different users have different needs. Flexible subscription
              periods make it easier to choose an option that matches how long
              you want to use the service.
            </p>

            <Link
              href="/iptv-subscription"
              className="mt-6 inline-block font-semibold text-gold hover:underline"
            >
              View IPTV subscription plans →
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Trial before subscribing
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              A trial can help you check compatibility with your device and
              internet connection before choosing a longer subscription.
            </p>

            <Link
              href="/iptv-free-trial"
              className="mt-6 inline-block font-semibold text-gold hover:underline"
            >
              Learn about the free IPTV trial →
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Customer support
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Support is useful when you need help with setup, device
              compatibility or general service questions. Clear contact
              options make the overall experience easier.
            </p>
          </section>
        </div>

        <div className="mt-24 flex flex-wrap gap-4 border-t border-white/10 pt-12">
          <Link href="/iptv-subscription" className="btn-primary">
            View IPTV Plans
          </Link>

          <Link href="/iptv-free-trial" className="btn-secondary">
            Try Free for 24 Hours
          </Link>
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