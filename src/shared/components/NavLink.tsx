'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { css, cx } from '../../../styled-system/css'

const navLink = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'text.secondary',
  textDecoration: 'none',
  transition: 'color 0.15s',
  _hover: { color: 'text.primary' },
})

const navLinkActive = css({
  color: 'text.primary',
})

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Link href={href} className={cx(navLink, isActive && navLinkActive)}>
      {children}
    </Link>
  )
}
