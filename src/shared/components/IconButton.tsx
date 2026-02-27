import { cva, cx, type RecipeVariantProps } from '../../../styled-system/css'

const iconButton = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.15s',
    border: '1px solid transparent',
    borderRadius: 'md',
    p: '2',
    fontSize: 'lg',
    color: 'text.secondary',
    _disabled: { opacity: 0.5, cursor: 'not-allowed' },
  },
  variants: {
    variant: {
      ghost: {
        bg: 'transparent',
        _hover: { bg: 'bg.lighter', color: 'text.primary' },
      },
      outline: {
        bg: 'transparent',
        borderColor: 'border.muted',
        _hover: { bg: 'bg.lighter', color: 'text.primary' },
      },
    },
  },
  defaultVariants: {
    variant: 'ghost',
  },
})

type IconButtonVariants = RecipeVariantProps<typeof iconButton>

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariants & {
    'aria-label': string
    children: React.ReactNode
  }

export function IconButton({ variant, className, children, ...props }: IconButtonProps) {
  return (
    <button className={cx(iconButton({ variant }), className)} {...props}>
      {children}
    </button>
  )
}
