import Image from "next/image";

interface SocialIconProps {
  href: string;
  icon: string;
  alt: string;
}

export function SocialIcon({ href, icon, alt }: SocialIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        aria-hidden
        src={icon}
        alt={alt}
        width={24}
        height={24}
        className="invert"
      />
    </a>
  );
}