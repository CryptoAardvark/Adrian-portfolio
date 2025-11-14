"use client";

import { motion } from "framer-motion";
import type { certifications as certificationsData } from "@/data/content";

type Certification = (typeof certificationsData)[number];

type CertificationListProps = {
  certifications: Certification[];
};

export function CertificationList({
  certifications,
}: CertificationListProps) {
  const icon = (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-black/80" aria-hidden>
      <path
        d="M12 15c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 14.5v6l4-2 4 2v-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="rounded-[var(--radius-lg)] border border-white/5 bg-white/[0.02] px-8 py-10 shadow-[0_40px_120px_rgba(5,6,14,0.65)]">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F9D423] via-[#FF4E50] to-[#FDC830] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          {icon}
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Certifications
          </p>
          <h3 className="text-3xl font-semibold text-white">Credentials</h3>
        </div>
      </div>
      <div className="grid gap-4">
        {certifications.map((cert, index) => (
          <motion.article
            key={`${cert.title}-${cert.year}`}
            className="flex items-center justify-between rounded-3xl border border-white/8 bg-white/[0.03] px-5 py-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div>
              <p className="text-base font-semibold text-white">{cert.title}</p>
              <p className="text-sm text-[var(--text-muted)]">{cert.issuer}</p>
            </div>
            <span className="rounded-full border border-white/10 px-4 py-1 text-xs font-semibold text-[var(--accent-500)]">
              {cert.year}
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


