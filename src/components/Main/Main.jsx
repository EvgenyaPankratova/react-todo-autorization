import styles from "./Main.module.css";
import ToDoList from "../ToDoList/ToDoList";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import React from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Autorisation from "../Autorisation/Autorisation";
import axios from "axios";

const Main = () => {
  const initialState = [
    //задача на случай если сервер не работает и надо что-то отобразить.
    {
      title: "Создать проект",
      id: 10,
      isActive: true,
      created: new Date().toLocaleString("ru", {
        year: "2-digit",
        month: "2-digit",
        day: "numeric",
      }),
      priority_task: "высокий",
      status_task: "средний",
      responsible_id: null,
    },
  ];

  const [users, setUsers] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [activeTasks, setActiveTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [activeButton, setActiveButton] = useState(false);
  const [finishedButton, setFinishedButton] = useState(false);
  const [allTasks, setAllTasks] = useState(initialState);
  const [isAutorized, setIsAutorized] = useState(false);
  const [user, setUser] = useState([]);
  const [inputLogin, setInputLogin] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/${inputLogin}`, {
        method: "GET",
        mode: "no-cors",
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log("Ошибка получения пользователя:", error);
      });

    axios
      .get("http://localhost:5000/api/tasks", {
        method: "GET",
        mode: "no-cors",
      })
      .then((res) => {
        console.log(res.data);
        setAllTasks(res.data);
      })
      .catch((error) => {
        console.log("Ошибка получения данных:", error);
      });
  }, [inputLogin, inputPassword]);

  const doneButtonToggle = () => {
    setFinishedTasks(allTasks.filter((elem) => elem.isActive === false));
    setFinishedButton(true);
    setActiveButton(false);
  };

  const activeButtonToggle = () => {
    setActiveTasks(allTasks.filter((elem) => elem.isActive));
    setActiveButton(true);
    setFinishedButton(false);
  };

  const allButtonToggle = () => {
    setActiveButton(false);
    setFinishedButton(false);
  };

  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  const ref = useRef();

  return (
    <main className={styles.main}>
      <Autorisation
        users={users}
        isAutorized={isAutorized}
        setIsAutorized={setIsAutorized}
        user={user}
        setUser={setUser}
        inputLogin={inputLogin}
        setInputLogin={setInputLogin}
        inputPassword={inputPassword}
        setInputPassword={setInputPassword}
      />

      <h1 className={styles.title}>Задачи</h1>

      <div className={styles.main_block}>
        <button
          className={styles.button_new_task}
          onClick={() => setShowNewTaskForm(!showNewTaskForm)}
          ref={ref}
        >
          Новая задача
        </button>

        <ToDoList
          allTasks={allTasks}
          newTask={newTask}
          setAllTasks={setAllTasks}
          activeTasks={activeTasks}
          finishedTasks={finishedTasks}
          activeButton={activeButton}
          finishedButton={finishedButton}
          setActiveTasks={setActiveTasks}
          setFinishedTasks={setFinishedTasks}
          showNewTaskForm={showNewTaskForm}
          setShowNewTaskForm={setShowNewTaskForm}
        />
        <div className={styles.main_block_buttons}>
          <button
            className={classNames(
              styles.main_button,
              !activeButton && !finishedButton ? styles.button_active : null
            )}
            onClick={allButtonToggle}
          >
            Все
          </button>
          <button
            className={classNames(
              styles.main_button,
              activeButton ? styles.button_active : null
            )}
            onClick={activeButtonToggle}
          >
            Активные
          </button>
          <button
            className={classNames(
              styles.main_button,
              finishedButton ? styles.button_active : null
            )}
            onClick={doneButtonToggle}
          >
            Завершённые
          </button>
        </div>
      </div>
      <NewTaskForm
        showNewTaskForm={showNewTaskForm}
        setShowNewTaskForm={setShowNewTaskForm}
      />
    </main>
  );
};
export default Main;
