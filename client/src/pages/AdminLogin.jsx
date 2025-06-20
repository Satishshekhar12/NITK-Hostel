import React from 'react';
import styles from '../styles/adminlogin.module.css';

const AdminLogin = () => {
    return (
        <div className={styles.container}>
            <h2> Admin Login</h2>
            <form className={styles.form}>
                <label>
                    Username: 
                    <input type='text' placeholder='Enter UserName'/>
                </label>
                <label>
                    Password:
                    <input type='password' placeholder='Enter Password'/>
                </label>
                <button type='submit'>Login</button>

            </form>

        </div>
    );
};
export default AdminLogin;