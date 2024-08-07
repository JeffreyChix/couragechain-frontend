import { Ellipsis } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmptyRecords from "./empty-records";
import RenderDropdownMenu from "./render-dropdown-menu";
import { Checkbox } from "./ui/checkbox";

interface RenderTableProps<T> {
  caption?: string;
  className?: string;
  id?: string;
  data?: T[];
  columns: TableColumn<T>[];
  getRowId: (row: T) => string;
  getRowActions?: (row: T) => DropdownMenu[];
  header?: { className?: string };
}

export default function RenderTable<T>({
  header,
  caption,
  className,
  id,
  columns = [],
  data = [],
  getRowId,
  getRowActions,
}: RenderTableProps<T>) {
  return (
    <div className="p-2 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg shadow shadow-black/5">
      <Table id={id} className={`outline-none outline-0 ring-0 ${className}`}>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader className={header?.className}>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={column.name + index} className={column.className}>
                <span className="flex items-center gap-2">
                  {index === 0 && <Checkbox />}
                  {column.name}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <div className="py-5 grid place-items-center">
              <EmptyRecords message="Sorry! No records found!" />
            </div>
          ) : (
            data.map((row, index) => {
              const id = getRowId(row);
              return (
                <TableRow key={id + index}>
                  {columns.map((column, index) => (
                    <TableCell
                      key={column.name + index}
                      className={column.className}
                    >
                      <span className="flex items-center gap-2">
                        {index === 0 && <Checkbox />}
                        {typeof column.data === "function"
                          ? column.data(row)
                          : column.data}
                      </span>
                    </TableCell>
                  ))}
                  {getRowActions && (
                    <TableCell>
                      <RenderDropdownMenu
                        align="end"
                        menus={getRowActions(row)}
                      >
                        <Ellipsis
                          size={30}
                          className="rounded-md p-1 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 "
                        />
                      </RenderDropdownMenu>
                    </TableCell>
                  )}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
