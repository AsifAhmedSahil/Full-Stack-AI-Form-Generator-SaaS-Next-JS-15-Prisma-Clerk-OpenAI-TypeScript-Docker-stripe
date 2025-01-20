'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const deleteForm = async (formId:number) =>{
    const form = await prisma.form.delete({
        where:{
            id:formId
        }
    })

    if(!form){
        return {success:false,message:"form not found"}
    }

    revalidatePath("/dashboard/forms")

    return{
        success:true,
        message:"form deleted successfully!"
    }

}