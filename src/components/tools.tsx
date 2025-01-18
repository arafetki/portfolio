import { cn } from "@/utils/tailwind";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/tooltip";
import { Icons } from "@/components/icons";

type ToolsProps = React.HTMLAttributes<HTMLUListElement>;

const tools = [
    {
        name: "Golang",
        icon: (
            <Icons.golang className="size-6 fill-muted-foreground hover:fill-[#00ADD8]" />
        ),
    },
    {
        name: "Typescript",
        icon: (
            <Icons.typescript className="size-6 fill-muted-foreground hover:fill-[#3178C6]" />
        ),
    },
    {
        name: "Reactjs",
        icon: (
            <Icons.reactjs className="size-6 fill-muted-foreground hover:fill-[#61DAFB]" />
        ),
    },
    {
        name: "Nextjs",
        icon: (
            <Icons.nextjs className="size-6 fill-muted-foreground hover:fill-foreground" />
        ),
    },
    {
        name: "Tailwindcss",
        icon: (
            <Icons.tailwind className="size-6 fill-muted-foreground hover:fill-[#06B6D4]" />
        ),
    },
    {
        name: "Postgresql",
        icon: (
            <Icons.postgres className="size-6 fill-muted-foreground hover:fill-[#4169E1]" />
        ),
    },
    {
        name: "MongoDB",
        icon: (
            <Icons.mongo className="size-6 fill-muted-foreground hover:fill-[#47A248]" />
        ),
    },
    {
        name: "AWS",
        icon: (
            <Icons.aws className="size-6 fill-muted-foreground hover:fill-[#232F3E]" />
        ),
    },
    {
        name: "Cloudflare",
        icon: (
            <Icons.cloudflare className="size-6 fill-muted-foreground hover:fill-[#F38020]" />
        ),
    },
    {
        name: "Vercel",
        icon: (
            <Icons.vercel className="size-6 fill-muted-foreground hover:fill-foreground" />
        ),
    },
    {
        name: "Docker",
        icon: (
            <Icons.docker className="size-6 fill-muted-foreground hover:fill-[#2496ED]" />
        ),
    },
    {
        name: "Kubernetes",
        icon: (
            <Icons.kube className="size-6 fill-muted-foreground hover:fill-[#326CE5]" />
        ),
    },
    {
        name: "Terraform",
        icon: (
            <Icons.terraform className="size-6 fill-muted-foreground hover:fill-[#844FBA]" />
        ),
    },
];

export default function Tools({ className, ...props }: ToolsProps) {
    return (
        <ul
            className={cn("flex items-center flex-wrap gap-2", className)}
            {...props}
        >
            <TooltipProvider>
                {tools.map((tool) => {
                    return (
                        <li key={tool.name}>
                            <Tooltip>
                                <TooltipTrigger>{tool.icon}</TooltipTrigger>
                                <TooltipContent>{tool.name}</TooltipContent>
                            </Tooltip>
                        </li>
                    );
                })}
            </TooltipProvider>
        </ul>
    );
}
