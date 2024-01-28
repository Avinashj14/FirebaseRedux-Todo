// todoReducer.js
const initialState = {
  todos: [],
};
const ADD_TODO = 'ADD_TODO';
// const ADD_SAMPLE_DATA = 'ADD_SAMPLE_DATA';


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
  //   case 'ADD_SAMPLE_DATA':
  //     return {
  //       ...state,
  //       todos: [...state.todos, action.payload],
  //     };
  case 'FETCH_TASKS_SUCCESS':
    return {
      ...state,
      tasks: action.payload,
     
    };
    case 'EDIT_TASK':
      // const { taskId, updatedTask } = action.payload;
      // return {
      //   ...state,
      //   tasks: state.tasks.map((task) =>
      //     task.id === taskId ? { ...task, ...updatedTask } : task
     
      //   ),
      // };
      const { taskId, updatedTask } = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          //console.log('Updated task:', { task, ...updatedTask });
          return { ...task, ...updatedTask };
        } else {
          return task;
        }
      });
      return {
        ...state,
        tasks: updatedTasks,
      };



      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
        };
    
    default:
      return state;
   }
};

export default todoReducer;
