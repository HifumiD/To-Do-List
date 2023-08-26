import {createTodo} from './model.js'



function initializeUI(){
    const addButton = document.querySelector('.add-task')
    addButton.addEventListener('click',handleAddTodo)
    
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

export {initializeUI} ;