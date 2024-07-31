let taskList = [];

document.getElementById('add-task').addEventListener('click', function() {
  let newTask = document.getElementById('new-task').value;
  if (newTask !== '') {
    taskList.push(newTask);
    document.getElementById('new-task').value = '';
    renderTaskList();
  }
});

function renderTaskList() {
  let taskListHTML = '';
  for (let i = 0; i < taskList.length; i++) {
    taskListHTML += <li>${taskList[i]}</li>;
  }
  document.getElementById('task-list').innerHTML = taskListHTML;
}

renderTaskList();