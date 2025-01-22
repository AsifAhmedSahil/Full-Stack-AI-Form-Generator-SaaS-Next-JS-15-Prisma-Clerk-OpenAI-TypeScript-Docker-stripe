/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Form } from "@/types/Form";
import { Edit2 } from "lucide-react";
import { deleteForm } from "@/actions/deleteForm";
import toast from "react-hot-toast";
// import { Edit2 } from 'lucide-react';

type Props = {
  form: Form;
};



const FormList: FC<Props> = ({ form }) => {
  const deleteFormHandler = async (formId: number) => {
    const data = await deleteForm(formId)
    if(data.success){
      toast.success(data.success)
    } else {
      toast.error(data.message) 
    }
  
  };

  
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{form.content.title}</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={`/dashboard/forms/${form.id}/submissions`}>
            {" "}
            <Button variant={"link"} className="text-blue-600">
              Submission - {form.submissions}
            </Button>{" "}
          </Link>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            //   onClick={()=> router.push(`/dashboard/forms/edit/${form.id}`)}
          >
            <Edit2 /> Edit
          </Button>
          <Button
            onClick={() => deleteFormHandler(form.id)}
            variant={"destructive"}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FormList;
