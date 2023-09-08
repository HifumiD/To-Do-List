import {createTodo} from './model.js'
import { createTask } from './tasks.js';
import { filterTasks } from './tasks.js';


let taskIdCounter = 0;
let tasksContainer;

function initializeUI() {
    tasksContainer = document.querySelector('.tasks-container');

    const pageTitle = document.querySelector('.general')

    const addButton = document.querySelector('.add-task');
    addButton.addEventListener('click', handleAddTodo);

    const createButton = document.querySelector('.create-button');
    createButton.addEventListener('click', createTask);

    

    // Select the Filter Buttons
    const generalButton = document.querySelector('.general-button');
    const completedButton = document.querySelector('.completed-button');
    const uncompletedButton = document.querySelector('.uncompleted-button');

    generalButton.addEventListener('click', () => {
        // Show all tasks, regardless of completion status
        filterTasks(null);
        pageTitle.textContent = 'General';
    });

    completedButton.addEventListener('click', () => {
        // Show completed tasks
        filterTasks(true);
        pageTitle.textContent = 'High Prio';
    });

    uncompletedButton.addEventListener('click', () => {
        // Show uncompleted tasks
        filterTasks(false);
        pageTitle.textContent = 'Low Prio';
    });
}




function handleAddTodo(){
openModal()
}

function openModal(){
    //adds the class show to the grey background
    const modalBackground = document.querySelector('.modal-container')
    modalBackground.classList.add('show')
    //adds the class show to the Modal so it shows
    const modal = document.querySelector('.modal')
    modal.classList.add('show')
    
    const closeModalButton = document.querySelector('.close-modal')
    closeModalButton.addEventListener('click',closeModal)

    console.log(modalBackground.classList.contains('show'));

}

function closeModal(){
    
    const modalBackground = document.querySelector('.modal-container')
    modalBackground.classList.remove('show')

    const modal = document.querySelector('.modal')
    modal.classList.remove('show')

    console.log(modalBackground.classList.contains('show'));
}

export {closeModal};

export {initializeUI} ;