'use client'

import { useEffect, useRef } from 'react'
import { css } from '../../../../../styled-system/css'

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let cancelled = false

    import('mermaid').then(({ default: mermaid }) => {
      if (cancelled) return
      mermaid.initialize({ startOnLoad: false, theme: 'neutral' })
      mermaid.run({ nodes: [el] })
    })

    return () => {
      cancelled = true
    }
  }, [chart])

  return (
    <div ref={ref} className={`mermaid ${css({ my: '6', textAlign: 'center' })}`}>
      {chart}
    </div>
  )
}
