import { closeModal } from '../components/ui.js';

let taskIdCounter = 0;
let tasksContainer;

function createTask(){
    tasksContainer = document.querySelector('.tasks-container');
    const modalTitle = document.querySelector('#Title').value;
    const modalDate = document.querySelector('#Date').value;
    const modalPriority = document.querySelector('#Priority').checked;

    // Creates the card where the information will be displayed

    var taskContainer = document.createElement('div');
    taskContainer.classList.add('task-card');
    taskContainer.dataset.taskId = taskIdCounter; // Assign a unique identifier
    taskContainer.dataset.completed = false;

    const title = document.createElement('h2');
    title.textContent = modalTitle;
    taskContainer.appendChild(title);

    const cardButton = document.createElement('div');
    cardButton.classList.add('card-buttons'); 

    //If a Date is given apply it to the card

    if (modalDate) {
        const taskDate = new Date(modalDate);
        const formattedDate = `${taskDate.getMonth() + 1}/${taskDate.getDate()}/${taskDate.getFullYear()}`;

        const date = document.createElement('date');
        date.textContent = formattedDate;
        cardButton.appendChild(date); 
    }

    // Create the priority circle and set its initial color
    const priorityCircle = document.createElement('div');
    priorityCircle.classList.add('priority-circle');
    updatePriorityCircleColor(priorityCircle, modalPriority);

    priorityCircle.addEventListener('click', togglePriority);
    cardButton.appendChild(priorityCircle); 

   
    taskContainer.dataset.completed = !modalPriority;

    //Creates the delete button and adds functionality
    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.png'; // Update with the correct path to delete.png image
    deleteImage.alt = 'Delete';
    deleteImage.addEventListener('click', () => deleteTask(taskContainer));
    cardButton.appendChild(deleteImage); 

    taskContainer.appendChild(cardButton); 

    tasksContainer.appendChild(taskContainer);

    //Increases the ID by 1 for each task to avoid duplicates and closes the Modal
    taskIdCounter++;
    closeModal();
}

function deleteTask(taskCard) {
    tasksContainer.removeChild(taskCard);
}

function filterTasks(showCompleted) {
    const taskCards = document.querySelectorAll('.task-card');

   
    taskCards.forEach((taskCard) => {
        const isCompleted = taskCard.dataset.completed === 'true';

        console.log(`Task ID ${taskCard.dataset.taskId}: isCompleted = ${isCompleted}`);

        if (showCompleted === null || showCompleted === isCompleted) {
            taskCard.style.display = 'block';
        } else {
            taskCard.style.display = 'none';
        }
    });
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

export { createTask, deleteTask, togglePriority, updatePriorityCircleColor, filterTasks };