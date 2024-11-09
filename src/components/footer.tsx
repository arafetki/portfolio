import { PROFILE } from "@/config";
import ToggleThemeButton from "@/components/toggle-theme";

export default function Footer() {
  return (
    <footer>
      <div className="box flex flex-col items-center gap-y-2 md:flex-row md:justify-between">
        <p className="text-pretty text-center tracking-wide text-muted-foreground">
          © Copyright {new Date().getFullYear()}. {PROFILE.fullName}
        </p>
        <ToggleThemeButton />
      </div>
    </footer>
  );
}
