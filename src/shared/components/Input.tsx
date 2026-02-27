import { css } from '../../../styled-system/css'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`${css({
        w: 'full',
        px: '4',
        py: '2.5',
        fontSize: 'sm',
        lineHeight: '20px',
        color: 'text.primary',
        bg: 'surface',
        border: '1px solid',
        borderColor: 'border.muted',
        borderRadius: 'lg',
        outline: 'none',
        transition: 'border-color 0.15s',
        _placeholder: { color: 'text.muted' },
        _focus: { borderColor: 'heat.500' },
      })}${className ? ` ${className}` : ''}`}
      {...props}
    />
  )
}
