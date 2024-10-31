/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

import Container from "@/components/Container";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { categories } from "@/utils/utils";
import { useState } from "react";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";

const ManageProducts = () => {
  const { data, isLoading, error } = useGetAllProductsQuery("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ff7527",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        width: "350px",
        customClass: {
          popup: "bg-[#120500] text-white border border-[#FF4500]",
          title: "text-white",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
            width: "350px",
            customClass: {
              popup: " bg-[#120500]  text-white ",
              title: "text-white",
            },
          });
        }
      });
    } catch (error) {
      console.log("Failed to delete product ", error);
    }
  };
  const handleUpdate = (id: string) => {
    console.log("update", id);
  };

  const columns: ColumnDef<TProduct>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <div>{row.getValue("category")}</div>,
    },
    {
      accessorKey: "stockQuantity",
      header: "Stock Quantity",
      cell: ({ row }) => <div>{row.getValue("stockQuantity")}</div>,
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }) => <div>{row.getValue("brand")}</div>,
    },
    {
      accessorKey: "rating",
      header: "Rating",
      cell: ({ row }) => <div>{row.getValue("rating")}</div>,
    },

    {
      accessorKey: "price",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const price = parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "BDT",
        }).format(price);
        return <div className="ml-4 font-medium">{formatted}</div>;
      },
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className=" flex justify-center items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => handleDelete(row.original._id)}
            className=" w-10 p-0"
          >
            <AiFillDelete size={26} color="#C70000" />
          </Button>
          <Button
            variant="ghost"
            onClick={() => handleUpdate(row.original._id)}
            className=" w-10 p-0"
          >
            <UpdateProduct id={row.original._id} />
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: { pagination: { pageSize: 6 } }, // Display only 6 rows per page
  });

  if (error) {
    const errorMessage =
      "status" in error
        ? `Error ${error.status}: ${JSON.stringify(error.data)}`
        : "An error occurred";
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="bg-[#190700] text-white min-h-screen">
      <Container>
        {isLoading && <Loading />}
        <div className="w-full">
          <div className="flex items-center py-4">
            <Input
              placeholder="Search product names..."
              value={
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm bg-transparent text-white hidden md:flex border-[#FF4500] "
            />

            <div className="flex justify-between items-center w-full gap-16 md:gap-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="ml-auto bg-transparent border-[#FF4500]"
                  >
                    Filter Category <ChevronDown className="ml-2 h-4 w-4 " />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-[#190700] text-white p-2.5 border-[#FF4500]"
                >
                  {categories.map((category: any) => (
                    <DropdownMenuItem
                      key={category}
                      onSelect={() => {
                        table.getColumn("category")?.setFilterValue(category);
                      }}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem
                    onSelect={() => {
                      table.getColumn("category")?.setFilterValue(undefined);
                    }}
                  >
                    Clear Filter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* create product modal */}
              <div>
                <CreateProduct />
              </div>
            </div>
          </div>
          <div className="rounded-md border border-[#FF4500]">
            <Table className="border-[#FF4500]">
              <TableHeader className="border-[#FF4500]">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="border-[#FF4500]">
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} className="border-[#FF4500]">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className="border-[#FF4500]">
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      className="border-[#FF4500]"
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow className="border-[#FF4500]">
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} products
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-[#5969FF] bg-transparent border-[#FF4500] hover:text-white"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-[#5969FF] bg-transparent border-[#FF4500] hover:text-white"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageProducts;
