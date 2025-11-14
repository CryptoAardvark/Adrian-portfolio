"use client";

import { motion } from "framer-motion";
import type { contactInfo as contactInfoType } from "@/data/content";

type ContactInfoProps = {
  info: typeof contactInfoType;
};

const IconSVG = ({ type }: { type: string }) => {
  switch (type) {
    case "location":
      return (
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
          <path
            d="M10 2C7.24 2 5 4.24 5 7c0 4.5 5 11 5 11s5-6.5 5-11c0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5 12.5 5.62 12.5 7 11.38 9.5 10 9.5z"
            fill="currentColor"
          />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
          <path
            d="M2.5 5.833l7.083 4.167L16.667 5.833M2.5 5.833A2.5 2.5 0 000 8.333v8.334a2.5 2.5 0 002.5 2.5h15a2.5 2.5 0 002.5-2.5V8.333a2.5 2.5 0 00-2.5-2.5h-15z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
          <path
            d="M16.667 13.333l-3.334-1.667a1.667 1.667 0 00-1.833.25l-1.5 1.5a10 10 0 01-4.167-4.167l1.5-1.5a1.667 1.667 0 00.25-1.833L6.667 3.333a1.667 1.667 0 00-1.667-1.25H3.333A1.667 1.667 0 001.667 4c0 8.284 6.716 15 15 15a1.667 1.667 0 001.666-1.667v-1.667a1.667 1.667 0 00-1.25-1.666z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      );
    default:
      return null;
  }
};

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    default:
      return null;
  }
};

export function ContactInfo({ info }: ContactInfoProps) {
  const handleCopy = (value: string, type: string) => {
    if (type === "email" || type === "phone") {
      navigator.clipboard.writeText(value);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
          Contact Information
        </p>
        <h3 className="mt-2 text-3xl font-semibold text-white">{info.subtitle}</h3>
      </div>
      <div className="grid gap-4">
        {info.details.map((detail, index) => (
          <motion.div
            key={detail.type}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div
              className={`group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-[var(--accent-500)]/30 hover:bg-white/[0.05] ${
                detail.href ? "cursor-pointer" : ""
              }`}
              onClick={() => detail.href && (window.location.href = detail.href)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && detail.href) {
                  window.location.href = detail.href;
                }
              }}
              tabIndex={detail.href ? 0 : undefined}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--accent-500)]/20 bg-gradient-to-br from-[var(--accent-500)]/10 to-transparent text-[var(--accent-500)] transition group-hover:border-[var(--accent-500)]/40 group-hover:from-[var(--accent-500)]/20">
                <IconSVG type={detail.icon} />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {detail.label}
                </p>
                <p className="mt-1 text-base font-semibold text-white">{detail.value}</p>
              </div>
              {(detail.type === "email" || detail.type === "phone") && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(detail.value, detail.type);
                  }}
                  className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-[var(--text-muted)] transition hover:border-white/20 hover:text-white"
                >
                  Copy
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-3 pt-4">
        {info.socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[var(--text-muted)] transition hover:border-[var(--accent-500)]/40 hover:bg-[var(--accent-500)]/10 hover:text-[var(--accent-500)]"
          >
            <SocialIcon type={social.icon} />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

