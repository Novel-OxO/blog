import { cva, type RecipeVariantProps } from '../../../styled-system/css'

const badge = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'semibold',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    borderRadius: 'full',
  },
  variants: {
    variant: {
      solid: {
        bg: 'heat.500',
        color: 'white',
        px: '3',
        py: '1.5',
        fontSize: 'sm',
      },
      subtle: {
        bg: 'heat.a8',
        color: 'heat.600',
        px: '2.5',
        py: '1',
        fontSize: 'xs',
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
})

type BadgeVariants = RecipeVariantProps<typeof badge>

type BadgeProps = BadgeVariants & {
  children: React.ReactNode
}

export function Badge({ variant, children }: BadgeProps) {
  return <span className={badge({ variant })}>{children}</span>
}
