import { PROFILE } from "@/config";

export default function Footer() {
    return (
        <footer>
            <div className="container p-6 lg:py-10">
                <p className="text-muted-foreground text-pretty tracking-wide">© Copyright {new Date().getFullYear()}. {PROFILE.fullName}</p>
            </div>
        </footer>
    );
}