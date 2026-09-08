/**
 * 装饰性光标光环 —— 原生光标保持可见（操作跟手），
 * 光环以较高跟随系数快速尾随，仅作视觉点缀，不承担指针职责。
 */
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafRef = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.3);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.3);

      if (ringRef.current) {
        const size = isHovering ? 40 : 28;
        ringRef.current.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll(
      "a, button, [role='button']",
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isHovering]);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <div
      ref={ringRef}
      className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-[opacity,border-color] duration-200 ${
        isHovering
          ? "border-primary opacity-70"
          : "border-primary/40 opacity-50"
      }`}
      style={{
        willChange: "transform",
        transition: "width 0.2s ease, height 0.2s ease",
      }}
    />
  );
}
