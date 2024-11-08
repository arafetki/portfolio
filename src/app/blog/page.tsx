import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog"
};

export default function Blog() {
    return (
        <div>
            <div className="max-w-7xl mx-auto p-6 lg:py-10">
                <h1>Blog Page</h1>
            </div>
        </div>
    );
}