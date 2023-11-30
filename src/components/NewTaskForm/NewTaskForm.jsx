

import classNames from "classnames";
import styles from "./NewTaskForm.module.css";


const NewTaskForm = ({showNewTaskForm, setShowNewTaskForm}) => {

    //  const addNewTask = (elem) => {
    //     setAllTasks((prev) => prev.map(item => {
    //         return elem.id === item.id ? {
    //             ...item, 
    //             name: prompt("введите значение") ?? "задача" ,
    //             time: спарсить дату ?? '12.03.25',
    //             priority: инпут ?? "средний",
    //             status: инпут ?? "средний",
    //             responsible: инпут ?? "кто-то",
    //         } : item 
    //     }))
    //   }

    return (
        <div className={showNewTaskForm ? styles.new_task_form_container : styles.new_task_form_hidden}>

        <div className={styles.new_task__form_title}>Информация о задаче</div>

        <div className={styles.new_task_form}>
        <input type="text"  placeholder="Название"/>
        <input type="text"  placeholder="Дата окончания" pattern="^([1-9][0-9]?)\\.([1-9][0-9]?)\\.([1-2][0-9]{3})$"/>
        <input type="text"  placeholder="Приоритет"/>
        <input type="text"  placeholder="Статус"/>
        <input type="text"  placeholder="Ответственный"/>
        <button className={styles.new_task_ok_button}>Подтвердить изменения</button>
        <span className={styles.close} onClick={() => setShowNewTaskForm(false)}>
        x
      </span>

      </div>

     </div>
    );
}

export default NewTaskForm;