import React from 'react';
import styles from '../styles/equipo.module.css'
import CardProfe from './CardProfe';

import ronnie from '/imagenes/ronnie.svg'
import ronnie_back from '/imagenes/ronnie_back.webp'

import profe1 from '/imagenes/profe4.webp'
import profe2 from '/imagenes/profe2.webp'
import profe3 from '/imagenes/profe3.webp'

const Equipo: React.FC = () => {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h2>Nuestro Equipo</h2>
                <div className={styles.cards}>
                    <CardProfe name={'Profe 1'} imgFront={profe1} imgBack={ronnie_back}></CardProfe>
                    <CardProfe name={'Profe 2'} imgFront={profe2} imgBack={ronnie_back}></CardProfe>
                    <CardProfe name={'Profe 3'} imgFront={profe3} imgBack={ronnie_back}></CardProfe>
                    <CardProfe name={'Ronnnie'} imgFront={ronnie} imgBack={ronnie_back}></CardProfe>
                    <CardProfe name={'Ronnnie'} imgFront={ronnie} imgBack={ronnie_back}></CardProfe>
                </div>
            </section>
        </div>

    );
};

export default Equipo