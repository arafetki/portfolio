"use client";

// import { ReactNode, isValidElement } from "react";
// import ClipBoardButton from "@/components/clipboard-button";
import { cn } from "@/lib/utils";

type CodeBlockProps = React.DetailsHTMLAttributes<HTMLPreElement>;

// function extractTextFromNode(node: ReactNode): string {
//   // Base case: if the node is a string, return it.
//   if (typeof node === "string") return node;

//   // Handle numbers or other primitive types that could be direct children.
//   if (typeof node === "number") return node.toString();

//   // Check if the node is an object and has the required properties.
//   if (!isValidElement(node) || !node.props || !node.props.children) {
//     return "";
//   }

//   // Recursively handle child nodes (whether an array or single element).
//   const { children } = node.props;
//   if (Array.isArray(children)) {
//     return children.map(extractTextFromNode).join("");
//   }

//   // Process a single child node if it’s not an array.
//   return extractTextFromNode(children);
// }

export default function CodeBlock({
  children,
  className,
  ...rest
}: CodeBlockProps) {
  // const code = extractTextFromNode(children);
  return (
    <div className="relative my-6 rounded-lg bg-stone-950 dark:bg-stone-800/35">
      <pre
        className={cn(className, "flex overflow-x-auto px-4 py-7")}
        {...rest}
      >
        {children}
      </pre>
      {/* <ClipBoardButton text={code} className="absolute right-1 top-1" /> */}
    </div>
  );
}
