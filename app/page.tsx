import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex">
        <Button>
          <Link href="/authentication">
            Auth
          </Link>
        </Button>

        <Button className="ml-auto">
          <Link href="/dashboard">
            Dashboard
          </Link>
        </Button>
      </div>
    </main>
  );
}
