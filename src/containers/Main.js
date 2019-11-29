import React, { Component } from 'react';
import styles from './Main.module.css';
import TaskWrapper from '../components/TaskWrapper/TaskWrapper';
import AddTask from '../components/TaskWrapper/AddTask/AddTask';
import CurrentTask from '../components/TaskWrapper/CurrentTask/CurrentTask';

class Main extends Component {

    state = {
        takingBreak: false
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={this.state.takingBreak ? styles.leftBreak : styles.leftMain}>
                    <TaskWrapper>
                        <AddTask />
                        <CurrentTask />
                    </TaskWrapper>
                </div>
                <div className={styles.right}>
                </div>
            </div>
        );
    }

}

export default Main;