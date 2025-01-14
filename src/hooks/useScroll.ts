import { useCallback } from "react";

type ScrollOpts = {
  top: number;
  behavior: ScrollBehavior;
};

export function useScroll(opts?: ScrollOpts) {
  const top = opts?.top ?? 0;
  const behavior = opts?.behavior ?? "smooth";

  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: top,
      behavior: behavior,
    });
  }, [top, behavior]);

  return handleScroll;
}
