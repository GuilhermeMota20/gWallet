"use client";

import { useScrollTop } from "@/app/services/hooks/use-scrolled-top";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import TeamSwitcher from "./team-switcher";
import { UserNav } from "./user-nav";

export default function Header() {
  const scrolled = useScrollTop();

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 w-full space-y-4 p-4 px-8 z-10",
        scrolled && "shadow-md backdrop-blur-md bg-slate-100/75 dark:bg-slate-800/75"
      )}>
        <div className="w-full flex items-center justify-between">
          <TeamSwitcher />

          <div className="flex items-center gap-4">
            <ModeToggle variant="secondary" />
            <UserNav />
          </div>
        </div>
      </header>
    </>
  )
}