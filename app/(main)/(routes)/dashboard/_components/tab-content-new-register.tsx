import { Separator } from "@/components/ui/separator"
import { TabsContent } from "@/components/ui/tabs"
import { AccountForm } from "./account-form"
import FadeOut from "@/components/fade-out"

export default function TabContentNewRegister() {
  return (
    <>
      <TabsContent value="new-register">
        <FadeOut
          eixo="y"
          initialValueY={24}
          className="space-y-4 p-4 rounded-md bg-zinc-100 dark:bg-zinc-900"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Novo registro</h3>
              <p className="text-sm text-muted-foreground">
                Update your account settings. Set your preferred language and
                timezone.
              </p>
            </div>

            <Separator />
            <AccountForm />
          </div>
        </FadeOut>
      </TabsContent>
    </>
  )
}