"use client";

import { TabsContent } from "@radix-ui/react-tabs";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import tasks from "../data/tasks.json";
import FadeOut from "@/components/fade-out";

export default function TabContentControlRegister() {
  return (
    <>
      <TabsContent value="control-register">
        <FadeOut
          eixo="x"
          initialValueX={24}
          className="space-y-4 p-4 rounded-md bg-zinc-100 dark:bg-zinc-900"
        >
          <div className="h-full flex-1 flex-col space-y-6 p-6 md:flex">
            <DataTable data={tasks} columns={columns} />
          </div>
        </FadeOut>
      </TabsContent>
    </>
  )
};