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
        bg: variant === 'primary' ? 'blue.500' : 'gray.200',
        color: variant === 'primary' ? 'white' : 'gray.800',
        _hover: {
          opacity: 0.9,
        },
      })}
    >
      {label}
    </button>
  )
}
