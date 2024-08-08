import React from 'react';
import { Dropdown,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <navbar className={styles.nav}>
            <Navbar.Brand className={styles.header}>FitnessTracker</Navbar.Brand>
            <Dropdown className={styles.dropdown}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={`${styles.hamburgerButton} custom-dropdown-toggle`}>
                      ☰
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/exercises">Exercises</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </navbar>
    );
};

export default NavBar;



