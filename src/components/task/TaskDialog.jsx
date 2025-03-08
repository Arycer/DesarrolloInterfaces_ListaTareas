// TaskDialog.jsx
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './TaskDialog.module.css';

const TaskDialog = ({isOpen, onClose, onSave, initialData}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description);
            setImageUrl(initialData.imageUrl);
            setDueDate(initialData.dueDate);
            setCompleted(initialData.completed);
        } else {
            setTitle('');
            setDescription('');
            setImageUrl('');
            setDueDate('');
            setCompleted(false);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({title, description, imageUrl, dueDate, completed});
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.dialog}>
                <h2>{initialData ? "Editar Tarea" : "Añadir Tarea"}</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>
                        Título:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Descripción:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        URL de la imagen:
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </label>
                    <label>
                        Fecha límite:
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            required
                        />
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)}
                        />
                        Completada
                    </label>
                    <div className={styles.buttonGroup}>
                        <button type="submit" className={styles.saveButton}>
                            {initialData ? "Actualizar" : "Crear"}
                        </button>
                        <button type="button" onClick={onClose} className={styles.cancelButton}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

TaskDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
        dueDate: PropTypes.string,
        completed: PropTypes.bool,
    }),
};

export default TaskDialog;
