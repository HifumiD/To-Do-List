import { closeModal } from '../components/ui.js';

let taskIdCounter = 0;
let tasksContainer;

function createTask(){
     tasksContainer = document.querySelector('.tasks-container');
    const modalTitle = document.querySelector('#Title').value;
    const modalDate = document.querySelector('#Date').value;
    const modalPriority = document.querySelector('#Priority').checked;

    var taskContainer = document.createElement('div');
    taskContainer.classList.add('task-card');
    taskContainer.dataset.taskId = taskIdCounter; // Assign a unique identifier

    const title = document.createElement('h2');
    title.textContent = modalTitle;
    taskContainer.appendChild(title);

    const cardButton = document.createElement('div');
    cardButton.classList.add('card-buttons'); // Apply flex styling to this div

    if (modalDate) {
        const taskDate = new Date(modalDate);
        const formattedDate = `${taskDate.getMonth() + 1}/${taskDate.getDate()}/${taskDate.getFullYear()}`;

        const date = document.createElement('date');
        date.textContent = formattedDate;
        cardButton.appendChild(date); // Append date to the cardButton div
    }

    // Create the priority circle and set its initial color
    const priorityCircle = document.createElement('div');
    priorityCircle.classList.add('priority-circle');
    updatePriorityCircleColor(priorityCircle, modalPriority);

    priorityCircle.addEventListener('click', togglePriority);
    cardButton.appendChild(priorityCircle); // Append priorityCircle to the cardButton div

    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.png'; // Update with the correct path to your delete.png image
    deleteImage.alt = 'Delete';
    deleteImage.addEventListener('click', () => deleteTask(taskContainer));
    cardButton.appendChild(deleteImage); // Append deleteImage to the cardButton div

    taskContainer.appendChild(cardButton); // Append cardButton to the taskContainer

    tasksContainer.appendChild(taskContainer);

    taskIdCounter++;
    closeModal();
}

function deleteTask(taskCard) {
    tasksContainer.removeChild(taskCard);
}

function togglePriority(event) {
    const priorityCircle = event.target;

    if (priorityCircle.classList.contains('priority-high')) {
        priorityCircle.classList.remove('priority-high');
        priorityCircle.classList.add('priority-low');
    } else {
        priorityCircle.classList.remove('priority-low');
        priorityCircle.classList.add('priority-high');
    }
}

function updatePriorityCircleColor(circleElement, isHighPriority) {
    circleElement.classList.remove('priority-high', 'priority-low');
    circleElement.classList.add(isHighPriority ? 'priority-high' : 'priority-low');
}

export { createTask, deleteTask, togglePriority, updatePriorityCircleColor };