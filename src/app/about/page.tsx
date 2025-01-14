import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="mx-auto max-w-7xl p-8">
      <h1>About Page</h1>
    </div>
  );
}
