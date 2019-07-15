import React from 'react';
import styles from './AddTask.module.css';
import { ReactComponent as Add } from '../../../assets/icons/add.svg';

const addTask = (props) => (
    <div className={styles.taskInput}>
        <input type="text" placeholder="ADD A NEW MISSION..." />
        <button><Add /></button>
    </div>
);

export default addTask;