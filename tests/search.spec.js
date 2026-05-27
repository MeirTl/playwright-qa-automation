const { test, expect } = require('@playwright/test');
const { TasksPage } = require('../pages/TasksPage');

test.describe('Task Search Functionality', () => {
  test('user can search tasks by keyword', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.goto();
    await tasksPage.search('security');
    await expect(tasksPage.taskList).toContainText('Review security headers');
    await expect(tasksPage.taskList).not.toContainText('Test login form');
  });

  test('clear search restores full task list', async ({ page }) => {
    const tasksPage = new TasksPage(page);
    await tasksPage.goto();
    await tasksPage.search('security');
    await tasksPage.clearSearch();
    await expect(tasksPage.taskList).toContainText('Test login form');
  });
});
