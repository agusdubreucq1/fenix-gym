import React from 'react';
import styles from '../styles/nosotros.module.css'

// import img1 from '/imagenes/img1.svg'
// import img2 from '/imagenes/img2.svg'
// import img3 from '/imagenes/img3.svg'
// import img4 from '/imagenes/img4.svg'

import img1 from '/imagenes/fondo.svg'
import img2 from '/imagenes/fondo3.webp'
import img3 from '/imagenes/fondo2.webp'
import img4 from '/imagenes/fondo4.webp'

const Nosotros: React.FC = () => {
    return (
        <div className={styles.container}>
            <section className={styles.section} id='nosotros'>

                <div className={styles.texto}>
                    <h1>Mas que un <br /><span>gimnasio</span><br /> una familia</h1>
                </div>
                <div className={styles.galeria}>
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                    <img src={img3} alt="img3" />
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                    <img src={img4} alt="img4" />
                </div>


            </section>
        </div>
    );
};

export default Nosotros