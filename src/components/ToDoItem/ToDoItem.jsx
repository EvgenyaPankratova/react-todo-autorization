
import {useEffect, useState } from "react";
import styles from "./ToDoItem.module.css";
import classNames from "classnames";
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { BsFillPencilFill } from 'react-icons/bs';
import ToolTip from "../ToolTip/ToolTip";
import React from "react";





const ToDoItem = ({allTasks,
     setAllTasks, 
     activeTasks, 
     finishedTasks,
      activeButton,
       finishedButton,
       setActiveTasks,
    setFinishedTasks,
    showNewTaskForm, 
    setShowNewTaskForm
    }) => {
   
    const [selected, setSelected] = useState([]);
    const [showToolTip, setShowToolTip] = useState(false);
    const [toolTipId, setToolTipId] = useState('');

  

    const onMouseEnterHandler = (e) => {
        setToolTipId(e.currentTarget.id);
        setShowToolTip(true);
      };
    
      const onMouseLeaveHandler = () => {
        setToolTipId('');
        setShowToolTip(false);
      };


    const handleToggle = (e, elem, index) => {
            setAllTasks((prev) => prev.map(item => {
                return elem.id === item.id ? {...item, isActive : !item.isActive} : item //создали новый объект, скопировав старые сво-ва и поменяли isActive
            }))
           
            if (e.target.checked) {
                setSelected([...selected, elem]);
            }
             
            
    }

    let tasks = activeButton ? activeTasks : finishedButton ? finishedTasks : allTasks;

    
   

    const handlerDelete = (elem) => {
        setAllTasks(tasks.filter(item => item.id !== elem.id))
        setActiveTasks(tasks.filter(item => item.id !== elem.id))
        setFinishedTasks(tasks.filter(item => item.id !== elem.id))
    }

    // добавление новой задачи, просто поле, надо модернизировать
    // const handleClick = (elem) => {
    //     setAllTasks((prev) => prev.map(item => {
    //         return elem.id === item.id ? {...item, name: prompt("введите значение") ?? "задача" } : item 
    //     }))
    //   }

   
   
   
    return (
        (tasks.length === 0) ? (<div>Этот список пуст</div>) :

        (<div className={styles.tasks}>
             
            {tasks.map((task, index) => {
                task.isActive = true
                return  <div key={task.id}  className={classNames(!task.isActive  ? styles.task_checked : null, styles.task)}> <input checked = {!task.isActive && true}  onChange={(e) => handleToggle(e, task, index)} type="checkbox"></input>
                {task.title}
        
                
                <div className={styles.task_info}>
                <div ><span className={styles.task_time_title}>Дата окончания:</span> {task.finished || 'не установлено'}</div>
                <div className={styles.task_priority}><span className={styles.task_time_title}>Приоритет:</span> {task.priority_task}</div>
                <div className={styles.task_status}><span className={styles.task_time_title}>Статус:</span> {task.status_task}</div>
                <div className={styles.task_responsible}><span className={styles.task_time_title}>Ответственный (id):</span> {task.responsible_id || 'не назначен'}</div>
                </div>

                <h2 id="edit"  onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className={styles.task_edit}   onClick = {() => setShowNewTaskForm(!showNewTaskForm)} ><BsFillPencilFill/></h2>
                
                <h2 id="del" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className={styles.task_delete} onClick={() => handlerDelete(task)}>< RiDeleteBin2Fill/></h2> </div>
            })}

{showToolTip && <ToolTip toolTipId={toolTipId}/>}
            
        </div>  )
        
    );
}

export default ToDoItem;