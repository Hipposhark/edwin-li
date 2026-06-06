"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

function MasonryGallery({ images }: { images?: readonly string[] }) {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // On mount or resize recalc column width for existing loaded items
        const ro = new ResizeObserver(() => {
            // trigger reflow by re-setting gridRowEnd for each already-loaded item
            itemRefs.current.forEach((el) => {
                if (!el) return;
                const img = el.querySelector<HTMLImageElement>("img");
                if (!img) return;
                const naturalW = img.naturalWidth;
                const naturalH = img.naturalHeight;
                if (naturalW && naturalH) setRowSpanForElement(el, naturalW, naturalH);
            });
        });

        if (gridRef.current) ro.observe(gridRef.current);
        return () => ro.disconnect();
    }, []);

    function setRowSpanForElement(el: HTMLDivElement, naturalW: number, naturalH: number) {
        const grid = gridRef.current;
        if (!grid) return;
        const computed = getComputedStyle(grid);
        const colCount = computed.gridTemplateColumns.split(" ").length || 1;
        const gap = parseFloat(computed.gap || "8");
        const gridWidth = grid.clientWidth;
        const colWidth = (gridWidth - gap * (colCount - 1)) / colCount;

        // read row height or use sensible default
        const rawRow = computed.gridAutoRows || "10px";
        const rowHeight = Math.max(6, parseFloat(rawRow.replace("px", ""))); // >=6px fallback

        let span = Math.ceil((naturalH / naturalW) * (colWidth / rowHeight));

        // clamp to avoid extremely tall items while preserving proportions
        const MAX_SPAN = 40; // adjust if needed
        span = Math.max(1, Math.min(span, MAX_SPAN));

        el.style.gridRowEnd = `span ${span}`;
    }

    return (
        <div ref={gridRef} className="masonry-grid">
            {images?.map((src, i) => (
                <div
                    key={src}
                    ref={(el) => { itemRefs.current[i] = el ?? null; }}
                    className="masonry-item"
                    style={{ gridRowEnd: "span 1" }}
                >
                    <Image
                        src={src}
                        alt={`img-${i}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                        onLoadingComplete={(result: { naturalWidth: number; naturalHeight: number }) => {
                            const el = itemRefs.current[i];
                            if (!el) return;
                            setRowSpanForElement(el, result.naturalWidth, result.naturalHeight);
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

export default MasonryGallery;