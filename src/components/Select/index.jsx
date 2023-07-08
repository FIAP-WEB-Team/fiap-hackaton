import React from 'react';
import styles from './Select.module.scss';

export default function Select( {description, name, updateFieldHandler, children} ) {
    return (
        <div className={styles.divField}>
            <label>{description}</label>
            <div className={styles.divField__group}>
                <select
                    id={name}
                    name={name}
                    onChange={(e) => updateFieldHandler(`${name}`, e.target.value)} 
                >
                    {children}   
                </select> 
            </div>
        </div>
    )
}
