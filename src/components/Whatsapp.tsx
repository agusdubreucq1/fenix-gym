import React from 'react';
import logo_wpp from '/iconos/whatsapp.webp'
import styles from '../styles/whatsapp.module.css'

const Whatsapp:React.FC = () => {
  return (
    <a className={styles.a} href='https://api.whatsapp.com/send?phone=5491156149965&&text=Hola%20Fenix'>
        <img src={logo_wpp}></img>
    </a>
  );
};

export default Whatsapp