import React, { Component } from 'react';
import styles from './Main.module.css';

class Main extends Component {

    state = {
        takingBreak: false
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={this.state.takingBreak ? styles.leftBreak : styles.leftMain}>
                    <div>AddTask</div>
                    <div>CurrentTask</div>
                    <div>TodoList</div>
                    <div>Clock</div>
                </div>
                <div className={styles.right}>
                </div>
            </div>
        );
    }

}

export default Main;