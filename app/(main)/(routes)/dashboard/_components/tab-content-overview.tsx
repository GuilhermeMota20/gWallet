import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { ArrowDown, BadgePercent, CircleDollarSign } from "lucide-react";
import CardResume from "./card-resume";
import { Overview } from "./overview";
import { RecentSales } from "./recent-sales";
import { motion } from 'framer-motion';
import FadeOut from "@/components/fade-out";

export default function TabContentOverview() {
  return (
    <>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FadeOut
            eixo="x"
            initialValueX={24}
          >
            <CardResume
              title="Entrada"
              icon={<ArrowDown className="text-muted-foreground w-4 h-4 rotate-180" />}
              value="R$ 12,000.00"
              description=""
            />
          </FadeOut>

          <FadeOut
            eixo="y"
            initialValueY={24}
          >
            <CardResume
              title="Saida"
              icon={<ArrowDown className="text-muted-foreground w-4 h-4" />}
              value="R$ -12,000.00"
              description=""
            />
          </FadeOut>

          <FadeOut
            eixo="y"
            initialValueY={24}
          >
            <CardResume
              title="Total"
              icon={<CircleDollarSign className="h-4 w-4 text-muted-foreground" />}
              value="R$ 00,00"
              description=""
            />
          </FadeOut>

          <FadeOut
            eixo="x"
            initialValueX={24}
          >
            <CardResume
              title="Porcentagem de lucros"
              icon={<BadgePercent className="w-4 h-4 text-muted-foreground" />}
              value="00,00%"
              description=""
            />
          </FadeOut>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="hidden md:block col-span-4 rounded-sm bg-zinc-100 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle>Margem de lucro nos ultimos meses</CardTitle>
            </CardHeader>

            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>

          <FadeOut
            eixo="x"
            initialValueX={24}
            className="col-span-4 lg:col-span-3"
          >
            <Card className="h-full w-full rounded-sm bg-zinc-100 dark:bg-zinc-900">
              <CardHeader>
                <CardTitle className="text-clip">Historico de tarnsacoes</CardTitle>
              </CardHeader>

              <CardContent className="w-full">
                <RecentSales />
              </CardContent>
            </Card>
          </FadeOut>
        </div>
      </TabsContent>
    </>
  )
}