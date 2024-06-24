"use client";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/css-utils";
import { Cog, FolderOpenDot, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="bg-muted flex flex-col items-center justify-between rounded-lg border-2 p-1 shadow-md">
      {/* Top section */}
      <div className="flex flex-col items-center gap-3">
        {/* Home */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            pathname === "/dashboard" ? "bg-muted-foreground" : "",
            "hover:bg-muted-foreground"
          )}
        >
          <Link href={"/dashboard"}>
            <Home />
          </Link>
        </Button>
        {/* Projects */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            pathname === "/dashboard/projects" ? "bg-muted-foreground" : "",
            "hover:bg-muted-foreground"
          )}
        >
          <Link href="/dashboard/projects">
            <FolderOpenDot />
          </Link>
        </Button>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-3">
        <DarkModeToggle />
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            pathname === "/dashboard/settings" ? "bg-muted-foreground" : ""
          )}
        >
          <Link href="/dashboard/settings">
            <Cog />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
