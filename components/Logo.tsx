import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "navbar" }: { variant?: "navbar" | "footer" }) {
  const footer = variant === "footer";

  return (
    <Link
      href="/#home"
      className={`logo-image group relative inline-flex shrink-0 items-center ${footer ? "w-[150px] sm:w-[170px]" : "w-[76px] sm:w-[92px] xl:w-[108px]"}`}
      aria-label="Prime IPTV home"
    >
      <Image
        src="/images/prime-iptv-logo.png"
        alt="Prime IPTV"
        width={1536}
        height={1024}
        loading={footer ? "lazy" : "eager"}
        sizes={footer ? "(max-width: 640px) 150px, 170px" : "(max-width: 640px) 76px, (max-width: 1280px) 92px, 108px"}
        className="h-auto w-full object-contain"
      />
    </Link>
  );
}
