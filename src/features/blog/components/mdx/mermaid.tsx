'use client'

import { useEffect, useRef, useState } from 'react'
import { css } from '../../../../../styled-system/css'

let initialized = false
let renderQueue = Promise.resolve()
let idCounter = 0

function renderMermaid(chart: string): Promise<string> {
  const id = `mermaid-${idCounter++}`
  return new Promise((resolve, reject) => {
    renderQueue = renderQueue.then(async () => {
      const { default: mermaid } = await import('mermaid')
      if (!initialized) {
        mermaid.initialize({ startOnLoad: false, theme: 'neutral' })
        initialized = true
      }
      try {
        const { svg } = await mermaid.render(id, chart)
        resolve(svg)
      } catch {
        reject(new Error(`Failed to render mermaid diagram: ${id}`))
      }
    })
  })
}

export function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState('')
  const chartRef = useRef(chart)

  useEffect(() => {
    let cancelled = false
    chartRef.current = chart

    renderMermaid(chart).then(
      (result) => {
        if (!cancelled) setSvg(result)
      },
      (err) => {
        console.error(err)
      },
    )

    return () => {
      cancelled = true
    }
  }, [chart])

  if (!svg) return null

  return (
    <div
      className={css({ my: '6', textAlign: 'center', overflow: 'hidden' })}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
