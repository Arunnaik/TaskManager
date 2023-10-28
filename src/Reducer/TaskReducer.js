
export const initialState = {
    tasks: [
      {
        id: 1,
        title: 'Test Task 1',
        description: 'Description',
        status: 'completed',
      },
    ],
  };
  export const taskReducer = (state, action) => {
    switch (action.type) {
     case 'SET_TASKS':
      return {
        tasks: action.payload,
      };
      case 'ADD_TASK':
        return {
          tasks: [...state.tasks, action.payload],
        };
      case 'MARK_COMPLETED':
        return {
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, status: 'completed' } : task
          ),
        };
     case 'DELETE_TASK':
       const remainingTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        tasks: remainingTasks,
      };
      default:
        return state;
    }
  };
