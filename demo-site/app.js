const demoTasks = [
  { id: 1, title: 'Test login form' },
  { id: 2, title: 'Check API validation' },
  { id: 3, title: 'Review security headers' },
  { id: 4, title: 'Write bug report' }
];

function setupLoginPage() {
  const b = document.querySelector('#loginButton');
  if (!b) return;
  b.addEventListener('click', () => {
    const e = document.querySelector('#email').value.trim();
    const p = document.querySelector('#password').value.trim();
    const m = document.querySelector('#message');
    if (!e || !p) {
      m.textContent = 'Email and password are required.';
      m.className = 'error';
      return;
    }
    if (e === 'qa@example.com' && p === 'Password123!') {
      m.textContent = 'Login successful.';
      m.className = 'success';
      // Имитация редиректа через 1 сек
      setTimeout(() => { window.location.hash = '#tasks'; }, 1000);
    } else {
      m.textContent = 'Invalid email or password.';
      m.className = 'error';
    }
  });
}

function renderTasks(tasks) {
  const l = document.querySelector('#taskList');
  if (!l) return;
  l.innerHTML = '';
  if (tasks.length === 0) {
    l.innerHTML = '<div class="no-tasks">No tasks found.</div>';
    return;
  }
  tasks.forEach(t => {
    const i = document.createElement('div');
    i.className = 'task-item';
    i.innerHTML = `
      <span>${t.title}</span>
      <button class="delete-btn" onclick="deleteTask(${t.id})">Delete</button>
    `;
    l.appendChild(i);
  });
}

let currentTasks = [...demoTasks];

window.deleteTask = (id) => {
  currentTasks = currentTasks.filter(t => t.id !== id);
  renderTasks(currentTasks);
};

function setupTasksPage() {
  const s = document.querySelector('#searchInput');
  const c = document.querySelector('#clearSearch');
  const a = document.querySelector('#addTask');
  const ti = document.querySelector('#taskTitle');
  const msg = document.querySelector('#taskMessage');
  
  if (!s) return;
  renderTasks(currentTasks);
  
  s.addEventListener('input', () => {
    const q = s.value.toLowerCase();
    renderTasks(currentTasks.filter(t => t.title.toLowerCase().includes(q)));
  });
  
  c.addEventListener('click', () => { s.value = ''; renderTasks(currentTasks); });
  
  a.addEventListener('click', () => {
    const title = ti.value.trim();
    if (!title) {
      msg.textContent = 'Task title is required.';
      msg.className = 'error';
      return;
    }
    currentTasks.push({ id: Date.now(), title });
    ti.value = '';
    msg.textContent = 'Task created.';
    msg.className = 'success';
    renderTasks(currentTasks);
  });
}

setupLoginPage();
setupTasksPage();
