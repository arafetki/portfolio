import { cn } from "@/lib/utils";

interface BarProps extends React.HTMLProps<HTMLDivElement> {
    orientation?: "horizantal" | "vertical"
    height?: number
    width?: number
}

export default function Bar({orientation = "horizantal", height = 6, width= 64, className, ...rest}:BarProps) {
    return (
        <div 
            style={ orientation == "horizantal" ? {height: height, width: width} : {height: width, width: height}} 
            className= {cn("inline-block bg-gradient-to-r from-red-500 to-primary",className)}
            {...rest}
        />
    );
}