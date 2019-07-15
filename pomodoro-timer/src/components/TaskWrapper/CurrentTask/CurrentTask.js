import React from 'react';
import styles from './CurrentTask.module.css';

const currentTask = (props) => (
    <div className={styles.currentTask}>
        <div className={styles.checkBox} />
        <div className={styles.todo}>
            <p>THE FIRST THING TO DO TODAY</p>
        </div>
        <div className={styles.time}>
            25:00
        </div>
    </div>
);

export default currentTask;