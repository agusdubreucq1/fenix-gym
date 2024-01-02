import React from 'react';
import styles from '../styles/contacto.module.css'

const Contacto: React.FC = () => {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h3 className={styles.title}>Nuestra Casa</h3>
                <div className={styles.content}>
                    <div className={styles.container__iframe}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.886090158625!2d-58.76327852452317!3d-34.65757957293493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9512ced26e3d%3A0x77ace53416b7af73!2sFenix%20Gym!5e0!3m2!1ses!2sar!4v1704069399301!5m2!1ses!2sar" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.key}>Ubicación</p>
                        <p className={styles.value}>25 de mayo al 1900, paso del rey</p>
                        <p className={styles.key}>Horarios</p>
                        <p className={styles.value}>lun - vie 8hs a 23hs
                            sab : 8hs a 15hs</p>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Contacto