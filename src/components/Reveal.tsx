import { m } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  y?: number
  x?: number
  scale?: number
  delay?: number
  duration?: number
  amount?: number
}

/** Fades/slides content in once, the first time it scrolls into view. */
export function Reveal({ children, className, style, y = 24, x = 0, scale, delay = 0, duration = 0.7, amount = 0.2 }: RevealProps) {
  return (
    <m.div
      className={className}
      style={style}
      initial={{ opacity: scale ? 1 : 0, y: scale ? 0 : y, x: scale ? 0 : x, scale: scale ?? 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </m.div>
  )
}

/**
 * Defers rendering a section (and therefore its images) until it is close to the
 * viewport. A reserved min-height keeps scroll position stable before mount.
 */
export function LazySection({ children, minHeight, id, rootMargin = '600px 0px' }: { children: ReactNode; minHeight: number; id?: string; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) return setVisible(true)
    const io = new IntersectionObserver(
      (entries) => {
        // Also mount when the section was skipped past (fast scroll / anchor jump).
        if (entries.some((e) => e.isIntersecting || e.boundingClientRect.bottom < 0)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} id={id} className="w-full" style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  )
}
