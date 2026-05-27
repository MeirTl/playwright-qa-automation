const { test, expect } = require('@playwright/test');
const { TasksPage } = require('../pages/TasksPage');

test.describe('Task Management', () => {
  test('user can create a task', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.goto();
    await tasksPage.createTask('Create Playwright test');
    await expect(tasksPage.taskMessage).toHaveText('Task created.');
    await expect(tasksPage.taskList).toContainText('Create Playwright test');
  });

  test('empty task title shows validation error', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.goto();
    await tasksPage.createTask('');
    await expect(tasksPage.taskMessage).toHaveText('Task title is required.');
  });
});
