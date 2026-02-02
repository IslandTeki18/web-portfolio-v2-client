import * as React from "react";
import { useState } from "react";
import { ContactFormData } from "../../types";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section className="w-full px-20 py-20 bg-[#0F172A] flex flex-col items-center gap-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h2 className="text-white font-semibold text-sm tracking-[3px] font-mono">
            GET IN TOUCH
          </h2>
        </div>
        <p className="text-[#94A3B8] text-base leading-[1.6] font-sans">
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </div>

      {/* Form */}
      <ContactForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
      />
    </section>
  );
};
