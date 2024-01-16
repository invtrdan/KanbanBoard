window.onload = function() {
  displayCurrentDate();
};

function displayCurrentDate() {
  const dateElement = document.querySelector('.date-display');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-US', options);
  dateElement.innerText = `${currentDate}`;
}

function addTask() {
  var taskInput = document.getElementById('new-task');
  var taskText = taskInput.value.trim();

  if (taskText) {
      var newTask = document.createElement('div');
      newTask.classList.add('task');
      newTask.innerText = taskText;
      newTask.draggable = true;
      newTask.id = 'task-' + new Date().getTime();
      newTask.ondragstart = function(event) {
          event.dataTransfer.setData("text", event.target.id);
      };

      var deleteButton = document.createElement('button');
      deleteButton.innerText = 'X';
      deleteButton.classList.add('delete-btn');
      deleteButton.onclick = function() {
          newTask.remove();
      };

      newTask.appendChild(deleteButton);
      document.querySelector('.kanban-column.todo .tasks').appendChild(newTask);
      taskInput.value = '';
    }
  }

  function allowDrop(event) {
  event.preventDefault();
  }

  function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var target = event.target;

  if (target.classList.contains('tasks')) {
      target.appendChild(document.getElementById(data));
  }
}

