import styles from "./Main.module.css";
import ToDoList from "../ToDoList/ToDoList"
import {useRef, useState } from "react";
import classNames from "classnames";
import React from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Autorisation from "../Autorisation/Autorisation";


const Main = () => {

const initialState = [
{
name: 'Создать проект',
id: Math.random() * 100,
isActive: true,
haveImg: false,
fullImage: false,
time: new Date().toLocaleString("ru", {
    year: "2-digit",
    month: "2-digit",
    day: "numeric",
  }),
  priority: 'высокий',
  status: 'средний',
  responsible: 'пользователь',
},]

    const [newTask, setNewTask] = useState('');
    const [activeTasks, setActiveTasks] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);
    const [activeButton, setActiveButton] = useState(false);
    const [finishedButton, setFinishedButton] = useState(false);
    const [allTasks, setAllTasks] = useState(initialState);
    const [isAutorized, setIsAutorized] = useState(true);

    const createnewTaskOnChange = (newTask) => {
        setNewTask(newTask);
    }

    const createNewTaskOnSubmit = (newTask) => {
        setAllTasks((prev) => {
           return [
                ...prev, 
                {name: newTask,
                id: Math.random() * 100,
                isActive: true,
                time: new Date().toLocaleString("ru", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "numeric",
                    
                  })
                }    
            ]});
    }

    const doneButtonToggle = () => {
        setFinishedTasks(allTasks.filter(elem => elem.isActive === false))
        setFinishedButton(true);
        setActiveButton(false);
    }

    const activeButtonToggle = () => {
        setActiveTasks(allTasks.filter(elem => elem.isActive))
        setActiveButton(true);
        setFinishedButton(false);
    }

    const allButtonToggle = () => {
        setActiveButton(false);
        setFinishedButton(false);
    }

    const [showNewTaskForm, setShowNewTaskForm] = useState(false);

    const ref = useRef(); //отслеживаем инпут для очистки формы

    

            

    return (
        <main className={isAutorized ? styles.main : styles.main_filtered}>
           
           <Autorisation isAutorized={isAutorized} setIsAutorized={setIsAutorized}/>

            <h1 className={styles.title}>Задачи</h1>

           

            <div className={styles.main_block}>
                <button
                className={styles.button_new_task}
                onClick = {() => setShowNewTaskForm(!showNewTaskForm)}
                ref={ref}>Новая задача</button>

               


                <ToDoList  onChange={createnewTaskOnChange} onSubmit={createNewTaskOnSubmit} allTasks={allTasks} newTask={newTask} setAllTasks={setAllTasks} activeTasks={activeTasks}
                 finishedTasks={finishedTasks} activeButton={activeButton} finishedButton={finishedButton}
                 setActiveTasks={setActiveTasks} setFinishedTasks={setFinishedTasks}
                 showNewTaskForm={showNewTaskForm} setShowNewTaskForm={setShowNewTaskForm}
                 />
                <div className={styles.main_block_buttons}>
                    <button className={classNames(styles.main_button, !activeButton && !finishedButton ? styles.button_active : null )} onClick={allButtonToggle}>Все</button>
                    <button className={classNames(styles.main_button, activeButton  ? styles.button_active : null)} onClick={activeButtonToggle}>Активные</button>
                    <button className={classNames(styles.main_button, finishedButton  ? styles.button_active : null)} onClick={doneButtonToggle}>Завершённые</button>
                </div>
               
            </div>
            <NewTaskForm  showNewTaskForm={showNewTaskForm} setShowNewTaskForm={setShowNewTaskForm}/>
        </main>
    );
}
export default Main;