/* eslint-disable jsx-a11y/alt-text, @next/next/no-img-element */
import type { ImgHTMLAttributes } from 'react'

type NextImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean
  priority?: boolean
  quality?: number
  unoptimized?: boolean
}

export default function MockImage({
  fill,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  priority,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  quality,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unoptimized,
  style,
  ...props
}: NextImageProps) {
  return (
    <img
      {...props}
      style={{
        ...style,
        ...(fill
          ? { position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }
          : {}),
      }}
    />
  )
}
