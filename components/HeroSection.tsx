import React from "react";
import GenerateFormInput from "./GenerateFormInput";

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
    </section>
  );
};

export default HeroSection;
