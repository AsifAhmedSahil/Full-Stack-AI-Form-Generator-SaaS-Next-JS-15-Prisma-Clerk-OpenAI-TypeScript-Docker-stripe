"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey as string);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

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

    const description = result.data.description

    const PROMT = "create a json form with the folowing fields:title, fields(If any field include options then keep it inside array not object),button"

    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const airesult = await chatSession.sendMessage(description+PROMT);
    // const formjsondata =await JSON.parse(airesult)
    console.log(airesult);
    






  } catch (error) {
    console.log(error);
  }
};
