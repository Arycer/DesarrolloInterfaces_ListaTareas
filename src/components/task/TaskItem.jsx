// TaskItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskItem.module.css';

const TaskItem = ({task, onEdit, onDelete, onToggleCompleted}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={task.imageUrl} alt={task.title} className={styles.image}/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{task.title}</h2>
                <p className={styles.description}>{task.description}</p>
                <p className={styles.dueDate}>
                    <strong>Fecha límite:</strong> {task.dueDate}
                </p>
                <div className={styles.actions}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={onToggleCompleted}
                        />
                        Completada
                    </label>
                    <button onClick={onEdit} className={styles.editButton}>
                        Editar
                    </button>
                    <button onClick={onDelete} className={styles.deleteButton}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        dueDate: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
};


export default TaskItem;
