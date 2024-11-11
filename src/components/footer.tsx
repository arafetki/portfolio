import { PROFILE } from "@/config";
import ToggleThemeButton from "@/components/toggle-theme";
import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";
import Links from "@/components/links";
import { Icons } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-zinc-200 dark:bg-zinc-900">
      <div className="my-container px-6 py-8">
        <section className="flex flex-col gap-y-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2 text-pretty text-sm">
            <p className="font-semibold">Subscribe to my newsletter</p>
            <p className="text-muted-foreground">
              Get a recap of the latest news, articles, videos and resources,
              sent to your inbox.
            </p>
          </div>
          <NewsletterForm />
        </section>
        <section className="flex flex-col-reverse gap-y-6 border-t border-zinc-400 pt-8 dark:border-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-pretty text-sm tracking-wide text-muted-foreground">
            <p>
              © Copyright {new Date().getFullYear()}. {PROFILE.fullName}
            </p>
            <p>
              Code snippets are{" "}
              <Link
                href="https://opensource.org/license/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-foreground"
              >
                MIT licensed
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <Links />
            <Link href="/rss.xml" target="_blank">
              <Icons.feed
                strokeWidth={3}
                className="size-6 text-zinc-500 hover:text-primary"
              />
            </Link>
            <ToggleThemeButton />
          </div>
        </section>
      </div>
    </footer>
  );
}
