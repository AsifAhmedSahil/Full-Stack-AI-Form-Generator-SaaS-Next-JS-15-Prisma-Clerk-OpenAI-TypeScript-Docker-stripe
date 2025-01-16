"use server";

import { currentUser } from "@clerk/nextjs/server";

import {z} from "zod"

export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "user not found!" };
    }

    const schema = z.object({
        description:z.string().min(1,"Description is required!")
    })

    const result = schema.safeParse({
        description:formData.get("description") as string
    })

    if(!result.success){
        return {success:false,message:"Invalid result",error:result.error.errors}
    }



  } catch (error) {
    console.log(error);
  }
};
