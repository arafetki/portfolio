import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me"
};

export default function Page() {
    return (
        <div>
            <div className="max-w-7xl mx-auto p-6 lg:py-10">
                <h1>Contact Page</h1>
            </div>
        </div>
    );
}