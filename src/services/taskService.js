// taskService.js
import {getAuthToken} from "./authService";

const baseURL = "http://localhost:3000/tasks";

const getAuthHeaders = () => ({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getAuthToken()}`,
});

// Obtener todas las tareas
export const getTasks = async () => {
    try {
        const response = await fetch(baseURL, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("Error al obtener las tareas");
        return await response.json();
    } catch (error) {
        console.error("Error en getTasks:", error);
        throw error;
    }
};

// Obtener una tarea por ID
export const getTaskById = async (id) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("Error al obtener la tarea");
        return await response.json();
    } catch (error) {
        console.error("Error en getTaskById:", error);
        throw error;
    }
};

// Crear una nueva tarea
export const createTask = async (taskData) => {
    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(taskData),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Error al crear la tarea");
        }
        return await response.json();
    } catch (error) {
        console.error("Error en createTask:", error);
        throw error;
    }
};

// Actualizar una tarea existente (PATCH para actualización parcial)
export const updateTask = async (id, updatedData) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            method: "PATCH",
            headers: getAuthHeaders(),
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Error al actualizar la tarea");
        }
        return await response.json();
    } catch (error) {
        console.error("Error en updateTask:", error);
        throw error;
    }
};

// Eliminar una tarea
export const deleteTask = async (id) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            method: "DELETE",
            headers: getAuthHeaders(),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Error al eliminar la tarea");
        }
    } catch (error) {
        console.error("Error en deleteTask:", error);
        throw error;
    }
};