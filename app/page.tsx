'use client';

import { useState } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputValue,
        completed: false,
        createdAt: new Date(),
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-lg w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Moltbot Todo
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            现代化的待办事项管理应用
          </p>
        </div>

        <div className="mt-8">
          <div className="flex mb-6">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="添加新的待办事项..."
              className="flex-grow border border-gray-300 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-r-lg transition duration-200"
            >
              添加
            </button>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-3 text-gray-700">
              待办事项 ({todos.filter(t => !t.completed).length} 项未完成)
            </h2>
            
            {todos.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">暂无待办事项，添加一个新的开始吧！</p>
              </div>
            ) : (
              <ul className="space-y-3">
                {todos
                  .filter(todo => !todo.completed)
                  .map((todo) => (
                    <li
                      key={todo.id}
                      className="flex justify-between items-center p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => toggleTodo(todo.id)}
                          className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
                        />
                        <span className="ml-3 text-gray-700">{todo.text}</span>
                      </div>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
              </ul>
            )}

            {todos.filter(t => t.completed).length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-3 text-gray-700">
                  已完成 ({todos.filter(t => t.completed).length} 项)
                </h2>
                <ul className="space-y-3">
                  {todos
                    .filter(todo => todo.completed)
                    .map((todo) => (
                      <li
                        key={todo.id}
                        className="flex justify-between items-center p-4 rounded-lg border border-gray-200 bg-green-50"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="h-5 w-5 text-green-500 rounded focus:ring-green-400"
                          />
                          <span className="ml-3 line-through text-gray-500">{todo.text}</span>
                        </div>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}