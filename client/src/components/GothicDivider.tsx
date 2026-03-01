/*
 * GothicDivider — Ornamental section separator
 * Gothic arch-inspired SVG divider with gold accents
 */
import { motion } from "framer-motion";

export function GothicDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.5 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center py-4"
    >
      <svg width="400" height="40" viewBox="0 0 400 40" className="max-w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left line */}
        <line x1="0" y1="20" x2="150" y2="20" stroke="oklch(0.75 0.12 85 / 30%)" strokeWidth="1" />
        {/* Left diamond */}
        <path d="M150 20 L160 12 L170 20 L160 28 Z" fill="oklch(0.75 0.12 85 / 20%)" stroke="oklch(0.75 0.12 85 / 50%)" strokeWidth="0.5" />
        {/* Center ornament - gothic arch */}
        <path d="M180 20 L190 6 L200 2 L210 6 L220 20 L210 34 L200 38 L190 34 Z" fill="oklch(0.75 0.12 85 / 15%)" stroke="oklch(0.75 0.12 85 / 60%)" strokeWidth="1" />
        <circle cx="200" cy="20" r="3" fill="oklch(0.75 0.12 85 / 40%)" />
        {/* Right diamond */}
        <path d="M230 20 L240 12 L250 20 L240 28 Z" fill="oklch(0.75 0.12 85 / 20%)" stroke="oklch(0.75 0.12 85 / 50%)" strokeWidth="0.5" />
        {/* Right line */}
        <line x1="250" y1="20" x2="400" y2="20" stroke="oklch(0.75 0.12 85 / 30%)" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}
