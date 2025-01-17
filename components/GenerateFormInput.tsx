/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ChangeEvent, useActionState, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Sparkle } from "lucide-react";
import { generateForm } from "@/actions/generateForm";
import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

type InitialState = {
  message: string;
  success: boolean;
  data?: any;
};

const initialState: InitialState = {
  message: "",
  success: false,
};

const GenerateFormInput: React.FC<{ text?: string }> = ({ text }) => {
  const [description, setDescription] = useState<string | undefined>("");
  const [state, formAction] = useActionState(generateForm, initialState);
  // const router = useRouter()

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  useEffect(()=>{
    setDescription(text)
  },[text])

  useEffect(()=>{
    if(state?.success){
      console.log(state)
      toast(state.message)
      // router.push(`/dashboard/forms/edit/${state.data.id}`)
    }
    else if(state?.message){
      toast.error(state.message)
    }
  },[state])

  return (
    <form action={formAction} className="flex items-center gap-4 my-8">
      <Input
      id="description"
      name="description"
        value={description}
        onChange={changeEventHandler}
        type="text"
        placeholder="Write a promt to generate form"
        required
      />
      <SubmitButton />
    </form>
  );
};

export default GenerateFormInput;

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="h-12 bg-gradient-to-r from-blue-500 to bg-purple-600">
      <Sparkle className="mr-2" />
      {pending ? <span>Generating Form...</span> : "Generate Form"}
    </Button>
  );
};
