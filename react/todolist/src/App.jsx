import { useState } from "react";

import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setToDos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setToDos((currenttodos) => {
      return [
        ...currenttodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    return (
      <>
        <form onSubmit={handleSubmit} className="new-item-form">
          <div className="form-row">
            <label htmlFor="item">New item</label>
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
            />
          </div>
          <button className="btn">add item</button>
        </form>

        <h1 className="header">Todo List</h1>
      </>
    );
  }
}
