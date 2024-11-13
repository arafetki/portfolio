import Link from "next/link";

export default function Tags({ topics }: { topics: string[] }) {
  return (
    <ul className="flex items-center gap-x-2">
      {topics.map((topic, idx) => {
        return (
          <li key={topic + idx} className="font-medium hover:text-primary">
            <Link
              href={`/blog/topics/${topic.toLowerCase()}`}
            >{`#${topic.toLowerCase()}`}</Link>
          </li>
        );
      })}
    </ul>
  );
}
