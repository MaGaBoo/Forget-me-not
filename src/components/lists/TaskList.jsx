/* eslint-disable multiline-ternary */
/* eslint-disable no-import-assign */
import React, { useState } from "react";

/**
 * Component to manage Task List
 *
 * @returns {React.Component}
 */

const TaskList = () => {
  /* const tasks = useList([]); */

  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  /**
   * Add new task to Task List
   * v2: new task is object type to be completed
   */

  const addNewTask = () => {
    setTaskList([...taskList, { task: newTask, completed: false }]);
    setNewTask("");
  };

  /**
   * Function to check if Task List is empty
   * @returns true if tasklist.length === 0
   */

  const isTasksEmpty = () => taskList.length === 0;

  /**
   * Edit new task
   * @param {*} e - OnChange Event
   */

  const editNewItem = (e) => setNewTask(e.target.value);

  /**
   * Function to remove a task from the list (currently not used)
   * @param {*} index - Index of task to remove
   */

  /*   const removeTask = (index) => {
    const newTaskList = taskList.filter((task, i) => i !== index);
    setTaskList(newTaskList);
  }; */

  /**
   * Add new item to Check List when Enter key is pressed
   * @param {*} e - Default onKeyDown event
   */

  const insertNewItemWithEnterKey = (e) => e.key === "Enter" && addNewTask();

  const onToggleCompleteItem = (index) => {
    const newTaskList = taskList;
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskList([...newTaskList]);
  };

  return (
    <div className="container-md">
      <h1 className="text-3xl text-sky-700">Task List</h1>
      <div className="input-container mb-3">
        <input
          className="input me-3"
          value={newTask}
          onKeyDown={insertNewItemWithEnterKey}
          onChange={editNewItem}
          placeholder="New task"
          type="text"
        ></input>

        <button className="btn btn-success" onClick={addNewTask}>
          Create task
        </button>
      </div>

      {isTasksEmpty() ? (
        <p>No task list yet!</p>
      ) : (
        <ul>
          {taskList.map((item, index) => (
            <li className="list-group-item" key={index}>
              <input
                style={{ textDecoration: "line-through" }}
                className="form-check-input me-2"
                type="checkbox"
                onClick={() => onToggleCompleteItem(index)}
                onChange={() => {}}
                checked={item.completed}
              />
              {item.task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
