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

import { z } from "zod";
import prisma from "@/lib/prisma";

export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "user not found!" };
    }

    const schema = z.object({
      description: z.string().min(1, "Description is required!"),
    });

    const result = schema.safeParse({
      description: formData.get("description") as string,
    });

    if (!result.success) {
      return {
        success: false,
        message: "Invalid result",
        error: result.error.errors,
      };
    }

    const description = result.data.description;

    const PROMT =
      "create a json form with the folowing fields:title, fields(If any field include options then keep it inside array not object),button";

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const airesult = await chatSession.sendMessage(description + PROMT);
    const rawString = airesult.response.text(); // Get the response text

    // Remove the Markdown code block formatting (triple backticks)
    const cleanString = rawString.replace(/```json|```/g, "").trim();
    const parseFormData = await JSON.parse(cleanString);

    console.log(parseFormData);

    // parse korte hole korbo

    // save the form to database
    const form = await prisma.form.create({
      data: {
        ownerId: user.id,
        content: parseFormData ? parseFormData : {},
      },
    });

    return {
      success: true,
      message: "form generated successfully",
      data: form,
    };
  } catch (error) {
    console.log(error);
  }
};
