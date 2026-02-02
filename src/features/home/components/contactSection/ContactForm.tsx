import * as React from "react";
import { ContactFormData } from "../../types";

type Props = {
  formData: ContactFormData;
  onChange: (field: keyof ContactFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
};

export const ContactForm = (props: Props) => {
  const inputClassName = "h-12 px-4 bg-[#1E293B] border border-[#2E3B4E] rounded-lg text-white text-sm font-sans placeholder-[#475569] focus:outline-none focus:border-[#22D3EE] transition-colors";
  const textareaClassName = "p-4 bg-[#1E293B] border border-[#2E3B4E] rounded-lg text-white text-sm font-sans placeholder-[#475569] focus:outline-none focus:border-[#22D3EE] transition-colors resize-none";
  const labelClassName = "text-[#64748B] font-semibold text-[11px] tracking-[1px] font-mono";

  return (
    <form onSubmit={props.onSubmit} className="flex flex-col gap-6 w-full max-w-2xl">
      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <label className={labelClassName}>NAME</label>
        <input
          type="text"
          value={props.formData.name}
          onChange={(e) => props.onChange("name", e.target.value)}
          placeholder="Your name"
          className={inputClassName}
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label className={labelClassName}>EMAIL</label>
        <input
          type="email"
          value={props.formData.email}
          onChange={(e) => props.onChange("email", e.target.value)}
          placeholder="your.email@example.com"
          className={inputClassName}
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <label className={labelClassName}>MESSAGE</label>
        <textarea
          value={props.formData.message}
          onChange={(e) => props.onChange("message", e.target.value)}
          placeholder="Your message..."
          rows={6}
          className={textareaClassName}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!props.isFormValid}
        className="w-full h-12 bg-white text-black font-semibold text-sm rounded-lg hover:bg-[#E5E7EB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-sans"
      >
        Send Message
      </button>
    </form>
  );
};
