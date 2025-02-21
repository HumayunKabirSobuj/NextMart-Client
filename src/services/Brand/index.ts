"use server";

import { cookies } from "next/headers";

export const CreateBrand = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllBrands = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`);
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const DeleteBrand = async (id: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/brand/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: accessToken as string,
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
