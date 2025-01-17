import prisma from '@/lib/prisma';
import React from 'react'

const Edit = async ({params}:{params:Promise<{formId:string}>}) => {
    const formID = (await params).formId;

    const form = await prisma.form.findUnique({
        where:{
            id:Number(formID)
        }
    })

    console.log(form)

  return (
    <div>Edit - {formID}</div>
  )
}

export default Edit