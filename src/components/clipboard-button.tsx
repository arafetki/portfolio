import { Button, ButtonProps } from "@/components/ui/button";
import { Icons } from "./icons";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils";

interface ClipBoardButtonProps extends ButtonProps {
  text: string;
  Icon?: React.ElementType;
  CheckIcon?: React.ElementType;
}

export default function ClipBoardButton({
  text,
  Icon = Icons.clipboard,
  CheckIcon = Icons.clipboardCheck,
  className,
  ...rest
}: ClipBoardButtonProps) {
  const { isCopied, handleCopy } = useCopyToClipboard(3000);
  return (
    <div className={cn(className, { "flex items-center gap-x-1": isCopied })}>
      {isCopied ? (
        <span className="text-xs text-muted-foreground">Copied!</span>
      ) : null}
      <Button
        onClick={() => handleCopy(text)}
        aria-label={isCopied ? "Copied" : "Copy"}
        size="icon"
        variant="ghost"
        disabled={isCopied}
        className={cn("bg-stone-800/95 hover:bg-stone-700")}
        {...rest}
      >
        {isCopied ? (
          <CheckIcon className="!size-4 text-white" />
        ) : (
          <Icon className="!size-4 text-white" />
        )}
      </Button>
    </div>
  );
}
