
import styles from "./Autorisation.module.css";

const Autorisation = ({isAutorized, setIsAutorized}) => {
    return <div className={isAutorized ? styles.autorisation : styles.autorisation_hidden}>
            <div className={styles.modal_content}>

    <div className={styles.modal_content_title}>Введите логин и пароль для входа в Личный кабинет</div>

    
    <div className={styles.modal_content_inputs}>
        <input type="text" placeholder="Логин"/>
        <input type="password"  id="exampleInputPassword1" placeholder="Пароль"/>
    </div>
    
    <button type="submit" className={styles.modal_submit}>Войти</button>
   
     
    <div className={styles.modal_content_text}><a href="#">Напомнить пароль</a></div>
    <div className={styles.modal_content_text}><a href="#">Регистрация</a></div>

    </div>

    </div>
}

export default Autorisation;