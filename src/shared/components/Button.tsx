import { css } from '../../../styled-system/css'

interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export function Button({ label, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={css({
        px: '4',
        py: '2',
        borderRadius: 'md',
        fontWeight: 'semibold',
        cursor: 'pointer',
        bg: variant === 'primary' ? 'heat.500' : 'neutral.100',
        color: variant === 'primary' ? 'white' : 'neutral.900',
        _hover: {
          opacity: 0.9,
        },
      })}
    >
      {label}
    </button>
  )
}
