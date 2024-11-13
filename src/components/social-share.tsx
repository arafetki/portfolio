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
  url: string;
  title: string;
  withTopBorder?: boolean;
};

export default function SocialShare({
  className,
  url,
  title,
  withTopBorder = false,
}: SocialShareProps) {
  return (
    <div
      className={cn(
        "safe-paddings flex items-center justify-between lg:justify-start lg:gap-x-5",
        className,
        {
          "border-t border-muted-foreground pt-6": withTopBorder,
        }
      )}
    >
      <span className="text-lg leading-none text-muted-foreground">Share:</span>
      <div className="flex shrink-0 gap-x-4">
        {links.map(({ icon: Icon, tag: Tag }, index) => (
          <Tag className="group" url={url} title={title} key={index}>
            <Icon className="size-5 fill-zinc-500 transition-colors duration-200 group-hover:fill-primary" />
          </Tag>
        ))}
      </div>
    </div>
  );
}
