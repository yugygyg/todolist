function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = '${taskText} <button class="delete-btn" onclick="deleteTask(this)">×</button>';

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}