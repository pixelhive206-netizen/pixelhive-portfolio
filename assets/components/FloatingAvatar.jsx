/**
 * FloatingAvatar.jsx — PixelHive Studio
 * --------------------------------------------------------------
 * Premium floating avatar widget. NOT a chatbot. NOT a logo button.
 * A small character that invites visitors to chat on WhatsApp.
 *
 * Tech: React 18+ · Tailwind CSS · Framer Motion
 *
 * Features:
 *  - Cinematic spring entry (slides up from bottom-right)
 *  - Idle float (gentle vertical oscillation)
 *  - Magnetic cursor follow (desktop only, with spring physics)
 *  - Occasional head tilt every 6-12s (the character "looks around")
 *  - Blinking eyes + breathing smile + bobbing pixel antenna
 *  - Rotating "LET'S TALK" text on a circular SVG path
 *  - Glow pulse + ping ring + click ripple
 *  - Respects prefers-reduced-motion
 *
 * Install:
 *   npm i framer-motion
 *   (Tailwind already in your project)
 *
 * Usage:
 *   import FloatingAvatar from './FloatingAvatar';
 *   <FloatingAvatar
 *     phone="919360345471"
 *     message="Hi Pixelhive, I'd like to discuss a project."
 *   />
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const ROTATING_TEXT = "LET'S TALK ✦ LET'S TALK ✦ LET'S TALK ✦ LET'S TALK ✦ ";

export default function FloatingAvatar({
  phone = '919360345471',
  message = "Hi Pixelhive, I'd like to discuss a project.",
  size = 148,
  className = '',
}) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [headTilt, setHeadTilt] = useState(0);

  // Magnetic cursor follow — spring physics
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.4 });

  // Occasional head tilt while idle
  useEffect(() => {
    if (prefersReducedMotion) return;
    let timeoutId;
    const tick = () => {
      const tilt = (Math.random() - 0.5) * 10; // -5° to +5°
      setHeadTilt(tilt);
      setTimeout(() => setHeadTilt(0), 700 + Math.random() * 600);
      timeoutId = setTimeout(tick, 6000 + Math.random() * 6000);
    };
    timeoutId = setTimeout(tick, 6500);
    return () => clearTimeout(timeoutId);
  }, [prefersReducedMotion]);

  // Magnetic handlers — desktop only
  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set((e.clientX - cx) * 0.22);
    rawY.set((e.clientY - cy) * 0.22);
  }, [prefersReducedMotion, rawX, rawY]);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  // Click ripple — spawn a ripple at click point
  const handleClick = useCallback((e) => {
    if (prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 720);
  }, [prefersReducedMotion]);

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      ref={containerRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Let's talk on WhatsApp"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      style={{ width: size, height: size, x, y }}
      // Spring entry from below
      initial={prefersReducedMotion ? false : { scale: 0, y: 100, opacity: 0 }}
      animate={prefersReducedMotion ? {} : {
        scale: isHover ? 1.08 : 1,
        opacity: 1,
      }}
      transition={{
        scale: { type: 'spring', stiffness: 280, damping: 18 },
        opacity: { duration: 0.6 },
      }}
      // Page-entry delay — fires once on mount
      whileInView={{ opacity: 1 }}
      className={[
        'fixed bottom-8 right-8 z-50 rounded-full',
        'flex items-center justify-center no-underline overflow-hidden',
        'shadow-[0_24px_60px_-12px_rgba(251,191,36,0.55),0_8px_22px_-4px_rgba(217,119,6,0.35),inset_0_-6px_14px_rgba(217,119,6,0.18),inset_0_4px_10px_rgba(255,255,255,0.3)]',
        'bg-[radial-gradient(circle_at_35%_30%,#fde68a_0%,#fbbf24_45%,#d97706_100%)]',
        'text-[#0b0f14] cursor-pointer',
        'transition-[box-shadow,background] duration-500 ease-out',
        isHover && 'shadow-[0_32px_80px_-10px_rgba(251,191,36,0.7),0_12px_28px_-4px_rgba(217,119,6,0.45)] bg-[radial-gradient(circle_at_35%_30%,#fef3c7_0%,#fbbf24_35%,#b45309_100%)]',
        'sm:bottom-5 sm:right-5',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Idle vertical float — pauses on hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={prefersReducedMotion || isHover ? { y: 0 } : { y: [-5, 5, -5] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Ambient pulsing glow */}
        {!prefersReducedMotion && (
          <motion.span
            aria-hidden
            className="absolute -inset-3 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.4), transparent 65%)' }}
            animate={{ opacity: [0.25, 0.65, 0.25], scale: [1, 1.15, 1] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Expanding ping ring */}
        {!prefersReducedMotion && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full border border-amber-400/60 pointer-events-none"
            animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        {/* Rotating text on circular path */}
        <motion.svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full pointer-events-none"
          animate={prefersReducedMotion ? {} : { rotate: 360 }}
          transition={{
            duration: isHover ? 7 : 16,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <defs>
            <path id="wa-text-circle"
                  d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
                  fill="none" />
          </defs>
          <text fill="currentColor"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 600,
                  fontSize: 17,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                }}>
            <textPath href="#wa-text-circle" startOffset="0">{ROTATING_TEXT}</textPath>
          </text>
        </motion.svg>

        {/* Pixelhive avatar — face with head tilt + blinking eyes */}
        <motion.div
          aria-hidden
          className="relative z-[2] w-[52%] h-[52%] flex items-center justify-center"
          animate={{ rotate: headTilt, scale: isHover ? 1.1 : 1 }}
          transition={{
            rotate: { type: 'spring', stiffness: 180, damping: 14 },
            scale: { type: 'spring', stiffness: 260, damping: 18 },
          }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow: 'visible' }}>
            {/* Pixel antenna (bobs up/down) */}
            <motion.rect
              x="46" y="6" width="8" height="8" rx="1"
              fill="currentColor"
              animate={prefersReducedMotion ? {} : { y: [6, 3, 6] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Left eye (blinks) */}
            <motion.ellipse
              cx="36" cy="44" rx="4.5" ry="4.5"
              fill="currentColor"
              animate={prefersReducedMotion ? {} : { ry: [4.5, 4.5, 0.5, 4.5, 4.5] }}
              transition={{ duration: 5.4, repeat: Infinity, times: [0, 0.9, 0.94, 0.96, 1] }}
            />
            {/* Right eye (blinks, slightly delayed) */}
            <motion.ellipse
              cx="64" cy="44" rx="4.5" ry="4.5"
              fill="currentColor"
              animate={prefersReducedMotion ? {} : { ry: [4.5, 4.5, 0.5, 4.5, 4.5] }}
              transition={{ duration: 5.4, repeat: Infinity, times: [0, 0.905, 0.945, 0.965, 1] }}
            />
            {/* Smile (breathes — opens slightly larger on hover) */}
            <motion.path
              d={isHover ? "M 32 62 Q 50 80 68 62" : "M 34 64 Q 50 78 66 64"}
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              animate={prefersReducedMotion ? {} : { scaleY: [1, 1.15, 1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '50% 70%', transformBox: 'fill-box' }}
            />
          </svg>
        </motion.div>

        {/* Tiny WhatsApp badge in corner */}
        <span
          aria-hidden
          className="absolute bottom-1.5 right-1.5 w-[30px] h-[30px] rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.45),0_0_0_3px_#fbbf24] transition-all duration-300"
          style={{
            boxShadow: isHover
              ? '0 6px 18px rgba(37,211,102,0.65), 0 0 0 3px #fbbf24'
              : '0 4px 12px rgba(37,211,102,0.45), 0 0 0 3px #fbbf24',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.6 6.3A8 8 0 0 0 4 12.3c0 1.4.4 2.8 1 4L4 20l3.8-1a8 8 0 0 0 11.8-7 8 8 0 0 0-2-5.7zm-5.6 12a6.7 6.7 0 0 1-3.4-.9l-.2-.1-2.3.6.6-2.2-.2-.2a6.7 6.7 0 1 1 5.5 2.8zm3.7-5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1-.6-.3-1.2-.7-1.7-1.2-.4-.4-.8-1-1.1-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.1-.2.2-.3a.4.4 0 0 0 0-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.7 1.7c0 1 .7 2 .9 2.1.1.2 1.5 2.3 3.6 3.2.5.2.9.3 1.2.4.5.2 1 .1 1.3.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3z" />
          </svg>
        </span>

        {/* Click ripples */}
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            aria-hidden
            className="absolute bg-white/55 rounded-full pointer-events-none"
            style={{
              left: r.x,
              top: r.y,
              width: 14,
              height: 14,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 22, opacity: 0 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </motion.a>
  );
}
