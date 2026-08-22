import { HomePage } from "@/components/HomePage";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What devices support Prime IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prime IPTV works with Smart TV, Android TV, Apple TV, Fire TV, Android, iPhone, iPad, Windows, Mac, MAG Box and compatible TV Box devices.",
      },
    },
    {
      "@type": "Question",
      name: "How long does IPTV activation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Activation begins after your order details are reviewed. You will receive confirmation and setup information through the contact details you provide.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use IPTV while travelling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Access may be possible from supported locations and compatible devices. Contact support before travelling if you need guidance for your setup.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install Prime IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After your order is confirmed, you receive setup instructions adapted to the device selected in your order.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I order an IPTV subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team reviews your information, contacts you to complete the order, and then sends your access and setup details.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Prime IPTV support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the WhatsApp or email options available in the contact section for assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try Prime IPTV before subscribing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can request a free 24-hour trial to test the service on a compatible device before choosing a subscription plan.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <HomePage />
    </>
  );
}