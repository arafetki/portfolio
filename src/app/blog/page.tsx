import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog"
};

export default function Blog() {
    return (
        <div className="container p-6 lg:py-10">
            <h1>Blog Page</h1>
        </div>
    );
}