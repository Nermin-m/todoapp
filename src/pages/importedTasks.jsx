
import React, { useContext } from 'react';
import { MyContext } from './context/context';
import style from "./assets/mainbox.module.css";
import purple from "./assets/purple.png";

function ImportedTasks() {
    const { state } = useContext(MyContext);
    const importantTasks = state.tasks.filter(task => task.priority === 'important');

    return (
        <div className={style.main}>
            {state.tasks.map((task, index) => (
                <div key={index} className={style.boxs} >
                    <p>Title: {task.title}</p>
                    <p>Date: {task.date}</p>
                    <p>Description: {task.textare}</p>
                    <p>Important Tasks</p>
                </div>
            ))}
        </div>
    );
}

export default ImportedTasks;
