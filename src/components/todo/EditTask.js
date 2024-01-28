import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from '../../actions/todoActions';


const EditTaskModal = ({ task, closeModal }) => {
  const dispatch = useDispatch();
  const [editedTodo, setEditedTodo] = useState(task.todo);
  const docId = useSelector(state => state.auth.docId);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("task",task)
    console.log("task.id",task.id)
    console.log("afterEdit",editedTodo)
    dispatch(editTask(docId,task.id, editedTodo,"todo"));
    closeModal(); 
  };

  return (
    <div className="fixed bg-black bg-opacity-50 backdrop-blur-sm flex  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
  
    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      EditTask
                  </h3>
                  <button type="button" onClick={closeModal} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
       
              <div class="p-4 md:p-5 space-y-4">
          <form onSubmit={handleSubmit}>
     
          <input type="text" id="simple-search"  value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required/>
   
          
              <button data-modal-hide="popup-modal" type="submit" class="text-white  mt-2 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
              Save Changes
                  </button>
          </form>
          </div>
        </div>
        </div>
  );
};

export default EditTaskModal;
