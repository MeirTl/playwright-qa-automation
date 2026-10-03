const { test, expect } = require('@playwright/test');
const { TasksPage } = require('../pages/TasksPage');

const titles = [
  { name: 'HTML markup', value: '<strong>Review API tests</strong>' },
  {
    name: 'an image with an event handler',
    value: '<img src="data:image/png;base64,invalid" onerror="document.documentElement.setAttribute(\'data-task-xss\', \'executed\')">',
  },
];

test.describe('Task title security', () => {
  for (const { name, value } of titles) {
    test(`${name} is displayed as text and can be deleted`, async ({ page }) => {
      const tasksPage = new TasksPage(page);
      await tasksPage.goto();
      await tasksPage.createTask(value);

      const task = tasksPage.taskList.locator('.task-item').last();
      await expect(task.locator('span')).toHaveText(value);
      await expect(task.locator('strong, img')).toHaveCount(0);
      await expect(page.locator('html')).not.toHaveAttribute('data-task-xss', 'executed');

      await task.getByRole('button', { name: 'Delete', exact: true }).click();
      await expect(tasksPage.taskList.locator('.task-item')).toHaveCount(4);
      await expect(tasksPage.taskList).not.toContainText(value);
      await expect(tasksPage.taskList).toContainText('Test login form');
    });
  }
});
