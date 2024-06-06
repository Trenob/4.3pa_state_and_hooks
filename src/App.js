import React from 'react';
import './App.css';
import Counter from './Counter';
import FormInput from './FormInput';
import ToDo from './ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Task 1: Simple Counter</h3>
        <p>Create a simple counter component that increments and decrements a count value.</p>
        <Counter />

        <h3>Task 2: Form Input</h3>
        <p>Implement a form input component that allows users to input text.</p>
        <FormInput />

        <h3>Task 3: Todo List</h3>
        <p>Create a simple todo list component</p>
        <ToDo/>

      </header>
    </div>
  );
}
export default App;
