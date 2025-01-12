import { cn } from "@/lib/utils";

interface ProptipProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  description: string;
}

export default function Protip({
  title,
  description,
  className,
  ...rest
}: ProptipProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-4 rounded-md bg-primary/10 hover:bg-primary/20 dark:bg-secondary/40 dark:hover:bg-secondary/60",
        className,
      )}
      {...rest}
    >
      {title && <p className="m-0 text-lg font-semibold">{title}</p>}
      <p className="my-2 text-pretty text-sm text-popover-foreground md:text-base">
        {description}
      </p>
    </div>
  );
}
