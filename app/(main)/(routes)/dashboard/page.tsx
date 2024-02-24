"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "./_components/header";
import TabContentControlRegister from "./_components/tab-content-control-register";
import TabContentOverview from "./_components/tab-content-overview";
import TabContentNewRegister from "./_components/tab-content-new-register";
import { LayoutDashboard, ListTodo, PlusCircle } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// };

export default function DashboardPage() {
  return (
    <>
      <Header />

      <main className="flex-col md:flex">
        <div className="relative flex-1 space-y-4 p-8 pt-6 mt-16">
          <div className="absolute w-full h-[300px] bg-[url('/bg-waves.svg')] bg-no-repeat bg-cover bg-blend-soft-light bg-orange-600 -top-20 left-0 -z-10" />

          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="hidden md:inline-block">
              <TabsTrigger value="overview">
                Resumo
              </TabsTrigger>
              <TabsTrigger value="control-register">
                Controle de registro
              </TabsTrigger>
              <TabsTrigger value="new-register">
                Novo registro
              </TabsTrigger>
            </TabsList>

            <div className="fixed md:hidden bottom-0 left-0 z-10 w-full flex items-center justify-center p-4">
              <TabsList className="w-full bg-orange-600 p-8 flex items-center justify-evenly text-slate-100 shadow-md">
                <TabsTrigger className="bg-none" value="overview">
                  <LayoutDashboard />
                </TabsTrigger>
                <TabsTrigger value="control-register">
                  <ListTodo />
                </TabsTrigger>
                <TabsTrigger value="new-register">
                  <PlusCircle />
                </TabsTrigger>
              </TabsList>
            </div>

            <TabContentOverview />
            <TabContentControlRegister />
            <TabContentNewRegister />

            <div className="h-[70px] md:h-0" />
          </Tabs>
        </div>
      </main>
    </>
  )
}
