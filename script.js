
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const task = input.value;
    if (task){
        

		const taskElement = document.createElement('div');
		taskElement.classList.add('task');

		const content = document.createElement('div');
		content.classList.add('content');

		taskElement.appendChild(content);

		const taskInput = document.createElement('input');
		taskInput.classList.add('text');
		taskInput.type = 'text';
		taskInput.value = task;
		taskInput.setAttribute('readonly', 'readonly');

		content.appendChild(taskInput);


		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_delete_el);

		taskElement.appendChild(task_actions_el);

		list_el.appendChild(taskElement);

		// list_el.appendChild(taskElement);

		task_delete_el.addEventListener('click', () => {
			list_el.removeChild(taskElement);
		});

		input.value = '';
    }
})
