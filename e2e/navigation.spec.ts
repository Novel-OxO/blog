import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('홈 페이지 로드', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Blog/)
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible()
  })

  test('블로그 목록 페이지 로드', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible()
  })

  test('About 페이지 로드', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
  })
})
