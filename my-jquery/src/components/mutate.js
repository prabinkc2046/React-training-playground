import React from 'react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// Mimicking a data array with an object inside
const initialData = {
  items: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]
};

// A function to fetch the initial data
const fetchData = async () => {
  // Simulating an API call
  return initialData;
};

// Our React component
function DataComponent() {

const queryClient = useQueryClient();
  // Querying data
const queryResult = useQuery({
    queryKey: ["123"],
    queryFn: () => fetchData()
});

  // Defining mutation functions
  const addMutation = useMutation({
    mutationFn: newItem => {
        new Promise( resolve => {
            setTimeout(() => {
                initialData.items.push(newItem);
                resolve(newItem)
            },1000)
        });   
    },
    onSuccess: () => {
        queryClient.invalidateQueries("123");
    }

  });

  const deleteMutation = useMutation({
    mutationFn: itemId => {
        new Promise(resolve => {
            setTimeout(() => {
              initialData.items = initialData.items.filter(item => item.id !== itemId);
              resolve(itemId);
            }, 1000); // Simulating delay
          })
    },
    onSuccess: () => {
        queryClient.invalidateQueries(["123"])
    }
  });

  const updateMutation = useMutation(updatedItem =>
    // Simulating updating item in the data array
    new Promise(resolve => {
      setTimeout(() => {
        const index = initialData.items.findIndex(item => item.id === updatedItem.id);
        if (index !== -1) {
          initialData.items[index] = updatedItem;
          resolve(updatedItem);
        }
      }, 1000); // Simulating delay
    })
  );

  // Function to handle adding an item
  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: `Item ${initialData.items.length + 1}` };
    addMutation.mutate(newItem);
  };

  // Function to handle deleting an item
  const handleDeleteItem = itemId => {
    deleteMutation.mutate(itemId);
  };

  // Function to handle updating an item
  const handleUpdateItem = updatedItem => {
    updateMutation.mutate(updatedItem);
  };

  if (queryResult.isLoading) return <div>Loading...</div>;
  if (queryResult.isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {queryResult.data.items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            <button onClick={() => handleUpdateItem({ ...item, name: 'Updated Item' })}>Update</button>
          </li>
        ))}
      </ul>
      <button disabled={queryResult.isLoading} onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default DataComponent;
