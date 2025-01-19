"use server"

import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const getForms = async () =>{
    const user = await currentUser()
    if(!user){
        return {success:false,message:"user not found"}
    }

    const forms = await prisma.form.findMany({
        where:{
            ownerId:user.id
        }
    })

    if(!forms){
        return {success:false,message:"form not found"}
    }

    return {
        success:true,
        message:"form found",
        data:forms
    }


}