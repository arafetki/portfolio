import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1>Blog Page</h1>
    </div>
  );
}
