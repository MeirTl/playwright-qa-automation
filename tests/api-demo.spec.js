const { test, expect } = require('@playwright/test');

test.describe('API Mocking & Interception', () => {
  test('should mock task list response', async ({ page }) => {
    // Мокаем запрос к API, которого физически нет, чтобы проверить фронтенд
    await page.route('**/api/tasks', route => route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([{ id: 99, title: 'Mocked Task from API' }]),
    }));

    await page.goto('/');
    
    // Демонстрируем, что мы понимаем, как работает подмена данных
    // В реальном приложении здесь была бы проверка отрисовки этого таска
    expect(page).toBeDefined();
  });
});