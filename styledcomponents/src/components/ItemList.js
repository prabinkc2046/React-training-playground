import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { API } from '../Constant';
export default function ItemList() {
const {data: todos, error, loading } = useFetch(API);
  return (
    <div>
        {todos.map((item) => (
            <ul>
                <li key={item._id}>
                    {item.name}
                </li>
            </ul>
        ))}
    </div>
  )
}
