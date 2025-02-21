"use server";

import { cookies } from "next/headers";

export const CreateCategory = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
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

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`);
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const DeleteCategory = async (id: string) => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category/${id}`,
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
