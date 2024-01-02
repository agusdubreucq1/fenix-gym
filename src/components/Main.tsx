import React from 'react';
import styles from '../styles/main.module.css'

// import fondo from '/imagenes/fondo.svg'
const Main:React.FC = () => {
  return (
    <main className={styles.main}>
        {/* <img className={styles.img_fondo} src={fondo}></img> */}
        <div className={styles.text}>
            <h1 className={styles.h1}>Unite a los que saben</h1>
            <a href='#nosotros'>Ver Mas</a>
        </div>
        
    </main>
  );
};

export default Main