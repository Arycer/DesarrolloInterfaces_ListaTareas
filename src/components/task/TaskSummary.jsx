// TaskSummary.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskSummary.module.css';

const TaskSummary = ({tasks}) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    return (
        <div className={styles.summaryCard}>
            <h2>Resumen de Tareas</h2>
            <p><strong>Total:</strong> {totalTasks}</p>
            <p><strong>Completadas:</strong> {completedTasks}</p>
            <p><strong>Pendientes:</strong> {pendingTasks}</p>
        </div>
    );
};

TaskSummary.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
};


export default TaskSummary;
