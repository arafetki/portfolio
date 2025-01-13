import { useEffect, useState } from "react";

export function useScrollVisible(position: number) {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > position) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisible);
  }, [setVisible, position]);

  return visible;
}
