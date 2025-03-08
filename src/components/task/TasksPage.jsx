// TasksPage.jsx
import React, {useState, useEffect} from 'react';
import {getTasks, createTask, updateTask, deleteTask} from '../../services/taskService';
import TaskItem from './TaskItem';
import TaskDialog from './TaskDialog';
import TaskSummary from './TaskSummary';
import styles from './TasksPage.module.css';

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddTask = () => {
        setEditingTask(null);
        setDialogOpen(true);
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setDialogOpen(true);
    };

    const handleDeleteTask = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
            try {
                await deleteTask(id);
                fetchTasks();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleToggleCompleted = async (task) => {
        try {
            await updateTask(task.id, {completed: !task.completed});
            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDialogSave = async (taskData) => {
        try {
            if (editingTask) {
                await updateTask(editingTask.id, taskData);
            } else {
                await createTask(taskData);
            }
            setDialogOpen(false);
            fetchTasks();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <h1>Tareas</h1>
                    <button onClick={handleAddTask} className={styles.addButton}>
                        Añadir Tarea
                    </button>
                </div>
                <div className={styles.taskList}>
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onEdit={() => handleEditTask(task)}
                            onDelete={() => handleDeleteTask(task.id)}
                            onToggleCompleted={() => handleToggleCompleted(task)}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.sidebar}>
                <TaskSummary tasks={tasks}/>
            </div>
            {dialogOpen && (
                <TaskDialog
                    isOpen={dialogOpen}
                    onClose={handleDialogClose}
                    onSave={handleDialogSave}
                    initialData={editingTask}
                />
            )}
        </div>
    );
};

export default TasksPage;
