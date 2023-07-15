import React from 'react';
import styles from './Textarea.module.scss';

export default function Textarea( {description, name, row, handleValidator, children=''} ) {
    return (
        <div className={styles.divField}>
            <label>{description}</label>
            <div className={styles.divField__group}>
                <textarea 
                    id={name}
                    name={name}
                    onChange={handleValidator}
                    rows={row} 
                    defaultValue={children}>
                </textarea> 
            </div>
        </div> 
    )
}
