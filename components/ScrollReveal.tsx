"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight - 40) {
          el.style.opacity = "0";
          el.style.transform = "translateY(24px)";
          el.style.transition = "opacity 0.65s ease, transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          observer.observe(el);
        }
      });
    }, 650);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
