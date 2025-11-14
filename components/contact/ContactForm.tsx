"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import type { contactForm as contactFormType } from "@/data/content";

type ContactFormProps = {
  form: typeof contactFormType;
};

export function ContactForm({ form }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-[var(--radius-lg)] border border-white/5 bg-white/[0.02] p-8 shadow-[0_40px_120px_rgba(5,6,14,0.65)]"
    >
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {form.title}
        </p>
        <p className="mt-2 text-lg text-white">{form.subtitle}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
            Name
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                <path
                  d="M10 10a3 3 0 100-6 3 3 0 000 6zM10 12a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 pl-12 text-white placeholder:text-[var(--text-muted)] transition focus:border-[var(--accent-500)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)]/20 ${
                errors.name ? "border-red-500/50" : "border-white/10"
              }`}
              placeholder="Name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
            Email
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                <path
                  d="M2.5 5.833l7.083 4.167L16.667 5.833M2.5 5.833A2.5 2.5 0 000 8.333v8.334a2.5 2.5 0 002.5 2.5h15a2.5 2.5 0 002.5-2.5V8.333a2.5 2.5 0 00-2.5-2.5h-15z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 pl-12 text-white placeholder:text-[var(--text-muted)] transition focus:border-[var(--accent-500)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)]/20 ${
                errors.email ? "border-red-500/50" : "border-white/10"
              }`}
              placeholder="Email"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
            Message
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-4 text-[var(--text-muted)]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                <path
                  d="M2.5 5h15l-1.875 7.5H10a2.5 2.5 0 01-2.5-2.5V5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M5 12.5h10M7.5 15h5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 pl-12 text-white placeholder:text-[var(--text-muted)] transition focus:border-[var(--accent-500)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)]/20 resize-none ${
                errors.message ? "border-red-500/50" : "border-white/10"
              }`}
              placeholder="Message"
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message}</p>
          )}
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-500)] to-[var(--accent-600)] px-6 py-3 text-sm font-semibold text-black transition hover:shadow-[var(--accent-glow)] disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : submitStatus === "success" ? (
            <>
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path
                  d="M16.667 5L7.5 14.167 3.333 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sent!
            </>
          ) : (
            <>
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path
                  d="M2.5 5l15 7.5L10 12.5l-5 5-2.5-12.5zM17.5 12.5L10 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              Send Message
            </>
          )}
        </motion.button>
        {submitStatus === "error" && (
          <p className="text-center text-xs text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </motion.div>
  );
}

