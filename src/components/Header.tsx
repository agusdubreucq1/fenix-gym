import React from 'react';
import logo from '/imagenes/logo.svg'
import styles from '../styles/header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <a href='#main'>
                <img src={logo} alt="logo de fenix gym" width={60} height={60}/>
                <p>Fenix Gym</p>
            </a>
        </nav>
    </header>
  );
};

export default Header