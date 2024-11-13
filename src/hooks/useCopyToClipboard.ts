import { useEffect, useState, useCallback } from "react";

export function useCopyToClipboard(resetInterval: number | null = null) {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = useCallback(async (text: string): Promise<void> => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      console.warn("Copy failed", error);
      setCopied(false);
    }
  }, []);

  useEffect(() => {
    if (isCopied && resetInterval) {
      const timeout = setTimeout(() => setCopied(false), resetInterval);
      return () => clearTimeout(timeout);
    }
  }, [isCopied, resetInterval]);

  return { isCopied, handleCopy };
}
