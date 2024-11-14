import { useCallback } from "react";

type ScrollTopOpts = {
  behavior: ScrollBehavior;
};

export function useScrollTop(opts?: ScrollTopOpts) {
  const behavior = opts?.behavior ?? "smooth";

  const handleScrollUp = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: behavior,
    });
  }, [behavior]);

  return handleScrollUp;
}
