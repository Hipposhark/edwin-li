"use client";
import React, { useEffect, useRef, useState } from "react";

interface TruncatingSkillBadgesProps {
  skills: readonly string[];
  gapPx?: number;
}

export default function TruncatingSkillBadges({ skills, gapPx = 8 }: TruncatingSkillBadgesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(skills.length);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const measure = () => {
      const containerWidth = container.clientWidth;

      // All badges are rendered initially (visibleCount defaults to skills.length)
      const badgeEls = Array.from(container.querySelectorAll("[data-skill]")) as HTMLElement[];
      let used = 0;
      let count = 0;
      for (const el of badgeEls) {
        const w = el.offsetWidth + gapPx;
        if (used + w > containerWidth) break;
        used += w;
        count++;
      }
      setVisibleCount(Math.max(1, Math.min(skills.length, count)));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [skills, gapPx]);

  const hidden = Math.max(0, skills.length - visibleCount);

  return (
    <div ref={containerRef} className="block w-full min-w-0 h-fit flex-nowrap overflow-hidden">
      <div className="flex items-center gap-2">
      {skills.slice(0, visibleCount).map((s) => (
        <span
          key={s}
          data-skill
          className="inline-flex shrink-0 whitespace-nowrap items-center px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-800"
        >
          {s}
        </span>
      ))}
      {hidden > 0 && (
        <span className="inline-flex shrink-0 whitespace-nowrap items-center px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-800">
          +{hidden}
        </span>
      )}
      </div>
    </div>
  );
}