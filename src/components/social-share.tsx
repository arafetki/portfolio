"use client";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const links = [
  {
    icon: Icons.twitter,
    tag: TwitterShareButton,
  },
  {
    icon: Icons.facebook,
    tag: FacebookShareButton,
  },
  {
    icon: Icons.linkedin,
    tag: LinkedinShareButton,
  },
  {
    icon: Icons.reddit,
    tag: RedditShareButton,
  },
];

type SocialShareProps = {
  className?: string;
  slug: string;
  title: string;
  withTopBorder?: boolean;
};

export default function SocialShare({
  className,
  slug,
  title,
  withTopBorder = false,
}: SocialShareProps) {
  return (
    <div
      className={cn("safe-paddings flex items-end gap-x-3", className, {
        "border-t border-muted-foreground pt-6": withTopBorder,
      })}
    >
      <span className="font-medium uppercase leading-none text-muted-foreground">
        Share:
      </span>
      <div className="flex shrink-0 gap-x-3">
        {links.map(({ icon: Icon, tag: Tag }, index) => (
          <Tag
            className="group"
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`}
            title={title}
            key={index}
          >
            <Icon className="size-[18px] fill-muted-foreground transition-colors duration-200 group-hover:fill-primary" />
          </Tag>
        ))}
      </div>
    </div>
  );
}
