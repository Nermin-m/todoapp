import React, { useContext, useState } from 'react';
import { MyContext } from "./context/context";
import style from './assets/today.module.css';

function TodayTasks(props) {
    const { state } = useContext(MyContext);
    const [selectedRows, setSelectedRows] = useState([]);
    const [deletedRows, setDeletedRows] = useState([]);

    const handleSelect = (index) => {
        const updatedSelectedRows = [...selectedRows, index];
        setSelectedRows(updatedSelectedRows);
    };

    const handleDelete = (index) => {
        const updatedDeletedRows = [...deletedRows, index];
        setDeletedRows(updatedDeletedRows);
    };

    const isRowSelected = (index) => selectedRows.includes(index);
    const isRowDeleted = (index) => deletedRows.includes(index);

    return (
        <div>
            <div>
                <table className={style.myTable}>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Delete</th>
                        <th>Select</th>
                    </tr>
                    </thead>
                    <tbody>
                    {state.tasks.map((task, index) => (
                        <tr key={index}
                            className={`${isRowSelected(index) ? style.selected : ''} ${isRowDeleted(index) ? style.deleted : ''}`}>
                            <td>{task.title}</td>
                            <td>{task.date}</td>
                            <td>{task.textare}</td>

                            <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={() => handleSelect(index)}>Select</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TodayTasks;
