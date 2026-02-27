import { cva, cx, type RecipeVariantProps } from '../../../styled-system/css'

const button = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    fontWeight: 'semibold',
    cursor: 'pointer',
    transition: 'all 0.15s',
    border: '1px solid transparent',
    _disabled: { opacity: 0.5, cursor: 'not-allowed' },
  },
  variants: {
    variant: {
      primary: {
        bg: 'heat.500',
        color: 'white',
        _hover: { bg: 'heat.600' },
      },
      outline: {
        bg: 'transparent',
        color: 'text.primary',
        borderColor: 'border.muted',
        _hover: { bg: 'bg.lighter' },
      },
      ghost: {
        bg: 'transparent',
        color: 'text.secondary',
        _hover: { bg: 'bg.lighter', color: 'text.primary' },
      },
    },
    size: {
      sm: { px: '3', py: '1.5', fontSize: 'xs', borderRadius: 'md' },
      md: { px: '4', py: '2', fontSize: 'sm', borderRadius: 'md' },
      lg: { px: '6', py: '2.5', fontSize: 'md', borderRadius: 'lg' },
    },
    rounded: {
      true: { borderRadius: 'full' },
    },
    fullWidth: {
      true: { w: 'full' },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

type ButtonVariants = RecipeVariantProps<typeof button>

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    children: React.ReactNode
  }

export function Button({
  variant,
  size,
  rounded,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cx(button({ variant, size, rounded, fullWidth }), className)} {...props}>
      {children}
    </button>
  )
}
