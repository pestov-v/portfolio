"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (!itemsRef.current) return;

    const updateHeight = () => {
      if (itemsRef.current) {
        setLineHeight(itemsRef.current.offsetHeight);
      }
    };

    // Delay to ensure content (images etc.) is fully rendered
    updateHeight();
    const timer = setTimeout(updateHeight, 500);
    window.addEventListener("resize", updateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="relative max-w-7xl mx-auto">
        <div ref={itemsRef}>
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 md:gap-10">
              <div className="z-40 items-start md:w-40 lg:w-44 shrink-0">
                <div className="sticky top-[80px] flex items-start gap-3">
                  <div className="relative flex items-center justify-center w-10 h-10 shrink-0 mt-1">
                    <div className="absolute w-10 h-10 rounded-full bg-[var(--re-bg-primary)]" />
                    <div className="relative h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                  <h3 className="hidden md:block text-xl font-bold text-neutral-500 dark:text-neutral-500 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
        </div>

        {/* Animated vertical line — matches itemsRef height exactly */}
        <div
          style={{ height: lineHeight + "px" }}
          className="absolute left-[19px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
