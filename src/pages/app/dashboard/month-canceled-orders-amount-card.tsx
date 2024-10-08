import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MounthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Cancelamentos (mes)</CardTitle>
        <DollarSign className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          32
        </span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-2%</span> em relacao ao mes passado
        </p>
      </CardContent>
    </Card>
  )
}
