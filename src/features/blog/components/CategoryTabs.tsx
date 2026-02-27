import Link from 'next/link'
import { css, cva } from '../../../../styled-system/css'

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
    textDecoration: 'none',
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
  activeCategory: string
}

export function CategoryTabs({ categories, activeCategory }: CategoryTabsProps) {
  return (
    <div className={tabs}>
      {categories.map((category) => (
        <Link
          key={category}
          href={category === 'All' ? '/blog' : `/blog/category/${category}`}
          className={tab({ active: activeCategory === category })}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}
