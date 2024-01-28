//todoActions.js
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc} from 'firebase/firestore';
import { firestore } from '../firebase';






export const addTodo = ( todo) => async (dispatch, getState) => {
  try {
    const { auth } = getState(); 
    const { docId } = auth; 

    const userDocRef = doc(firestore, 'users', docId);
    console.log(todo)
    await addDoc(collection(userDocRef, 'tasks'), {
      todo,
      completed: false,
      createdAt: new Date(),
    });


    dispatch(fetchTasks(docId));
  } catch (error) {
    console.error('Error adding data:', error.message);
  }
};

export const fetchTasks = (docId) => async (dispatch) => {
  try {
    const tasksCollectionRef = collection(firestore, 'users', docId, 'tasks');
    const querySnapshot = await getDocs(tasksCollectionRef);

    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data()
      });
    });

    console.log("Tasks received from Firestore:", tasks);

    dispatch({
      type: 'FETCH_TASKS_SUCCESS',
      payload: tasks,
    });
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
  }
};

// export const deleteTask = (docId, taskId) => async (dispatch, getState) => {
//   try {
//     const { firestore } = getState();
//     console.log("delete " ,taskId)
//     // const taskDocRef = doc(firestore, `users/${docId}/tasks/${taskId}`);
//     const taskDocRef = collection(firestore, 'users', docId, 'tasks');
//     await deleteDoc(taskDocRef);

//     dispatch({
//       type: 'DELETE_TASK',
//       payload: taskId,
//     });
//   } catch (error) {
//     console.error('Error deleting task:', error.message);
//   }
// };

export const deleteTask = (docId, taskId) => async (dispatch, getState) => {
  try {
  
    console.log("delete " ,taskId);

    const taskDocRef = doc(firestore, 'users', docId, 'tasks', taskId);
    await deleteDoc(taskDocRef);

    dispatch({
      type: 'DELETE_TASK',
      payload: taskId,
    });
  } catch (error) {
    console.error('Error deleting task:', error.message);
  }
};




export const editTask = (docId, taskId, updatedTask ,task) => async (dispatch, getState) => {
  try {
   
    console.log("docId",docId)
    console.log("taskId",taskId)
    console.log("uptask",updatedTask)
    const userDocRef = doc(firestore, 'users', docId);
   
    const taskRef = doc(firestore, 'users', docId, 'tasks', taskId);
    if (task==="todo") {
    
      await updateDoc(taskRef, { todo: updatedTask });
    } else {
      console.log(updatedTask)
      await updateDoc(taskRef, { completed: updatedTask });
    }
   
    console.log('Updated tasks:', updatedTask);
    dispatch(fetchTasks(docId));

    dispatch({
      type: 'EDIT_TASK',
      payload: { taskId, updatedTask },
    });
  } catch (error) {
    console.error('Error editing task:', error.message);
  }
};


