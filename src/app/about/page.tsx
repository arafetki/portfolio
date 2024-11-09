import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

export default function Page() {
  return (
    <div>
      <div className="box">
        <h1>About Page</h1>
      </div>
    </div>
  );
}
