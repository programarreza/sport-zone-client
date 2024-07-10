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
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

import Container from "@/components/Container";
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
import { useState } from "react";
import CreateProduct from "./CreateProduct";

// product type
export type Product = {
  _id: string;
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const categories = [
  "hiking boots",
  "basketball",
  "tennis",
  "bags & backpacks",
  "football",
];

const ManageProducts = () => {
  const { data, isLoading, error } = useGetAllProductsQuery(undefined);
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
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteProduct(id);

          Swal.fire({
            title: "Deleted!",
            text: "Your Product has been deleted.",
            icon: "success",
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

  const columns: ColumnDef<Product>[] = [
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
        <div>
          <Button
            variant="ghost"
            onClick={() => handleDelete(row.original._id)}
          >
            <AiFillDelete size={26} color="#C70000" />
          </Button>
          <Button
            variant="ghost"
            onClick={() => handleUpdate(row.original._id)}
          >
            <FaRegEdit size={26} color="#5969FF" />
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

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#02022D]">
        <p className="flex justify-center items-center text-white text-3xl ">
          Loading...
        </p>
      </div>
    );
  }
  if (error) {
    // Render specific properties of the error object
    const errorMessage =
      "status" in error
        ? `Error ${error.status}: ${JSON.stringify(error.data)}`
        : "An error occurred";
    return <p>{errorMessage}</p>;
  }

  return (
    <div className="bg-[#020228] text-white min-h-screen">
      <Container>
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
              className="max-w-sm bg-[#02022D] text-white"
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto bg-[#02022D]">
                  Filter Category <ChevronDown className="ml-2 h-4 w-4 " />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-[#02022D] text-white p-2.5"
              >
                {categories.map((category) => (
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
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
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
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
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
                  <TableRow>
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
                className="hover:bg-[#5969FF] bg-[#02022D] hover:text-white"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-[#5969FF] bg-[#02022D] hover:text-white"
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
