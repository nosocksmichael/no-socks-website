"use client";

import React, { useState } from 'react';

export default function TodoPage() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([input.trim(), ...todos]);
      setInput('');
    }
  };

  const deleteTodo = (idx: number) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <main className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Simple Todo List</h1>
      <form onSubmit={addTodo} className="flex mb-4">
        <input
          className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
          type="text"
          placeholder="Add a new todo..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <ul>
        {todos.length === 0 && (
          <li className="text-gray-400">No todos yet. Add one above!</li>
        )}
        {todos.map((todo, idx) => (
          <li key={idx} className="flex items-center justify-between py-2 border-b">
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(idx)}
              className="text-red-500 hover:underline text-sm"
              aria-label={`Delete todo: ${todo}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
} 