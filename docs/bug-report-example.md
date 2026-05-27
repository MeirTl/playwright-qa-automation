# Bug Report: Task Title XSS Vulnerability

**ID:** BUG-001  
**Severity:** Critical  
**Priority:** High  
**Status:** Open  
**Environment:** Windows 11, Chrome 124.0

## Description
Приложение не фильтрует входные данные в поле названия задачи, что позволяет исполнять произвольный JavaScript код на стороне клиента (Stored XSS).

## Preconditions
Пользователь авторизован и находится на странице списка задач.

## Steps to Reproduce
1. Open the Task Manager site.
2. In the "Task Title" field, enter: `<img src=x onerror=alert('XSS')>`
3. Click "Add Task".

## Expected Result
The task is created with the literal string as the title.

## Actual Result
A browser alert box with the text "XSS" is displayed.