/* LogoutButton.jsx */
import React from 'react';
import styles from './LogoutButton.module.css';
import {isAuthenticated, logout} from "../../services/authService.js";

const LogoutButton = () => {
    const handleLogout = () => {
        logout();
        window.location.reload();
    }


    if (!isAuthenticated()) return null;

    return (
        <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
