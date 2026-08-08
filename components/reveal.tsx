'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** delay in ms for staggered entrances */
  delay?: number
  /** use the clip-path image reveal instead of the fade/translate */
  variant?: 'fade' | 'clip'
}

export function Reveal({
  children,
  as,
  className = '',
  delay = 0,
  variant = 'fade',
}: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const base = variant === 'clip' ? 'img-reveal' : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${base}${visible ? ' is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
