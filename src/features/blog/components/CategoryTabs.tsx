'use client'

import { useState } from 'react'
import { css } from '../../../../styled-system/css'
import { cva } from '../../../../styled-system/css'

const tabs = css({
  display: 'flex',
  gap: '2',
  flexWrap: 'wrap',
})

const tab = cva({
  base: {
    px: '4',
    py: '2',
    fontSize: 'sm',
    fontWeight: 'medium',
    borderRadius: 'full',
    cursor: 'pointer',
    transition: 'all 0.15s',
    border: '1px solid',
  },
  variants: {
    active: {
      false: {
        borderColor: 'border.muted',
        bg: 'transparent',
        color: 'text.secondary',
        _hover: { borderColor: 'border.loud', color: 'text.primary' },
      },
      true: {
        bg: 'heat.500',
        color: 'white',
        borderColor: 'heat.500',
        _hover: { bg: 'heat.600', borderColor: 'heat.600' },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

interface CategoryTabsProps {
  categories: string[]
  defaultCategory?: string
}

export function CategoryTabs({ categories, defaultCategory = 'All' }: CategoryTabsProps) {
  const [active, setActive] = useState(defaultCategory)

  return (
    <div className={tabs}>
      {categories.map((category) => (
        <button
          key={category}
          className={tab({ active: active === category })}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
