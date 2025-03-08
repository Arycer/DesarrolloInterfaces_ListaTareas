/* RegisterForm.jsx */
import React, {useState} from 'react';
import {registerUser} from '../../services/authService';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMsg('');

        if (!email || !password) {
            setErrorMsg('Todos los campos son obligatorios.');
            return;
        }

        if (password.length < 5) {
            setErrorMsg('La contraseña debe tener al menos 5 caracteres.');
            return;
        }

        try {
            setLoading(true);
            await registerUser(email, password);
            alert('Registro exitoso. Ahora inicia sesión.');
            window.location.href = '/auth/login';
        } catch (error) {
            setErrorMsg(error.message || 'Hubo un problema con la conexión. Inténtalo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.registerWrapper}>
            <h1 className={styles.title}>Gestor de tareas</h1>
            <div className={styles.registerContainer}>
                <h2 className={styles.registerTitle}>Registrarse</h2>
                <form onSubmit={handleSubmit} className={styles.registerForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ejemplo@email.com"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mínimo 5 caracteres"
                            required
                            minLength="5"
                        />
                    </div>

                    <button type="submit" className={styles.btn} disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrarse'}
                    </button>
                </form>

                <p className={styles.registerFooter}>
                    ¿Ya tienes cuenta? <a href="/auth/login" className={styles.registerLink}>Inicia sesión</a>
                </p>

                {errorMsg && (
                    <div id="errorMsg" className={styles.errorMessage} aria-live="polite">
                        {errorMsg}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterForm;
