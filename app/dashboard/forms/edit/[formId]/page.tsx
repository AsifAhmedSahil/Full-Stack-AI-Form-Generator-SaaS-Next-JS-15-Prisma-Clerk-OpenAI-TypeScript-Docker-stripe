/* eslint-disable @typescript-eslint/no-explicit-any */
import AiGeneratedForm from '@/components/AiGeneratedForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import prisma from '@/lib/prisma';
import React from 'react'

const Edit = async ({params}:{params:Promise<{formId:string}>}) => {
    const formID = (await params).formId;

    const form : any = await prisma.form.findUnique({
        where:{
            id:Number(formID)
        }
    })

    console.log(form)

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>{form?.content.title}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AiGeneratedForm form={form} isEditMode={true}/>
      </CardContent>
    </Card>
  )
}

export default Edit