import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to Fitness Tracker</h1>
            <p>Track your daily exercises and stay fit!</p>
        </div>
    );
};

export default Home;