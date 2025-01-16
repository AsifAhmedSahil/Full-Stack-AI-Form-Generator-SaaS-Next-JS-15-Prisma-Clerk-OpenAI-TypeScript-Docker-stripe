import React from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./ui/button";

type SuggestionText = {
  label: string;
  text: string;
};

const suggestionBtnText: SuggestionText[] = [
  {
    label: "Job Application Form",
    text: "Generate a basic job application form that collects essential applicant information such as name, contact details, experience, and skills.",
  },
  {
    label: "Course Registration Form",
    text: "Create a course registration form for schools or institutions, collecting student details, course preferences, and contact information.",
  },
  {
    label: "Client Feedback Form",
    text: "Generate a client feedback form to gather insights from customers regarding services, products, and overall experience.",
  },
  {
    label: "Event RSVP Form",
    text: "Generate an event RSVP form to collect attendee names, contact details, and attendance status for events or gatherings.",
  },
];


const HeroSection = () => {
  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10"></div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-4xl font-bold">
            Build AI - Driven Form Effortlessly
          </h1>
          <p className="text-lg mt-4">
            By leveraging the power of artificial intelligence, our tool enables
            you to create smart, dynamic forms that adapt to your users needs,
            ensuring a seamless experience.
          </p>
        </div>
      </div>
      <GenerateFormInput/>

      <div className="grid grid-cols-4 gap-3 ">
        {
          suggestionBtnText.map((item:SuggestionText,index:number)=>(
            <Button className="rounded-tl-full rounded-br-full" variant={"outline"} key={index}>{item.label}</Button>
          ))
        }
      </div>
    </section>
  );
};

export default HeroSection;
