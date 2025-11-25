 function addTodo() {
      const input = document.getElementById('todoInput');
      const status = document.getElementById('statusclick').value;
      const list = document.getElementById('todoList');

      if (input.value.trim() === '') return;

      const li = document.createElement('li');
      li.textContent = input.value;
      li.className = `todo-item ${status}`;
      list.appendChild(li);

      input.value = '';
    }