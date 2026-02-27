import { css, cx } from '../../../../styled-system/css'

const container = css({
  maxW: 'container',
  mx: 'auto',
  px: '4',
})

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cx(container, className)}>{children}</div>
}
