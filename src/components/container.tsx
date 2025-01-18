import { cn } from "@/utils/tailwind";
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export default function Container({
    children,
    className,
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn("max-w-7xl mx-auto p-6 lg:p-8", className)}
            {...props}
        >
            {children}
        </div>
    );
}
