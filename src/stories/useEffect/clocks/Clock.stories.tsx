import React, {useEffect, useState} from "react";
 import styles from './clock.module.css'
 export default {
     title: 'setInterval demo',
 }
 export const Clock = () => {
     const [time, setTime] = useState(new Date())

     useEffect (() => {
         const intervalId = setInterval(() => {
             setTime(new Date());
         }, 1000); //  обновляем всё время каждую секунду
         return () => clearInterval(intervalId); // очищаем интервал
     }, []);

     const hours = String(time.getHours()).padStart(2,'0');
     const minutes = String(time.getMinutes()).padStart(2,'0');
     const seconds = String(time.getSeconds()).padStart(2, '0');

     return (
         <div className={styles.container}>
             {hours} : {minutes} : {seconds}
         </div>
     )
 }
