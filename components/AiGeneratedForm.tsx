/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

const AiGeneratedForm: React.FC<{ form: any; isEditMode: boolean }> = ({
  form,
  isEditMode,
}) => {
  console.log(form.content.title);

  return (
    <div>
      <form>
        {form.content.fields.map((item: any, index: number) => {
          return (
            <div key={index} className="mb-4">
              <Label>{item.label}</Label>
              {item.type === "text" ||
              item.type === "email" ||
              item.type === "date" ||
              item.type === "tel" ||
              item.type === "number" ||
              item.type === "file" ? (
                <Input
                  type={item.type}
                  name={item.label}
                  placeholder={item.placeholder}
                  required={!isEditMode && item.required}
                />
              ) : item.type === "textarea" ? (
                <Textarea
                  name={item.label}
                  placeholder={item.placeholder}
                  required={!isEditMode && item.required}
                />
              ) : item.type === "dropdown" ? (
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={item.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {item.options?.map((option: string, index: number) => {
                      return (
                        <SelectItem key={index} value={option}>
                          {option}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              ) : item.type === "radio" ? (
                <RadioGroup>
                  {item.options?.map((option: string, index: number) => {
                    return (
                      <Label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={option}
                          required={!isEditMode && item.required}
                        />
                        <span>{option}</span>
                      </Label>
                    );
                  })}
                </RadioGroup>
              ) : item.type === "checkbox" || item.type === "select" ? (
                item.options?.map((option: string, index: number) => (
                  <Label key={index}>
                    <Checkbox name={item.label} value={option} />
                    <span>{option}</span>
                  </Label>
                ))
              ) : null}
            </div>
          );
        })}
        <Button type="submit">
          {
            isEditMode ?  "Publish" : form.content.button.label ? form.content.button.label : form.content.button.text

          }
        </Button>
      </form>
    </div>
  );
};

export default AiGeneratedForm;
