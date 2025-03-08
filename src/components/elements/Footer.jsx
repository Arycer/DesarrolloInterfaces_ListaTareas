/* Footer.jsx */
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer className={styles.footer}>
            <p>&copy; {getYear()} Mi Aplicación de Tareas</p>
        </footer>
    );
}

export default Footer;
