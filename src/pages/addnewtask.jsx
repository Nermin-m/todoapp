import React, { useContext } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./assets/addtask.module.css";
import { MyContext } from "./context/context";
import { createRoot } from 'react-dom';


function AddNewTask(props) {
    const initialValues = {
        title: '',
        date: '',
        textare: '',
        priorityimp: '',
        priority:''
    };
    const { state, dispatch } = useContext(MyContext);

    const validate = values => {
        const errors = {};

        if (!values.title) {
            errors.title = 'Title is required';
        } else if (!values.date) {
            errors.date = 'Date is required';
        }

        return errors;
    };

    const handleSubmit = (values, { resetForm }) => {
        dispatch({ type: 'SET_TASKS', payload: [...state.tasks, values] });
        console.log(values.priority);
        resetForm();
    };

    return (
        <div>
            <div className={style.form}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
                    <Form>
                        <div className={style.input}>
                            <label>Title:</label>
                            <Field type="text" name="title" placeholder={'e.g, study for the test'} />
                            <ErrorMessage name={'title'} component='div' style={{ color: 'darkred' }} />
                        </div>
                        <div className={style.input}>
                            <label>Date:</label>
                            <Field type="date" name="date" />
                            <ErrorMessage name={'date'} component='div' className='error' />
                        </div>
                        <div className={style.input}>
                            <label>Description:</label>
                            <ErrorMessage name={'textare'} component='div' className='error' />
                            <Field as="textarea" name="textare" placeholder={'Description'} />
                        </div>
                        <div className={style.input}>
                            <label>Priority:</label>
                            <Field as="select" name="priority">
                                <option value="important">Important</option>
                                <option value="progress">Progress</option>
                            </Field>
                        </div>
                        <button type="submit" className={style.btnsubmit}>Add Task</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default AddNewTask;
