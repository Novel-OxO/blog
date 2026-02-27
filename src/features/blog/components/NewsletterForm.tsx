'use client'

import { css } from '../../../../styled-system/css'
import { Button } from '../../../shared/components/Button'
import { Input } from '../../../shared/components/Input'

const form = css({
  display: 'flex',
  gap: '3',
})

export function NewsletterForm() {
  return (
    <form
      className={form}
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <Input type="email" placeholder="Enter your email" />
      <Button style={{ flexShrink: 0 }}>Subscribe</Button>
    </form>
  )
}
