import { Icons } from "@/components/icons";
import Link from "next/link";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: <Icons.github className="size-6 fill-zinc-500 hover:fill-primary" />,
    href: "https://github.com/arafetki",
  },
  {
    name: "LinkedIn",
    icon: (
      <Icons.linkedin className="size-6 fill-zinc-500 hover:fill-primary" />
    ),
    href: "https://www.linkedin.com/in/arafet-ben-kilani",
  },
  {
    name: "Reddit",
    icon: <Icons.reddit className="size-6 fill-zinc-500 hover:fill-primary" />,
    href: "https://www.reddit.com/user/arfoutbenk",
  },
];

export default function Links() {
  return (
    <ul className="flex items-center gap-5">
      {SOCIAL_LINKS.map((item) => {
        return (
          <li key={item.name}>
            <Link href={item.href} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
