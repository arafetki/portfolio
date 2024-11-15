import React from "react";
import { env } from "@/env";
import {
  Turnstile,
  TurnstileProps,
  TurnstileInstance,
} from "@marsidev/react-turnstile";

type CaptchaWidgetProps = Omit<TurnstileProps, "siteKey">;

const CaptchaWidget = React.forwardRef<
  TurnstileInstance | null,
  CaptchaWidgetProps
>((props, ref) => {
  return (
    <Turnstile
      ref={ref}
      siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
      {...props}
    />
  );
});

// Optional: Add a display name for better debugging
CaptchaWidget.displayName = "CaptchaWidget";

export default CaptchaWidget;
