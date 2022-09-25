/* eslint-disable multiline-ternary */
/* eslint-disable no-import-assign */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  addTask,
  getTasks,
  toggleComplete,
} from "../../firebase/taskController";

/**
 * Component to manage Task List
 *
 * @returns {React.Component}
 */

const TaskList = ({ showSettings, setShowSettings }) => {
  /* const tasks = useList([]); */

  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTasks()
      .then((tasks) => setTaskList([...tasks]))
      .catch((e) => console.error(e));
  }, []);

  /**
   * Add new task to Task List
   * v2: new task is object type to be completed
   */

  const addNewTask = () => {
    if (newTask === "");

    // Adding new task to db
    const task = { task: newTask, completed: false };
    addTask(task).then(() => {
      // Once added, render in tasklist state
      return setTaskList([...taskList, task])
        .catch((e) => console.error(e))
        .finally(() => setNewTask(""));
    });
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

  // Update new task state on db
  //  Once updated, renders all task in tasklist state

  const onToggleCompleteItem = (index) => {
    const task = taskList.find((t) => t.id === index);
    // Update task state on db
    toggleComplete(task)
      .then(async () => {
        const newTaskList = await getTasks(); // new call to db to get tasks again
        return setTaskList([
          ...newTaskList,
        ]);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <header className="flex justify-between m-4">
        <h1
          className="text-3xl text-pink-900 font-semibold dark:text-pink-400 mb-2"
          style={{ fontFamily: "Satisfy", fontSize: "3rem" }}
        >
          Forget-me-not v2
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="main-btn"
          onClick={() => setShowSettings(!showSettings)}
        >
          {!showSettings ? "Show settings" : "Hide settings"}
        </motion.button>
      </header>
      <div className="container my-5 ml-5">
        <div>
          <input
            className="shadow py-2 px-2 rounded-lg outline-non transition-all duration-300 focus:ring-2 mr-2 dark:bg-neutral-700"
            value={newTask}
            onKeyDown={insertNewItemWithEnterKey}
            onChange={editNewItem}
            placeholder="New task"
            type="text"
          ></input>

          <button className="main-btn" onClick={addNewTask}>
            Create task
          </button>
        </div>

        {isTasksEmpty() ? (
          <p className="py-3">No task list yet!</p>
        ) : (
          <ul>
            {taskList.map((item, index) => (
              <motion.li
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                className="mt-2"
                key={index}
              >
                <label className="cursor-pointer">
                  {" "}
                  {/* this label allows to mark task as completed by clicking on text as well */}
                  <input
                    style={{ textDecoration: "line-through" }}
                    className="me-2 checked:bg-pink-500"
                    type="checkbox"
                    onClick={() => onToggleCompleteItem(item.id)}
                    onChange={() => {}}
                    checked={item.completed}
                  />
                  <span
                    className={`ml-2 text-gray-800 dark:text-gray-100 text-sm italic ${
                      item.completed && "line-through"
                    }`}
                  >
                    {item.task}
                  </span>
                </label>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TaskList;
