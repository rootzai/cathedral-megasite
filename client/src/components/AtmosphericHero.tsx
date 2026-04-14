import React from "react";

/**
 * AtmosphericHero — breaks the data wall with a thematic background image,
 * optional mnemonic glyph, and hidden symbolic markers.
 *
 * The `symbol` prop encodes a hidden marker (visible on hover or selection)
 * tying each page into the Memory Palace spatial system.
 *
 * The `mnemonic` prop is a one-line PAO (Person-Action-Object) memory trigger
 * displayed as a subtle epigraph beneath the title.
 */

interface AtmosphericHeroProps {
  /** Background image path (relative to /assets/) */
  image: string;
  /** Alt text for accessibility */
  imageAlt?: string;
  /** Page title */
  title: string;
  /** Optional highlighted word in the title (rendered in red) */
  titleAccent?: string;
  /** Optional subtitle / section label above title */
  eyebrow?: string;
  /** PAO mnemonic — a vivid one-liner for spatial recall */
  mnemonic?: string;
  /** Hidden symbol glyph (Memory Palace coordinate marker) */
  symbol?: string;
  /** Optional case file number */
  caseFile?: string;
  /** Opacity of the background image (0-100, default 15) */
  imageOpacity?: number;
  /** Additional content below the title */
  children?: React.ReactNode;
}

export function AtmosphericHero({
  image,
  imageAlt = "",
  title,
  titleAccent,
  eyebrow,
  mnemonic,
  symbol,
  caseFile,
  imageOpacity = 15,
  children,
}: AtmosphericHeroProps) {
  return (
    <div className="relative overflow-hidden mb-12">
      {/* Background image layer */}
      <img
        src={image}
        alt={imageAlt}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        style={{ opacity: imageOpacity / 100 }}
      />

      {/* Gradient overlays — cinematic top-to-bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0c]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {/* Hidden symbol — Memory Palace coordinate marker */}
      {symbol && (
        <div
          className="absolute top-4 right-4 text-white/[0.03] hover:text-white/20 text-6xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default"
          title="Memory Palace Marker"
          aria-hidden="true"
        >
          {symbol}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-6 pt-20 pb-16 md:pt-28 md:pb-20 max-w-5xl mx-auto">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-6">
            {caseFile && (
              <span className="text-[#8b1a1a] font-mono text-xs font-bold tracking-widest">
                {caseFile}
              </span>
            )}
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-cinzel text-white uppercase tracking-tight leading-none mb-6">
          {title}{" "}
          {titleAccent && (
            <span className="text-[#8b1a1a]">{titleAccent}</span>
          )}
        </h1>

        {mnemonic && (
          <p className="text-zinc-400 font-serif italic text-lg md:text-xl max-w-3xl leading-relaxed border-l-2 border-[#8b1a1a]/30 pl-4">
            {mnemonic}
          </p>
        )}

        {children}
      </div>

      {/* Bottom edge — subtle ruled line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b1a1a]/30 to-transparent" />
    </div>
  );
}
