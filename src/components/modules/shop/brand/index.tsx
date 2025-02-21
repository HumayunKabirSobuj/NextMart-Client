"use client"
import { IBrand } from "@/types";
import CreateBrandModal from "./CreateBrandModal";
import { Trash } from "lucide-react";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { NMTable } from "@/components/ui/core/NMTable";
import { DeleteBrand } from "@/services/Brand";
import { toast } from "sonner";

type TBrandsProps = {
  brands: IBrand[];
};

const ManageBrands =  ({ brands }: TBrandsProps) => {
  // console.log(brands);

  const handleDelete = async(data: IBrand) => {
    // console.log(data);
    try {
      const res = await DeleteBrand(data?._id);
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


  const columns: ColumnDef<IBrand>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image 
            src={row.original.logo}
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
        <h1 className="text-xl font-bold">Manage Brand</h1>
        <CreateBrandModal />
      </div>
      <NMTable data={brands} columns={columns}/>
    </div>
  );
};

export default ManageBrands;
