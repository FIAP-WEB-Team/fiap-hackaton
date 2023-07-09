import React from 'react';
import styles from './Button.module.scss';

export default function Button( {description, handle} ) {
    return (
        <button type="button" className={styles.button} onClick={handle} >
            <div className={styles.button__groupButton}>
                <span>{description}</span>
            </div>
        </button>
    )
}
