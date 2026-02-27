'use client'

import { Button } from '../../../shared/components/Button'

interface LoadMoreButtonProps {
  onClick?: () => void
}

export function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  return (
    <Button variant="outline" rounded onClick={onClick}>
      Load More
    </Button>
  )
}
