/* Header.jsx */
import React from 'react';
import styles from './Header.module.css';
import LogoutButton from './LogoutButton';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Lista de Tareas</h1>
            <LogoutButton/>
        </header>
    );
}

export default Header;
