import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "./_components/user-auth-form"
import { Wallet } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <main className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="absolute right-4 top-4 md:right-8 md:top-8 flex items-center gap-4">
          <Link
            href="/authentication"
            className={cn(
              buttonVariants({ variant: "ghost" })
            )}
          >
            Login
          </Link>
          
          <ModeToggle />
        </div>

        <div className="relative hidden h-[95%] flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 w-full h-full bg-[url('/bg-auth.svg')] bg-no-repeat bg-cover bg-blend-overlay bg-orange-600 rounded-r-md" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Wallet className="mr-4" />
            gWallet
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2 p-4 rounded-md backdrop-blur-md border border-background/5">
              <p className="text-lg">
                &ldquo;gWallet e o sistema perfeito para quem procura organizar suas despesas ou para quem procura se programar em conjunto para atingir suas metas. Fica aqui, minha recomendacao.&rdquo;
              </p>
              <footer className="text-sm">Guilherme Mota</footer>
            </blockquote>
          </div>
        </div>

        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Crie uma conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Digite seu email para criar sua conta
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </main>
    </>
  )
}
