import React, { useState } from "react";
import './style.css'; // Importando o arquivo CSS
const url  = 'https://d1rluokkqqu56n.cloudfront.net/wpapp/uploads/2020/12/19100145/to-do-list.jpeg'



function TodoList() {
  const [tasks, setTasks] = useState([]); // Estado para armazenar as tarefas
  const [newTask, setNewTask] = useState(""); // Estado para armazenar a nova tarefa

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim()) { // Verifica se a nova tarefa não está vazia
      const taskObject = { text: newTask, completed: false }; // Tarefa com status de "não concluída"
      setTasks([...tasks, taskObject]);
      setNewTask(""); // Limpa o campo de input
    }
  };

  // Função para remover uma tarefa pelo índice
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Função para marcar uma tarefa como concluída
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="title">Lista de Tarefas</h1>
      <div className="input-area">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicionar nova tarefa"
          className="task-input"
        />
        <button className="add-button" onClick={addTask}>Adicionar Tarefa</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? ( // Verifica se a lista está vazia
          <div className="empty-list">
            <img src= {url} alt="Lista vazia" className="empty-image" width={400}/>
          </div>
        ) : (
          tasks.map((task, index) => (
            <div
              className={`task-item ${task.completed ? "completed" : ""}`}
              key={index}
              onClick={() => toggleComplete(index)} // Marca a tarefa como concluída ao clicar
            >
              <span className="task-text">{task.text}</span>
              <button className="remove-button" onClick={(e) => { e.stopPropagation(); removeTask(index); }}>
                Remover
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
