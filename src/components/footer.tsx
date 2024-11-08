import { PROFILE } from "@/config";
import ToggleThemeButton from "@/components/toggle-theme";

export default function Footer() {
    return (
        <footer>
            <div className="max-w-7xl mx-auto p-6 lg:py-10 flex flex-col items-center gap-y-2 md:flex-row md:justify-between">
                <p className="text-muted-foreground text-pretty text-center tracking-wide">© Copyright {new Date().getFullYear()}. {PROFILE.fullName}</p>
                <ToggleThemeButton/>
            </div>
        </footer>
    );
}