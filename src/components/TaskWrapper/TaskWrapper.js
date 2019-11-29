import React from 'react';
import styles from './TaskWrapper.module.css';

const taskWapper = (props) => (
    <div className={styles.taskWapper}>{props.children}</div>
);

export default taskWapper;