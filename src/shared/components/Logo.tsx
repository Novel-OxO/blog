import Link from 'next/link'
import { css, cx } from '../../../styled-system/css'
import { FireIcon } from './icons'

const logoBase = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2',
  fontWeight: 'bold',
  color: 'text.primary',
  textDecoration: 'none',
})

const logoSm = css({ fontSize: 'sm' })
const logoMd = css({ fontSize: 'md' })

interface LogoProps {
  size?: 'sm' | 'md'
}

export function Logo({ size = 'md' }: LogoProps) {
  return (
    <Link href="/" className={cx(logoBase, size === 'sm' ? logoSm : logoMd)}>
      <FireIcon className={css({ color: 'heat.500', fontSize: size === 'sm' ? 'md' : 'xl' })} />
      Novel Note
    </Link>
  )
}
