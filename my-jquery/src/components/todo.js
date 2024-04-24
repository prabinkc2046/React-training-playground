import { useMutation, useQueryClient } from '@tanstack/react-query';

// Dummy API functions for CRUD operations

// Simulate adding a todo
const createTodoAPI = async (newTodo) => {
    // Simulate an asynchronous API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
  
    // Simulate success
    return { id: newTodo.id, text: newTodo.text };
  };
  
  // Simulate updating a todo
  const updateTodoAPI = async (updatedTodo) => {
    // Simulate an asynchronous API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
  
    // Simulate success
    return { id: updatedTodo.id, text: updatedTodo.text };
  };
  
  // Simulate deleting a todo
  const deleteTodoAPI = async (todoId) => {
    // Simulate an asynchronous API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
  
    // Simulate success
    return todoId;
  };
  
export default function TodoApp() {
  const queryClient = useQueryClient();

  // Mutation function to add a new todo
  const addTodoMutation = useMutation({ mutationFn: newTodo => createTodoAPI(newTodo), 
    onSuccess: () => {
      queryClient.invalidateQueries('todos'); // Invalidate the todos query to refetch data
    }});

  // Mutation function to update an existing todo
  const updateTodoMutation = useMutation({ mutationFn: updatedTodo => updateTodoAPI(updatedTodo), 
    onSuccess: () => {
      queryClient.invalidateQueries('todos'); // Invalidate the todos query to refetch data
    },
  });

  // Mutation function to delete a todo
  const deleteTodoMutation = useMutation({mutationFn: todoId => deleteTodoAPI(todoId), 
    onSuccess: () => {
      queryClient.invalidateQueries('todos'); // Invalidate the todos query to refetch data
    },
  });

  // Function to handle adding a new todo
  const handleAddTodo = async (newTodo) => {
    try {
      await addTodoMutation.mutateAsync(newTodo);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Function to handle updating an existing todo
  const handleUpdateTodo = async (updatedTodo) => {
    try {
      await updateTodoMutation.mutateAsync(updatedTodo);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = async (todoId) => {
    try {
      await deleteTodoMutation.mutateAsync(todoId);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Dummy todo data
  const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a todo app' },
    { id: 3, text: 'Deploy to production' },
  ];

  return (
    <div>
      {/* Todo list rendering */}
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleUpdateTodo({ id: todo.id, text: 'Updated Text' })}>Update</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
      {/* Add new todo form */}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo({ id: todos.length + 1, text: e.target.elements.todoText.value });
        e.target.reset();
      }}>
        <input type="text" name="todoText" placeholder="Enter new todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
