import React from 'react';
import styles from './Select.module.scss';

export default function Select( {description, name, updateFieldHandler, selected='', children} ) {
    return (
        <div className={styles.divField}>
            <label>{description}</label>
            <div className={styles.divField__group}>
                <select
                    id={name}
                    name={name}
                    defaultValue={selected}
                    onChange={(e) => updateFieldHandler(`${name}`, e.target.value)} 
                >
                    {children}   
                </select> 
            </div>
        </div>
    )
}
