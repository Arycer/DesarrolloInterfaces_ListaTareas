// authService.js
export const baseURL = "http://localhost:3000";
export const registerURL = baseURL + "/register";
export const loginURL = baseURL + "/login";

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(loginURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password}),
            credentials: "include",
        });

        if (!response.ok) throw new Error("Error en la autenticación");
        return response.json();
    } catch (error) {
        console.error("Error en el login:", error);
        throw error;
    }
};

export const registerUser = async (email, password) => {
    const userData = {email, password};

    try {
        const response = await fetch(registerURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Error al registrar el usuario.");
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message || "Hubo un problema con la conexión. Inténtalo más tarde.");
        } else {
            throw new Error("Hubo un problema con la conexión. Inténtalo más tarde.");
        }
    }
};

export const setAuthToken = (token) => {
    localStorage.setItem("token", token);
    document.cookie = `jwtToken=${token}; Path=/; SameSite=Strict`;
};

export const logout = () => {
    localStorage.removeItem("token");
    document.cookie = "jwtToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
}

export const getAuthToken = () => {
    return localStorage.getItem("token");
}