import pack from "../../package.json";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex items-center justify-center py-4">
      <p className="text-xs text-muted-foreground">
        Made with <Heart className="inline w-3 h-3 text-red-500 fill-red-500" /> by{" "}
        <a href="https://github.com/rblinde" target="_blank" className="font-medium">
          rblinde
        </a>
        . Version {pack.version}.
      </p>
    </footer>
  );
}
