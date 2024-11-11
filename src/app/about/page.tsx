import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

export default function Page() {
  return (
    <div>
      <div className="my-container">
        <h1>About Page</h1>
      </div>
    </div>
  );
}
