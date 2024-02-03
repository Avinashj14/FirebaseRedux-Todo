import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../../actions/todoActions';
import EditTaskModal from './EditTask';
import { deleteTask } from '../../actions/todoActions';
import { editTask } from '../../actions/todoActions';
import Moment from 'react-moment';




const Tasks = () => {
  const dispatch = useDispatch();
  const docId = useSelector(state => state.auth.docId);
  const tasks = useSelector(state => state.todo.tasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (docId) {
      dispatch(fetchTasks(docId));
    }
  }, [dispatch, docId]);


  const handleDelete = (taskId,tasktodo) => {

    dispatch(deleteTask(docId, taskId,tasktodo)); 
  };


  const handleEditClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };
  const handleCheckboxChange = (taskId, completed) => {
    console.log("Checkbox changed:", taskId, completed);
    const updatedCompleted = !completed;
    dispatch(editTask(docId, taskId, updatedCompleted, "completed"));
  };
  if (tasks === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      
      {tasks === undefined ? (
        <p>No tasks available</p>
      ) : (
       
        <div id="app" className="min-h-screen text-gray-700 subpixel-antialiased p-8 bg-gray-700">
   <h2 className='text-white'>Tasks</h2>
  <div className="container  mx-auto">
   
     
      <div className="bg-white shadow-lg hover:shadow-xl rounded-md overflow-hidden">
      
         <table className="table flex table-auto w-full leading-normal">
          <thead className="uppercase text-gray-600 text-xs font-semibold bg-gray-200">
            <tr className="hidden md:table-row">
             
              <th className="text-center p-3"></th>
              <th className="text-center p-3">Todo</th>
              <th className="text-center p-3">Completed</th>
              <th className="text-center p-3">Created At</th>
              <th className="text-center p-3">Action</th>
            </tr>
          </thead>
          <tbody className="flex-1 text-gray-700 sm:flex-none">
            {tasks.map(task => (
              <tr key={task.id}>
                <td className="p-1 md:p-3"> <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(task.id, task.completed)} /></td>
                <td className="p-1 md:p-3" style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.todo}</td>
                <td className="p-1 md:p-3">{task.completed ? 'Completed' : 'Pending'}</td>
                {/* <td className="p-1 md:p-3">{new Date(task.createdAt.seconds * 1000).toLocaleString()}</td> */}
                <td className="p-1 md:p-3">
                <Moment format="dddd [at] h:mm A">{task.createdAt.seconds * 1000}</Moment>
                </td>
                <td className="p-1 md:p-3">
                     <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => handleEditClick(task)}>Edit</button>  
                <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handleDelete(task.id,task.todo)}> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div></div></div>
      )}
      {isModalOpen && (
        <EditTaskModal task={selectedTask} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Tasks;   