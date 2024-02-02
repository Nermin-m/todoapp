
import React, { useContext } from 'react';
import { MyContext } from './context/context';
import style from "./assets/mainbox.module.css";

function ImportedTasks() {
    const { state } = useContext(MyContext);
    const DeletedTasks = state.tasks.filter(task => task.priority === 'progress');

    return (
        <div className={style.main}>
            {DeletedTasks.map((task, index) => (
                <div key={index} className={style.boxs} style={{background:'#b9b9d0',color:'purple'}}>
                    <p>Title: {task.title}</p>
                    <p>Date: {task.date}</p>
                    <p>Description: {task.textare}</p>
                    <p>Deleted Tasks</p>
                </div>
            ))}
        </div>
    );
}

export default ImportedTasks;
