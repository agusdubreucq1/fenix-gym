import React from 'react';
import styles from '../styles/cardProfe.module.css'

interface Props {
    imgFront: string,
    imgBack?: string,
    name: string
}

const CardProfe: React.FC<Props> = ({ imgFront, imgBack, name }) => {
    return (
        <div className={styles.container}>
            <article className={styles.article}>
                <picture className={styles.picture}>
                    <img src={imgFront} className={styles.img_front}></img>
                    <img src={imgBack} className={styles.img_back}></img>
                </picture>
                <div>
                    <p className={styles.name}>{name}</p>
                </div>
            </article>
        </div>

    );
};

export default CardProfe