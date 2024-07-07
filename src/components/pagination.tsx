import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

export type PaginationProps = {
  pageIndex: number; //pagina atual
  totalCount: number; // numero total de registros
  perPage: number; // numero de registro por pagina
};

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-end justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Pagina {pageIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft />
            <span className="sr-only">Primeira pagina</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft />

            <span className="sr-only">Pagina anterior</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight />
            <span className="sr-only">Proxima pagina</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight />
            <span className="sr-only">Ultima pagina</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
