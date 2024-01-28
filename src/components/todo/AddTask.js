//AddTask.js

import React, { useState } from 'react';


const TaskForm = ({ addTask }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(todo);
    setTodo('');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-w-screen text-gray-700 subpixel-antialiased p-8 bg-gray-700" > 
      <div className="container  mx-auto">
      <input placeholder="Enter a todo"  required className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <br/>
      <button type="submit" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Add
      </button>
      </div>
      </div>
    </form>
  );
};

export default TaskForm;