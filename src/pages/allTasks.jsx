import style from './assets/alltsk.module.css';
import React, { useContext } from 'react';
import { MyContext } from './context/context';
import purple from './assets/77a58PICX6fAU496cafYc_PIC2018.png_300-removebg-preview.png';

function AllTasks(props) {
    const { state } = useContext(MyContext);

    return (
        <div>
            <div className={style.main}>
                {state.tasks.map((task, index) => (
                    <div key={index} className={style.boxs}>
                        <img src={purple} alt="Purple Flower" style={{width:'100px'}}/>
                        <p>Title: {task.title}</p>
                        <p>Date: {task.date}</p>
                        <p>Description: {task.textare}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllTasks;
