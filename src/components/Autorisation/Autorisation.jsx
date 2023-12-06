import { useEffect, useState } from "react";
import styles from "./Autorisation.module.css";

const Autorisation = ({ users, isAutorized, 
  setIsAutorized,
  user,
  setUser,
  inputLogin,
  setInputLogin,
  inputPassword,
  setInputPassword

 }) => {
  

  const handleSubmit = () => {
    console.log(inputLogin, inputPassword);

    if(user.length === 0 || !user) {
      alert('неверный логин')
    }
    if(inputPassword === user.password_person){
      setIsAutorized(true);
      alert(`Добро пожаловать, ${user.first_name} ${user.last_name}!`);
    }else{
      alert(`неверный пароль`);
    }
  
  }

    

  return (
    <div
      className={
        !isAutorized ? styles.autorisation : styles.autorisation_hidden
      }
    >
      <div className={styles.modal_content}>
        <div className={styles.modal_content_title}>
          Введите логин и пароль для входа в Личный кабинет
        </div>

        <div className={styles.modal_content_inputs}>
          <input
            type="text"
            placeholder="Логин"
            value={inputLogin}
            onChange={(e) => setInputLogin(e.target.value)}
          />

          <input
            type="password"
            placeholder="Пароль"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          onClick={() => handleSubmit()}
          className={styles.modal_submit}
        >
          Войти
        </button>

        <div className={styles.modal_content_text}>
          <a href="#">Напомнить пароль</a>
        </div>
        <div className={styles.modal_content_text}>
          <a href="#">Регистрация</a>
        </div>
      </div>
    </div>
  );
};

export default Autorisation;
