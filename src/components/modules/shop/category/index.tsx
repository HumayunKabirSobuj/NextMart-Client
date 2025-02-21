"use client";
import { ICategory } from "@/types";
import CreateCategoryModal from "./CreateCategoryModal";
import { NMTable } from "@/components/ui/core/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import { DeleteCategory } from "@/services/Category";
import { toast } from "sonner";
type TCategoriesProps = {
  categories: ICategory[];
};

const ManageCategories = ({ categories }: TCategoriesProps) => {
  // console.log(categories);

  const handleDelete = async (data: ICategory) => {
    // console.log(data);
    try {
      const res = await DeleteCategory(data?._id);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div>isActive</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-bold">Manage Category</h1>
        <CreateCategoryModal />
      </div>
      <NMTable data={categories} columns={columns} />
    </div>
  );
};

export default ManageCategories;
